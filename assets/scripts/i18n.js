// i18n translations for AniTec (English is the default language; Latin American Spanish is available)
const translations = {
  en: {},
  es: {}
};

// ---------------------------------------------------------------- Navbar
translations.en.nav = {
  home: "Home",
  about: "About Us",
  ranchers: "Ranchers",
  veterinarians: "Veterinarians",
  pricing: "Pricing",
  startFree: "Download",
  menu: "Menu"
};

translations.es.nav = {
  home: "Inicio",
  about: "Nosotros",
  ranchers: "Ganaderos",
  veterinarians: "Veterinarios",
  pricing: "Planes",
  startFree: "Descargar",
  menu: "Menú"
};

// ---------------------------------------------------------------- Page titles and meta descriptions
translations.en.meta = {
  home: {
    title: "AniTec - Livestock Management App for Ranchers and Veterinarians",
    desc: "AniTec is a mobile app for ranchers and veterinarians. Register farms and animals, keep health records, schedule activities and keep working with limited signal.",
    og: "AniTec - Livestock Management App"
  },
  ranchers: {
    title: "For Ranchers - AniTec",
    desc: "AniTec for ranchers: register farms, corrals and animals, keep health records, schedule activities and track income and expenses from your phone.",
    og: "For Ranchers - AniTec"
  },
  vets: {
    title: "For Veterinarians - AniTec",
    desc: "AniTec for veterinarians: follow your clients' animals, review clinical history and record visits from your phone.",
    og: "For Veterinarians - AniTec"
  },
  about: {
    title: "About Us - AniTec",
    desc: "Meet the team behind AniTec, a livestock management app built by five students for the Mobile Applications course at UPC.",
    og: "About Us - AniTec"
  },
  terms: {
    title: "Terms of Service - AniTec",
    desc: "Terms of Service of the AniTec app.",
    og: "Terms of Service - AniTec"
  }
};

translations.es.meta = {
  home: {
    title: "AniTec - App de gestión ganadera para ganaderos y veterinarios",
    desc: "AniTec es una aplicación móvil para ganaderos y veterinarios. Registra fincas y animales, lleva los registros sanitarios, programa actividades y sigue trabajando con poca señal.",
    og: "AniTec - App de gestión ganadera"
  },
  ranchers: {
    title: "Para Ganaderos - AniTec",
    desc: "AniTec para ganaderos: registra fincas, corrales y animales, lleva los registros sanitarios, programa actividades y controla ingresos y egresos desde tu teléfono.",
    og: "Para Ganaderos - AniTec"
  },
  vets: {
    title: "Para Veterinarios - AniTec",
    desc: "AniTec para veterinarios: sigue los animales de tus clientes, revisa el historial clínico y registra visitas desde tu teléfono.",
    og: "Para Veterinarios - AniTec"
  },
  about: {
    title: "Nosotros - AniTec",
    desc: "Conoce al equipo detrás de AniTec, una aplicación de gestión ganadera creada por cinco estudiantes para el curso de Aplicaciones para Dispositivos Móviles de la UPC.",
    og: "Nosotros - AniTec"
  },
  terms: {
    title: "Términos de Servicio - AniTec",
    desc: "Términos de Servicio de la aplicación AniTec.",
    og: "Términos de Servicio - AniTec"
  }
};

// ---------------------------------------------------------------- Home: hero
translations.en.hero = {
  badge: "Android app · English and Spanish",
  title1: "Manage your ",
  title2: "Livestock",
  title3: " from your Phone",
  description: "AniTec is a mobile app for ranchers and veterinarians. Register your farms and animals, keep health records, schedule activities and keep working even with limited signal.",
  download: "Download the App",
  learnMore: "Learn More",
  stat1n: "2",
  stat1: "User roles",
  stat2n: "2",
  stat2: "Languages",
  stat3n: "Offline",
  stat3: "Saves your work",
  statsAd1: "Animal registered",
  statsAd2: "Saved on your phone",
  statsAd3: "Health record",
  statsAd4: "Synced when online"
};

translations.es.hero = {
  badge: "App para Android · Inglés y español",
  title1: "Gestiona tu ",
  title2: "Ganado",
  title3: " desde tu Teléfono",
  description: "AniTec es una aplicación móvil para ganaderos y veterinarios. Registra tus fincas y animales, lleva los registros sanitarios, programa actividades y sigue trabajando aunque tengas poca señal.",
  download: "Descargar la App",
  learnMore: "Saber más",
  stat1n: "2",
  stat1: "Roles de usuario",
  stat2n: "2",
  stat2: "Idiomas",
  stat3n: "Sin red",
  stat3: "Guarda tu trabajo",
  statsAd1: "Animal registrado",
  statsAd2: "Guardado en tu teléfono",
  statsAd3: "Registro sanitario",
  statsAd4: "Se sincroniza al volver la red"
};

// ---------------------------------------------------------------- Home: segments
translations.en.segments = {
  subtitle: "Two Roles, One App",
  title: "Designed for Ranchers and Veterinarians",
  description: "Each role gets its own experience and sees only its own information.",
  ranchersTitle: "Ranchers",
  ranchersDesc: "Small and medium producers who need to register farms, corrals and animals and keep track of health, activities and finances.",
  vetsTitle: "Veterinarians",
  vetsDesc: "Animal health professionals who follow their clients' animals, review clinical history and record visits.",
  viewBenefits: "View Benefits"
};

