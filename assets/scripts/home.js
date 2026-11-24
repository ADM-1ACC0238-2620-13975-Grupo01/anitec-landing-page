// Behaviour of the redesigned home page: intro, floating navigation, reveals, pinned showcase and parallax.
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var body = document.body;

  // ---- Intro: shown once per visit, skippable with Esc, a click or a key press
  var preloader = document.getElementById("preloader");
  function hidePreloader() {
    if (preloader) preloader.classList.add("done");
  }
  if (preloader) {
    var seen = false;
    try {
      seen = sessionStorage.getItem("anitec-intro") === "1";
      sessionStorage.setItem("anitec-intro", "1");
    } catch (e) {
      /* storage can be blocked; the intro just plays */
    }
    if (seen || reduceMotion) {
      hidePreloader();
    } else {
      window.addEventListener("keydown", hidePreloader, { once: true });
      preloader.addEventListener("click", hidePreloader, { once: true });
    }
  }

  // ---- Floating navigation gets compact after the first scroll
  var nav = document.getElementById("nav");
  function onScroll() {
    if (nav) nav.classList.toggle("compact", window.scrollY > 40);
  }

  // ---- Mobile menu
  var menuBtn = document.getElementById("menu-btn");
  var menu = document.getElementById("menu");
  function setMenu(open) {
    body.classList.toggle("menu-open", open);
    if (menuBtn) {
      menuBtn.setAttribute("aria-expanded", String(open));
    }
    if (menu) menu.setAttribute("aria-hidden", String(!open));
  }
  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      setMenu(!body.classList.contains("menu-open"));
    });
  }
  if (menu) {
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        setMenu(false);
      });
    });
  }
  window.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setMenu(false);
  });

  // ---- Reveal on scroll
  var revealEls = document.querySelectorAll(".reveal, .reveal-line");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" }
    );
    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("in");
    });
  }

  // ---- Pinned showcase: the phone changes its screen with the step in view
  var steps = document.querySelectorAll(".showcase-steps .step");
  var shots = document.querySelectorAll(".showcase-stage .shot");
  if (steps.length && shots.length && "IntersectionObserver" in window) {
    var stepObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var index = entry.target.getAttribute("data-step");
          steps.forEach(function (s) {
            s.classList.toggle("active", s === entry.target);
          });
          shots.forEach(function (shot) {
            shot.classList.toggle("active", shot.getAttribute("data-step") === index);
          });
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    steps.forEach(function (s) {
      stepObserver.observe(s);
    });
  }

  // ---- Hero parallax (the photo moves slower than the page)
  var heroBg = document.querySelector(".hero-bg");
  var ticking = false;
  function parallax() {
    ticking = false;
    var y = window.scrollY;
    if (heroBg && y < window.innerHeight * 1.2) {
      heroBg.style.transform = "translate3d(0," + y * 0.18 + "px,0)";
    }
  }
  window.addEventListener(
    "scroll",
    function () {
      onScroll();
      if (!reduceMotion && !ticking) {
        ticking = true;
        requestAnimationFrame(parallax);
      }
    },
    { passive: true }
  );
  onScroll();
})();