translations.es.segments = {
  subtitle: "Dos roles, una app",
  title: "Diseñada para Ganaderos y Veterinarios",
  description: "Cada rol tiene su propia experiencia y ve solo su información.",
  ranchersTitle: "Ganaderos",
  ranchersDesc: "Pequeños y medianos productores que necesitan registrar fincas, corrales y animales y llevar el control de la sanidad, las actividades y las finanzas.",
  vetsTitle: "Veterinarios",
  vetsDesc: "Profesionales de la salud animal que siguen a los animales de sus clientes, revisan el historial clínico y registran visitas.",
  viewBenefits: "Ver Beneficios"
};

// ---------------------------------------------------------------- Home: highlights ("metrics" section)
translations.en.metrics = {
  subtitle: "Built for the Field",
  title: "Made for work in the field",
  description: "AniTec is designed for places where the signal comes and goes.",
  num1: "Offline",
  label1: "Works with limited signal",
  desc1: "Animals, health records and activities you create without a connection are saved on your phone and sent when it reconnects.",
  num2: "QR",
  label2: "Scan the ear tag",
  desc2: "Identify an animal by scanning its code with the camera, or type the code if you prefer.",
  num3: "EN · ES",
  label3: "Two languages",
  desc3: "Switch between English and Spanish from inside the app.",
  num4: "2",
  label4: "Two roles",
  desc4: "Ranchers and veterinarians each see only the farms, animals and records that belong to them."
};

translations.es.metrics = {
  subtitle: "Pensada para el campo",
  title: "Hecha para trabajar en el campo",
  description: "AniTec está diseñada para lugares donde la señal va y viene.",
  num1: "Sin red",
  label1: "Funciona con poca señal",
  desc1: "Los animales, registros sanitarios y actividades que crees sin conexión se guardan en tu teléfono y se envían cuando vuelve la red.",
  num2: "QR",
  label2: "Escanea el arete",
  desc2: "Identifica un animal escaneando su código con la cámara, o escribe el código si prefieres.",
  num3: "EN · ES",
  label3: "Dos idiomas",
  desc3: "Cambia entre inglés y español desde la propia aplicación.",
  num4: "2",
  label4: "Dos roles",
  desc4: "Ganaderos y veterinarios ven solo las fincas, animales y registros que les corresponden."
};

// ---------------------------------------------------------------- Home: features
translations.en.features = {
  subtitle: "Key Features",
  title: "What you can do with AniTec",
  description: "Everything you need to run your livestock from your phone.",
  animalsTitle: "Farms and Animals",
  animalsDesc: "Organize your animals by farm and corral. Register them one by one or in batches of up to 500, add a photo and open a complete record.",
  healthTitle: "Health Records",
  healthDesc: "Record incidents, vaccines, treatments and diagnoses, with a follow-up date so nothing is forgotten.",
  activitiesTitle: "Activities",
  activitiesDesc: "Schedule farm tasks and see the upcoming ones first and the overdue ones highlighted.",
  financeTitle: "Finances",
  financeDesc: "Record income and expenses in soles and see your balance at any time.",
  vetTitle: "Veterinary Collaboration",
  vetDesc: "Veterinarians add ranchers as clients and review their animals and clinical history.",
  analyticsTitle: "Analytics and Sensors",
  analyticsDesc: "See charts of your herd's health and records, and the latest readings from your IoT devices."
};

translations.es.features = {
  subtitle: "Funciones principales",
  title: "Lo que puedes hacer con AniTec",
  description: "Todo lo que necesitas para llevar tu ganado desde el teléfono.",
  animalsTitle: "Fincas y Animales",
  animalsDesc: "Organiza tus animales por finca y corral. Regístralos uno por uno o en lotes de hasta 500, agrega una foto y abre una ficha completa.",
  healthTitle: "Registros Sanitarios",
  healthDesc: "Registra incidencias, vacunas, tratamientos y diagnósticos, con una fecha de seguimiento para que nada se olvide.",
  activitiesTitle: "Actividades",
  activitiesDesc: "Programa las tareas de la finca y ve primero las próximas y resaltadas las vencidas.",
  financeTitle: "Finanzas",
  financeDesc: "Registra ingresos y egresos en soles y consulta tu balance en cualquier momento.",
  vetTitle: "Colaboración Veterinaria",
  vetDesc: "Los veterinarios agregan ganaderos como clientes y revisan sus animales y su historial clínico.",
  analyticsTitle: "Analítica y Sensores",
  analyticsDesc: "Mira gráficos de la salud de tu hato y de tus registros, y las últimas lecturas de tus dispositivos IoT."
};

// ---------------------------------------------------------------- Home: app gallery
translations.en.gallery = {
  subtitle: "The App",
  title: "See AniTec in Action",
  description: "Screens of the Android app.",
  home: "Home",
  farms: "Farms",
  health: "Health records",
  activities: "Activities",
  finance: "Finances",
  analytics: "Analytics"
};

translations.es.gallery = {
  subtitle: "La App",
  title: "Mira AniTec en acción",
  description: "Pantallas de la aplicación Android.",
  home: "Inicio",
  farms: "Fincas",
  health: "Registros sanitarios",
  activities: "Actividades",
  finance: "Finanzas",
  analytics: "Analítica"
};

// ---------------------------------------------------------------- Home: how it works
translations.en.howItWorks = {
  subtitle: "Get Started",
  title: "Get started in four steps",
  description: "No special knowledge needed: choose your role and start registering.",
  step1Title: "Download the App",
  step1Desc: "Install the Android app from the download section.",
  step2Title: "Create Your Account",
  step2Desc: "Choose whether you are a rancher or a veterinarian and accept the Terms of Service.",
  step3Title: "Register Your Livestock",
  step3Desc: "Add your farms, corrals and animals.",
  step4Title: "Keep Everything Up to Date",
  step4Desc: "Record health events, activities and finances from your phone.",
  ctaTitle: "Ready to start?",
  ctaDesc: "Download the app and create your account.",
  ctaButton: "Download the App"
};

translations.es.howItWorks = {
  subtitle: "Comienza",
  title: "Comienza en cuatro pasos",
  description: "No necesitas conocimientos especiales: elige tu rol y empieza a registrar.",
  step1Title: "Descarga la App",
  step1Desc: "Instala la aplicación Android desde la sección de descarga.",
  step2Title: "Crea tu Cuenta",
  step2Desc: "Elige si eres ganadero o veterinario y acepta los Términos de Servicio.",
  step3Title: "Registra tu Ganado",
  step3Desc: "Agrega tus fincas, corrales y animales.",
  step4Title: "Mantén todo al día",
  step4Desc: "Registra eventos sanitarios, actividades y finanzas desde tu teléfono.",
  ctaTitle: "¿Listo para empezar?",
  ctaDesc: "Descarga la app y crea tu cuenta.",
  ctaButton: "Descargar la App"
};

// ---------------------------------------------------------------- Home: download
translations.en.download = {
  subtitle: "Download",
  title: "Get the AniTec App",
  description: "AniTec is available for Android. A cross-platform version for Android and iOS is on its way.",
  androidTitle: "Android",
  androidDesc: "Distributed to testers through Firebase App Distribution. Request access from the team to install it.",
  androidButton: "Get the Android App",
  flutterTitle: "iOS and Flutter",
  flutterDesc: "We are building a Flutter version that will run on Android and iOS.",
  flutterButton: "Coming soon"
};

translations.es.download = {
  subtitle: "Descarga",
  title: "Descarga la App de AniTec",
  description: "AniTec está disponible para Android. Una versión multiplataforma para Android e iOS está en camino.",
  androidTitle: "Android",
  androidDesc: "Se distribuye a evaluadores mediante Firebase App Distribution. Solicita acceso al equipo para instalarla.",
  androidButton: "Obtener la App de Android",
  flutterTitle: "iOS y Flutter",
  flutterDesc: "Estamos creando una versión en Flutter que funcionará en Android e iOS.",
  flutterButton: "Próximamente"
};

// ---------------------------------------------------------------- Home: pricing
translations.en.pricing = {
  subtitle: "Plans",
  title: "Plans for every role",
  description: "Monthly plans in Peruvian soles. Subscription payments inside the app are coming soon.",
  basic: "Rancher Basic",
  basicDesc: "To start digitizing a small herd",
  pro: "Rancher Pro",
  proDesc: "For larger herds",
  vet: "Veterinarian Professional",
  vetDesc: "For professionals who follow several clients",
  period: "/month",
  billed: "Billed monthly",
  mostPopular: "Most Popular",
  upTo80: "Up to <strong>80 animals</strong>",
  upTo250: "Up to <strong>250 animals</strong>",
  upTo1000: "Up to <strong>1,000 animals</strong>",
  allFeatures: "All app features",
  languages: "English and Spanish",
  clients: "Clients and patients",
  button: "Get the App",
  note: "Payments are processed by Stripe and currently run in test mode."
};

translations.es.pricing = {
  subtitle: "Planes",
  title: "Planes para cada rol",
  description: "Planes mensuales en soles. El pago de suscripciones dentro de la app llegará pronto.",
  basic: "Ganadero Básico",
  basicDesc: "Para empezar a digitalizar un hato pequeño",
  pro: "Ganadero Pro",
  proDesc: "Para hatos más grandes",
  vet: "Veterinario Profesional",
  vetDesc: "Para profesionales que siguen a varios clientes",
  period: "/mes",
  billed: "Cobro mensual",
  mostPopular: "Más Popular",
  upTo80: "Hasta <strong>80 animales</strong>",
  upTo250: "Hasta <strong>250 animales</strong>",
  upTo1000: "Hasta <strong>1,000 animales</strong>",
  allFeatures: "Todas las funciones de la app",
  languages: "Inglés y español",
  clients: "Clientes y pacientes",
  button: "Obtener la App",
  note: "Los pagos los procesa Stripe y actualmente funcionan en modo de prueba."
};

// ---------------------------------------------------------------- Footer (shared by every page)
translations.en.footer = {
  desc: "AniTec is a livestock management app for ranchers and veterinarians. Register farms and animals, keep health records and keep working with limited signal.",
  product: "Product",
  features: "Features",
  pricing: "Pricing",
  download: "Download",
  forRanchers: "For Ranchers",
  forVets: "For Veterinarians",
  project: "The Project",
  about: "About Us",
  github: "Source code",
  legal: "Legal",
  terms: "Terms of Service",
  copyright: "© 2026 AniTec. All rights reserved."
};

translations.es.footer = {
  desc: "AniTec es una aplicación de gestión ganadera para ganaderos y veterinarios. Registra fincas y animales, lleva los registros sanitarios y sigue trabajando con poca señal.",
  product: "Producto",
  features: "Funciones",
  pricing: "Planes",
  download: "Descargar",
  forRanchers: "Para Ganaderos",
  forVets: "Para Veterinarios",
  project: "El Proyecto",
  about: "Nosotros",
  github: "Código fuente",
  legal: "Legal",
  terms: "Términos de Servicio",
  copyright: "© 2026 AniTec. Todos los derechos reservados."
};

// ---------------------------------------------------------------- Ranchers page
translations.en.ranchers = {
  heroBadge: "For Ranchers",
  heroTitle1: "Manage your",
  heroTitle2: " Livestock",
  heroTitle3: " from your Phone",
  heroDesc: "AniTec is designed for small and medium ranchers who want to replace notebooks and loose papers with a simple app.",
  feat1: "Individual and batch animal registration",
  feat2: "Health records with follow-up dates",
  feat3: "Income, expenses and balance in soles",
  feat4: "Works with limited signal",
  viewBenefits: "View Benefits",
  tryFree: "Download the App",
  benefitsSubtitle: "Benefits",
  benefitsTitle: "Why AniTec for Ranchers?",
  benefitsDesc: "What the app helps you do every day.",
  benef1Title: "Individual Records",
  benef1Desc: "Identify each animal with a code and record its species, breed, sex, weight, status, farm, corral and a photo.",
  benef2Title: "Follow-up Dates",
  benef2Desc: "Save the date of the next check or vaccine so you can see what is pending.",
  benef3Title: "Health Control",
  benef3Desc: "Keep the health history of your animals: incidents, vaccines, treatments, diagnoses and prescriptions.",
  benef4Title: "Scan the Ear Tag",
  benef4Desc: "Find an animal by scanning its tag with the camera, or by typing its code.",
  benef5Title: "Finances",
  benef5Desc: "Record income and expenses and see your balance in soles.",
  benef6Title: "Herd Overview",
  benef6Desc: "See how many animals are healthy, under observation or in treatment, and your records by type.",
  modulesSubtitle: "Modules",
  modulesTitle: "Everything you can manage",
  mod1Title: "Animal Management",
  mod1Desc: "Register animals one by one or in batches, organize them by farm and corral and search for them.",
  mod2Title: "Health Control",
  mod2Desc: "Keep the health records of your herd in order.",
  mod3Title: "Activities",
  mod3Desc: "Plan the tasks of your farm.",
  mod4Title: "Finances",
  mod4Desc: "Know how your business is doing.",
  modFeat1: "Individual and batch registration",
  modFeat2: "Farms and corrals",
  modFeat3: "Search and corral filter",
  modFeat4: "Record with photo",
  modFeat5: "Incidents and vaccines",
  modFeat6: "Treatments and diagnoses",
  modFeat7: "Prescriptions",
  modFeat8: "Follow-up dates",
  modFeat9: "Scheduled tasks",
  modFeat10: "Priority and status",
  modFeat11: "Upcoming first",
  modFeat12: "Overdue highlighted",
  modFeat13: "Income records",
  modFeat14: "Expense records",
  modFeat15: "Balance in soles",
  modFeat16: "Records by date",
  ctaBadge: "Android app",
  ctaTitle: "Ready to take your ranch to your phone?",
  ctaDesc: "Download the app, choose the rancher role and start registering your farms and animals.",
  ctaFeat1: "Choose your role when you sign up",
  ctaFeat2: "English and Spanish",
  ctaFeat3: "Works with limited signal",
  startFree: "Download the App",
  seeHow: "See the Features",
  ctaNote: "Your session is stored encrypted on your device."
};

translations.es.ranchers = {
  heroBadge: "Para Ganaderos",
  heroTitle1: "Gestiona tu",
  heroTitle2: " Ganado",
  heroTitle3: " desde tu Teléfono",
  heroDesc: "AniTec está pensada para pequeños y medianos ganaderos que quieren reemplazar cuadernos y papeles sueltos por una aplicación sencilla.",
  feat1: "Registro individual y por lotes de animales",
  feat2: "Registros sanitarios con fechas de seguimiento",
  feat3: "Ingresos, egresos y balance en soles",
  feat4: "Funciona con poca señal",
  viewBenefits: "Ver Beneficios",
  tryFree: "Descargar la App",
  benefitsSubtitle: "Beneficios",
  benefitsTitle: "¿Por qué AniTec para Ganaderos?",
  benefitsDesc: "Lo que la app te ayuda a hacer cada día.",
  benef1Title: "Fichas Individuales",
  benef1Desc: "Identifica cada animal con un código y registra su especie, raza, sexo, peso, estado, finca, corral y una foto.",
  benef2Title: "Fechas de Seguimiento",
  benef2Desc: "Guarda la fecha del próximo control o vacuna para ver qué está pendiente.",
  benef3Title: "Control Sanitario",
  benef3Desc: "Mantén el historial de salud de tus animales: incidencias, vacunas, tratamientos, diagnósticos y prescripciones.",
  benef4Title: "Escanea el Arete",
  benef4Desc: "Encuentra un animal escaneando su arete con la cámara o escribiendo su código.",
  benef5Title: "Finanzas",
  benef5Desc: "Registra ingresos y egresos y mira tu balance en soles.",
  benef6Title: "Resumen del Hato",
  benef6Desc: "Mira cuántos animales están sanos, en observación o en tratamiento, y tus registros por tipo.",
  modulesSubtitle: "Módulos",
  modulesTitle: "Todo lo que puedes gestionar",
  mod1Title: "Gestión de Animales",
  mod1Desc: "Registra animales uno por uno o por lotes, organízalos por finca y corral y búscalos.",
  mod2Title: "Control Sanitario",
  mod2Desc: "Mantén en orden los registros de salud de tu hato.",
  mod3Title: "Actividades",
  mod3Desc: "Planifica las tareas de tu finca.",
  mod4Title: "Finanzas",
  mod4Desc: "Conoce cómo va tu negocio.",
  modFeat1: "Registro individual y por lotes",
  modFeat2: "Fincas y corrales",
  modFeat3: "Búsqueda y filtro por corral",
  modFeat4: "Ficha con foto",
  modFeat5: "Incidencias y vacunas",
  modFeat6: "Tratamientos y diagnósticos",
  modFeat7: "Prescripciones",
  modFeat8: "Fechas de seguimiento",
  modFeat9: "Tareas programadas",
  modFeat10: "Prioridad y estado",
  modFeat11: "Primero las próximas",
  modFeat12: "Vencidas resaltadas",
  modFeat13: "Registro de ingresos",
  modFeat14: "Registro de egresos",
  modFeat15: "Balance en soles",
  modFeat16: "Registros por fecha",
  ctaBadge: "App para Android",
  ctaTitle: "¿Listo para llevar tu finca a tu teléfono?",
  ctaDesc: "Descarga la app, elige el rol de ganadero y empieza a registrar tus fincas y animales.",
  ctaFeat1: "Elige tu rol al registrarte",
  ctaFeat2: "Inglés y español",
  ctaFeat3: "Funciona con poca señal",
  startFree: "Descargar la App",
  seeHow: "Ver las Funciones",
  ctaNote: "Tu sesión se guarda cifrada en tu dispositivo."
};

// ---------------------------------------------------------------- Veterinarians page
translations.en.vets = {
  heroBadge: "For Veterinarians",
  heroTitle1: "Care for your clients' ",
  heroTitle2: "Livestock",
  heroDesc: "AniTec lets veterinarians follow the animals of the ranchers they add as clients, review clinical history and record visits from their phone.",
  feat1: "Clients and patients",
  feat2: "Clinical history per animal",
  feat3: "Records shared with the rancher",
  feat4: "Works with limited signal",
  viewBenefits: "View Benefits",
  tryFree: "Download the App",
  benefitsSubtitle: "Benefits",
  benefitsTitle: "Why AniTec for Veterinarians?",
  benefitsDesc: "What the app helps you do in your daily practice.",
  benef1Title: "Clinical History",
  benef1Desc: "Review the health records of each animal: vaccines, treatments, diagnoses and follow-ups.",
  benef2Title: "Visits and Activities",
  benef2Desc: "Schedule visits and tasks for your clients.",
  benef3Title: "Shared with the Rancher",
  benef3Desc: "The records you save are available to the rancher in their own app.",
  benef4Title: "Health Overview",
  benef4Desc: "See charts of records by type and by farm for your clients.",
  benef5Title: "Mobile Access",
  benef5Desc: "Check animals during field visits, even with limited signal.",
  benef6Title: "Clients and Patients",
  benef6Desc: "Add ranchers as clients and open their farms and animals.",
  funcSubtitle: "Key Features",
  funcTitle: "What You Can Do",
  func1Title: "Patient List",
  func1Desc: "See your clients' animals and filter them by client and farm.",
  func2Title: "Visit Records",
  func2Desc: "Record each consultation: type, description, diagnosis and treatment.",
  func3Title: "Prescriptions",
  func3Desc: "Note the prescription and the follow-up of each health record.",
  func4Title: "Case Follow-up",
  func4Desc: "Set the date of the next check and see the pending follow-ups.",
  func5Title: "Scan the Ear Tag",
  func5Desc: "Find an animal by scanning its tag or typing its code.",
  func6Title: "Overview",
  func6Desc: "Counters and charts of your clients, patients and records.",
  tag1: "Client filter",
  tag2: "Farm filter",
  tag3: "Visit type",
  tag4: "Diagnosis",
  tag5: "Prescription",
  tag6: "Treatment",
  tag7: "Follow-up date",
  tag8: "Pending list",
  tag9: "Camera",
  tag10: "Manual code",
  tag11: "Charts",
  tag12: "Counters",
  caseSubtitle: "Use Cases",
  caseTitle: "How can AniTec help you?",
  caseDesc: "Everyday situations where the app makes your work easier.",
  case1Title: "Field Visit",
  case1Desc: "Before arriving at a farm, you review the history of the animals you are going to see.",
  case2Title: "Quick Identification",
  case2Desc: "You scan the tag of an animal and open its record.",
  case3Title: "Recording a Visit",
  case3Desc: "You record the diagnosis and the treatment, and the rancher sees them in their app.",
  case4Title: "Follow-up",
  case4Desc: "You set the date of the next check and see which follow-ups are pending.",
  ctaBadge: "Android app",
  ctaTitle: "Ready to take your practice to your phone?",
  ctaDesc: "Download the app, choose the veterinarian role and add your first client.",
  ctaFeat1: "Choose your role when you sign up",
  ctaFeat2: "English and Spanish",
  ctaFeat3: "Works with limited signal",
  startFree: "Download the App",
  seeHow: "See the Features",
  ctaNote: "Your session is stored encrypted on your device."
};

translations.es.vets = {
  heroBadge: "Para Veterinarios",
  heroTitle1: "Cuida el ",
  heroTitle2: "Ganado de tus clientes",
  heroDesc: "AniTec permite a los veterinarios seguir a los animales de los ganaderos que agregan como clientes, revisar el historial clínico y registrar visitas desde el teléfono.",
  feat1: "Clientes y pacientes",
  feat2: "Historial clínico por animal",
  feat3: "Registros compartidos con el ganadero",
  feat4: "Funciona con poca señal",
  viewBenefits: "Ver Beneficios",
  tryFree: "Descargar la App",
  benefitsSubtitle: "Beneficios",
  benefitsTitle: "¿Por qué AniTec para Veterinarios?",
  benefitsDesc: "Lo que la app te ayuda a hacer en tu práctica diaria.",
  benef1Title: "Historial Clínico",
  benef1Desc: "Revisa los registros de salud de cada animal: vacunas, tratamientos, diagnósticos y seguimientos.",
  benef2Title: "Visitas y Actividades",
  benef2Desc: "Programa visitas y tareas para tus clientes.",
  benef3Title: "Compartido con el Ganadero",
  benef3Desc: "Los registros que guardas están disponibles para el ganadero en su propia app.",
  benef4Title: "Resumen Sanitario",
  benef4Desc: "Mira gráficos de registros por tipo y por finca de tus clientes.",
  benef5Title: "Acceso Móvil",
  benef5Desc: "Consulta animales durante las visitas de campo, incluso con poca señal.",
  benef6Title: "Clientes y Pacientes",
  benef6Desc: "Agrega ganaderos como clientes y abre sus fincas y animales.",
  funcSubtitle: "Funciones principales",
  funcTitle: "Lo que puedes hacer",
  func1Title: "Lista de Pacientes",
  func1Desc: "Mira los animales de tus clientes y fíltralos por cliente y finca.",
  func2Title: "Registro de Visitas",
  func2Desc: "Registra cada consulta: tipo, descripción, diagnóstico y tratamiento.",
  func3Title: "Prescripciones",
  func3Desc: "Anota la prescripción y el seguimiento de cada registro sanitario.",
  func4Title: "Seguimiento de Casos",
  func4Desc: "Define la fecha del próximo control y mira los seguimientos pendientes.",
  func5Title: "Escanea el Arete",
  func5Desc: "Encuentra un animal escaneando su arete o escribiendo su código.",
  func6Title: "Resumen",
  func6Desc: "Contadores y gráficos de tus clientes, pacientes y registros.",
  tag1: "Filtro por cliente",
  tag2: "Filtro por finca",
  tag3: "Tipo de visita",
  tag4: "Diagnóstico",
  tag5: "Prescripción",
  tag6: "Tratamiento",
  tag7: "Fecha de seguimiento",
  tag8: "Lista de pendientes",
  tag9: "Cámara",
  tag10: "Código manual",
  tag11: "Gráficos",
  tag12: "Contadores",
  caseSubtitle: "Casos de uso",
  caseTitle: "¿Cómo puede ayudarte AniTec?",
  caseDesc: "Situaciones cotidianas en las que la app facilita tu trabajo.",
  case1Title: "Visita de Campo",
  case1Desc: "Antes de llegar a una finca, revisas el historial de los animales que vas a ver.",
  case2Title: "Identificación Rápida",
  case2Desc: "Escaneas el arete de un animal y abres su ficha.",
  case3Title: "Registro de una Visita",
  case3Desc: "Registras el diagnóstico y el tratamiento, y el ganadero los ve en su app.",
  case4Title: "Seguimiento",
  case4Desc: "Defines la fecha del próximo control y ves qué seguimientos están pendientes.",
  ctaBadge: "App para Android",
  ctaTitle: "¿Listo para llevar tu práctica a tu teléfono?",
  ctaDesc: "Descarga la app, elige el rol de veterinario y agrega a tu primer cliente.",
  ctaFeat1: "Elige tu rol al registrarte",
  ctaFeat2: "Inglés y español",
  ctaFeat3: "Funciona con poca señal",
  startFree: "Descargar la App",
  seeHow: "Ver las Funciones",
  ctaNote: "Tu sesión se guarda cifrada en tu dispositivo."
};

// ---------------------------------------------------------------- About page
translations.en.about = {
  heroBadge: "About Us",
  heroTitle1: "Building",
  heroTitle2: " AniTec",
  heroDesc1: "We are Titan, a team of five students from the Universidad Peruana de Ciencias Aplicadas (UPC).",
  heroDesc2: "AniTec is our project for the Mobile Applications course: an app that helps ranchers and veterinarians manage their livestock.",
  stat1n: "2026",
  stat1: "Year",
  stat2n: "5",
  stat2: "Team Members",
  stat3n: "1",
  stat3: "Product",
  stat4n: "2",
  stat4: "User Roles",
  meetTeam: "Meet the Team",
  viewPlans: "Download the App",
  ourStory: "Our Story",
  ourStoryDesc: "How the project started and where it is going",
  essenceSubtitle: "Our Essence",
  essenceTitle: "What Defines Us",
  essenceDesc: "The pillars that guide our work.",
  product: "Titan Startup · AniTec Product",
  mission: "Mission",
  missionText: "Help small and medium ranchers and veterinarians manage their animals and records with an accessible mobile app.",
  vision: "Vision",
  visionText: "To become a reference tool for livestock management that keeps working where the signal is limited.",
  values: "Values",
  val1: "Technological Innovation",
  val2: "Accessibility for All",
  val3: "Commitment to the Field",
  val4: "Continuous Improvement",
  teamSubtitle: "The Team",
  teamTitle: "Meet the Creators",
  teamDesc: "We are Titan, five students building AniTec.",
  member1Role: "Backend and Documentation",
  member1Bio: "Documents the deployment and the services of the backend.",
  member2Role: "Android and Backend Developer",
  member2Bio: "Builds the Android app and the backend services.",
  member3Role: "Landing Page and Documentation",
  member3Bio: "Designs the mobile version of the landing page and documents its evidence.",
  member4Role: "UX/UI Designer",
  member4Bio: "Designs the screens and the visual identity of the mobile apps.",
  member5Role: "Configuration and Distribution",
  member5Bio: "Documents the configuration, the tests and the distribution of the apps.",
  ideaTitle: "Follow the Project",
  ideaDesc: "The code and the report of AniTec are published on GitHub.",
  contactUs: "View on GitHub",
  productSubtitle: "The Product",
  productTitle: "What AniTec Does",
  productDesc: "A mobile app for livestock management.",
  productText: "AniTec helps ranchers register their farms, corrals and animals, and helps veterinarians follow the animals of their clients. Both share the information in one app that keeps working with limited signal.",
  productFeature1: "Animals organized by farm and corral, with photo and a complete record",
  productFeature2: "Health records with follow-up dates",
  productFeature3: "Information shared between ranchers and veterinarians",
  productFeature4: "Charts of your herd and of your records",
  screenshotsSubtitle: "App Screenshots",
  screenshotsTitle: "Explore the App",
  screenshotsDesc: "Screens of the Android app.",
  ctaBadge: "Android app",
  ctaTitle: "Ready to try AniTec?",
  ctaDesc: "Download the app and start managing your livestock from your phone.",
  ctaStartFree: "Download the App",
  ctaSeeHow: "See the Features"
};

translations.es.about = {
  heroBadge: "Nosotros",
  heroTitle1: "Construyendo",
  heroTitle2: " AniTec",
  heroDesc1: "Somos Titan, un equipo de cinco estudiantes de la Universidad Peruana de Ciencias Aplicadas (UPC).",
  heroDesc2: "AniTec es nuestro proyecto del curso de Aplicaciones para Dispositivos Móviles: una app que ayuda a ganaderos y veterinarios a gestionar su ganado.",
  stat1n: "2026",
  stat1: "Año",
  stat2n: "5",
  stat2: "Integrantes",
  stat3n: "1",
  stat3: "Producto",
  stat4n: "2",
  stat4: "Roles de usuario",
  meetTeam: "Conoce al Equipo",
  viewPlans: "Descargar la App",
  ourStory: "Nuestra Historia",
  ourStoryDesc: "Cómo empezó el proyecto y hacia dónde va",
  essenceSubtitle: "Nuestra Esencia",
  essenceTitle: "Lo que nos Define",
  essenceDesc: "Los pilares que guían nuestro trabajo.",
  product: "Startup Titan · Producto AniTec",
  mission: "Misión",
  missionText: "Ayudar a pequeños y medianos ganaderos y a veterinarios a gestionar sus animales y registros con una aplicación móvil accesible.",
  vision: "Visión",
  visionText: "Convertirnos en una herramienta de referencia para la gestión ganadera que siga funcionando donde la señal es limitada.",
  values: "Valores",
  val1: "Innovación Tecnológica",
  val2: "Accesibilidad para Todos",
  val3: "Compromiso con el Campo",
  val4: "Mejora Continua",
  teamSubtitle: "El Equipo",
  teamTitle: "Conoce a los Creadores",
  teamDesc: "Somos Titan, cinco estudiantes construyendo AniTec.",
  member1Role: "Backend y Documentación",
  member1Bio: "Documenta el despliegue y los servicios del backend.",
  member2Role: "Desarrollador Android y Backend",
  member2Bio: "Construye la aplicación Android y los servicios del backend.",
  member3Role: "Landing Page y Documentación",
  member3Bio: "Diseña la versión móvil de la landing page y documenta sus evidencias.",
  member4Role: "Diseñadora UX/UI",
  member4Bio: "Diseña las pantallas y la identidad visual de las aplicaciones móviles.",
  member5Role: "Configuración y Distribución",
  member5Bio: "Documenta la configuración, las pruebas y la distribución de las aplicaciones.",
  ideaTitle: "Sigue el Proyecto",
  ideaDesc: "El código y el informe de AniTec están publicados en GitHub.",
  contactUs: "Ver en GitHub",
  productSubtitle: "El Producto",
  productTitle: "Lo que hace AniTec",
  productDesc: "Una aplicación móvil para la gestión ganadera.",
  productText: "AniTec ayuda a los ganaderos a registrar sus fincas, corrales y animales, y a los veterinarios a seguir a los animales de sus clientes. Ambos comparten la información en una sola app que sigue funcionando con poca señal.",
  productFeature1: "Animales organizados por finca y corral, con foto y ficha completa",
  productFeature2: "Registros sanitarios con fechas de seguimiento",
  productFeature3: "Información compartida entre ganaderos y veterinarios",
  productFeature4: "Gráficos de tu hato y de tus registros",
  screenshotsSubtitle: "Capturas de la App",
  screenshotsTitle: "Explora la App",
  screenshotsDesc: "Pantallas de la aplicación Android.",
  ctaBadge: "App para Android",
  ctaTitle: "¿Listo para probar AniTec?",
  ctaDesc: "Descarga la app y empieza a gestionar tu ganado desde el teléfono.",
  ctaStartFree: "Descargar la App",
  ctaSeeHow: "Ver las Funciones"
};

// ---------------------------------------------------------------- Terms of Service
translations.en.terms = {
  heading: "Terms of Service",
  intro: "By creating an AniTec account you agree to the following terms. This text is a working draft prepared by the team and must be reviewed before publication.",
  s1Title: "1. Purpose",
  s1Body: "AniTec helps ranchers and veterinarians record animals, health events and farm activities. It does not replace professional veterinary judgment.",
  s2Title: "2. Your account",
  s2Body: "You are responsible for the accuracy of the information you register and for keeping your credentials private. Each account belongs to one person and one role.",
  s3Title: "3. Data and privacy",
  s3Body: "We store only the data needed to provide the service: your profile, your animals, farms, health records, activities and subscription information. Veterinarians can see only the ranchers who have been linked to them. We do not sell personal data.",
  s4Title: "4. Professional and ethical use",
  s4Body: "Users must register truthful health information and respect animal welfare. Veterinarians must follow the ethical principles of their profession and the applicable ACM/IEEE software engineering code of ethics for the use of this tool.",
  s5Title: "5. Subscriptions and payments",
  s5Body: "Paid plans are processed by Stripe. AniTec does not store card numbers. Current payments run in test mode.",
  s6Title: "6. Availability",
  s6Body: "The service is provided as is and may be unavailable during maintenance. Data saved on the device may be synchronized later when a connection is available.",
  s7Title: "7. Changes",
  s7Body: "These terms may change. We will notify users inside the app when they do.",
  back: "Back to home"
};

translations.es.terms = {
  heading: "Términos de Servicio",
  intro: "Al crear una cuenta de AniTec aceptas los siguientes términos. Este texto es un borrador de trabajo preparado por el equipo y debe revisarse antes de su publicación.",
  s1Title: "1. Finalidad",
  s1Body: "AniTec ayuda a ganaderos y veterinarios a registrar animales, eventos sanitarios y actividades de la finca. No reemplaza el criterio profesional veterinario.",
  s2Title: "2. Tu cuenta",
  s2Body: "Eres responsable de la veracidad de la información que registres y de mantener tus credenciales en privado. Cada cuenta pertenece a una persona y a un solo rol.",
  s3Title: "3. Datos y privacidad",
  s3Body: "Almacenamos solo los datos necesarios para prestar el servicio: tu perfil, tus animales, fincas, registros sanitarios, actividades e información de suscripción. Los veterinarios solo ven a los ganaderos vinculados con ellos. No vendemos datos personales.",
  s4Title: "4. Uso profesional y ético",
  s4Body: "Los usuarios deben registrar información sanitaria veraz y respetar el bienestar animal. Los veterinarios deben seguir los principios éticos de su profesión y el código de ética de ingeniería de software de ACM/IEEE aplicable al uso de esta herramienta.",
  s5Title: "5. Suscripciones y pagos",
  s5Body: "Los planes de pago los procesa Stripe. AniTec no almacena números de tarjeta. Actualmente los pagos funcionan en modo de prueba.",
  s6Title: "6. Disponibilidad",
  s6Body: "El servicio se ofrece tal como está y puede no estar disponible durante mantenimientos. Los datos guardados en el dispositivo pueden sincronizarse después, cuando haya conexión.",
  s7Title: "7. Cambios",
  s7Body: "Estos términos pueden cambiar. Avisaremos dentro de la aplicación cuando ocurra.",
  back: "Volver al inicio"
};

// ---------------------------------------------------------------- Language switching
let currentLang = localStorage.getItem('anitec-lang') || 'en';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('anitec-lang', lang);
  document.documentElement.lang = lang;
  updateContent();
  updateActiveButton();
}

function updateActiveButton() {
  const pairs = [['lang-en', 'lang-es'], ['mobile-lang-en', 'mobile-lang-es']];
  pairs.forEach(([enId, esId]) => {
    const btnEn = document.getElementById(enId);
    const btnEs = document.getElementById(esId);
    if (btnEn && btnEs) {
      btnEn.classList.toggle('active', currentLang === 'en');
      btnEs.classList.toggle('active', currentLang === 'es');
    }
  });
}

function updateContent() {
  const t = translations[currentLang];

  // Every element with data-i18n="section.key" takes its text from the translations
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const value = el.getAttribute('data-i18n').split('.').reduce((node, key) => node?.[key], t);
    if (value === undefined) return;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = value;
    } else if (el.hasAttribute('data-i18n-html')) {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });

  // Title and meta tags of the current page
  const page = document.documentElement.getAttribute('data-page');
  const meta = t.meta[page];
  if (!meta) return;
  document.title = meta.title;
  const setMeta = (selector, value) => {
    const el = document.querySelector(selector);
    if (el) el.setAttribute('content', value);
  };
  setMeta('meta[name="description"]', meta.desc);
  setMeta('meta[property="og:title"]', meta.title);
  setMeta('meta[property="og:description"]', meta.desc);
  setMeta('meta[property="twitter:title"]', meta.title);
  setMeta('meta[property="twitter:description"]', meta.desc);
}

document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.lang = currentLang;
  updateContent();
  updateActiveButton();
});
