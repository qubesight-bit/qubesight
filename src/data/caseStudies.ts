import imgTemteaching from "@/assets/portfolio/temteaching.png";
import imgOverstop from "@/assets/portfolio/overstop.png";
import imgTimAutomation from "@/assets/portfolio/tim-automation.png";
import imgTimVoice from "@/assets/portfolio/tim-voice.png";
import imgQubesight from "@/assets/portfolio/qubesight.png";
import imgAjhb1 from "@/assets/portfolio/ajhb1.png";

export type Language = 'es' | 'en';

interface Bilingual {
  es: string;
  en: string;
}

export interface TechStackItem {
  name: Bilingual;
  rationale: Bilingual;
}

export interface Feature {
  title: Bilingual;
  description: Bilingual;
  icon: string; // lucide icon name
}

export interface Metric {
  value: string;
  label: Bilingual;
}

export interface Testimonial {
  quote: Bilingual;
  name: string;
  title: Bilingual;
  photo?: string;
}

export interface CaseStudy {
  slug: string;
  title: Bilingual;
  category: string;
  categoryTag: Bilingual;
  image: string;
  summary: Bilingual;
  heroStat: { value: string; label: Bilingual };
  clientProblem: Bilingual;
  techStack: TechStackItem[];
  architectureDiagram: Bilingual;
  features: Feature[];
  metrics: Metric[];
  testimonial: Testimonial;
  liveUrl?: string;
  embedUrl?: string;
}

export const categories = [
  { key: 'all', label: { es: 'Todos', en: 'All' } },
  { key: 'ai', label: { es: 'IA & Automatización', en: 'AI & Automation' } },
  { key: 'web', label: { es: 'Desarrollo Web', en: 'Web Development' } },
  { key: 'ecommerce', label: { es: 'E-commerce', en: 'E-commerce' } },
  { key: 'systems', label: { es: 'Sistemas Empresariales', en: 'Business Systems' } },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "tim-voice-agent",
    title: { es: "TIM AI Voice Agent", en: "TIM AI Voice Agent" },
    category: "ai",
    categoryTag: { es: "Agente de Voz IA", en: "AI Voice Agent" },
    image: imgTimVoice,
    summary: {
      es: "Un agente de voz inteligente que brinda soporte telefónico automatizado 24/7, asegurando que ninguna llamada de cliente quede sin respuesta.",
      en: "An intelligent voice agent that provides 24/7 automated phone support, ensuring no customer call ever goes unanswered.",
    },
    heroStat: {
      value: "24/7",
      label: { es: "Disponibilidad", en: "Availability" },
    },
    clientProblem: {
      es: "TIM Automation necesitaba proporcionar soporte telefónico las 24 horas a sus clientes globales, pero no podía justificar un call center con personal humano las 24 horas. Estaban perdiendo leads y frustrando a clientes en diferentes zonas horarias.",
      en: "TIM Automation needed to provide round-the-clock phone support to their global clients but couldn't justify a 24-hour human-staffed call center. They were losing leads and frustrating customers in different time zones.",
    },
    techStack: [
      {
        name: { es: "Frontend", en: "Frontend" },
        rationale: { es: "React — Elegido por su reusabilidad de componentes y velocidad.", en: "React — Chosen for its component reusability and speed." },
      },
      {
        name: { es: "Backend", en: "Backend" },
        rationale: { es: "Node.js — Para manejar solicitudes de API en tiempo real de forma eficiente.", en: "Node.js — To handle real-time API requests efficiently." },
      },
      {
        name: { es: "IA/NLP", en: "AI/NLP" },
        rationale: { es: "Dialogflow CX — Seleccionada por su robusto reconocimiento de intenciones e integración sencilla con telefonía.", en: "Dialogflow CX — Selected for its robust intent matching and easy telephony integration." },
      },
      {
        name: { es: "Base de Datos", en: "Database" },
        rationale: { es: "PostgreSQL — Para integridad de datos y consultas complejas.", en: "PostgreSQL — For data integrity and complex querying." },
      },
      {
        name: { es: "DevOps", en: "DevOps" },
        rationale: { es: "AWS (EC2, RDS) — Para asegurar 99.9% de uptime y auto-escalado.", en: "AWS (EC2, RDS) — To ensure 99.9% uptime and auto-scaling." },
      },
    ],
    architectureDiagram: {
      es: "Usuario → Llamada Telefónica → Agente de Voz IA → Motor NLP → Lógica de Negocio → CRM / Base de Datos → Transferencia a Agente Humano (si es necesario)",
      en: "User → Phone Call → AI Voice Agent → NLP Engine → Business Logic → CRM / Database → Human Agent Handoff (if needed)",
    },
    features: [
      {
        title: { es: "Comprensión de Lenguaje Natural", en: "Natural Language Understanding" },
        description: {
          es: "La IA comprende solicitudes complejas de clientes y las dirige apropiadamente, reduciendo tiempos de espera y mejorando la satisfacción.",
          en: "The AI understands complex customer requests and routes them appropriately, reducing wait times and improving satisfaction.",
        },
        icon: "Brain",
      },
      {
        title: { es: "Transferencia Inteligente", en: "Seamless Hand-off" },
        description: {
          es: "Transfiere llamadas inteligentemente a un agente humano cuando la consulta requiere un toque personal, sin interrumpir la experiencia.",
          en: "Intelligently transfers calls to a human agent when the query requires a personal touch, without disrupting the experience.",
        },
        icon: "ArrowRightLeft",
      },
      {
        title: { es: "Integración con CRM", en: "CRM Integration" },
        description: {
          es: "Registra automáticamente los detalles de llamadas y solicitudes de clientes en el CRM de la empresa para seguimiento completo.",
          en: "Automatically logs call details and customer requests into the company's CRM for complete follow-up tracking.",
        },
        icon: "Database",
      },
    ],
    metrics: [
      {
        value: "0",
        label: { es: "Llamadas perdidas fuera de horario", en: "Missed calls during off-hours" },
      },
      {
        value: "30%",
        label: { es: "Consultas resueltas completamente por IA", en: "Inquiries resolved entirely by AI" },
      },
      {
        value: "$18,500",
        label: { es: "Ahorro anual estimado vs turno nocturno", en: "Estimated annual savings vs night shift" },
      },
    ],
    testimonial: {
      quote: {
        es: "Qubesight no solo nos construyó una herramienta; se convirtieron en un socio estratégico en nuestra transformación digital. El agente de voz IA ha sido un game-changer para nuestro servicio al cliente.",
        en: "Qubesight didn't just build us a tool; they became a strategic partner in our digital transformation. The AI voice agent has been a game-changer for our customer service.",
      },
      name: "Carlos Méndez",
      title: { es: "CEO, TIM Automation", en: "CEO, TIM Automation" },
    },
  },
  {
    slug: "tim-automation",
    title: { es: "TIM Automation", en: "TIM Automation" },
    category: "ai",
    categoryTag: { es: "Automatización IA", en: "AI Automation" },
    image: imgTimAutomation,
    summary: {
      es: "Sistema de automatización inteligente que eliminó el 65% de tareas manuales repetitivas, liberando al equipo para enfocarse en trabajo estratégico de alto valor.",
      en: "Intelligent automation system that eliminated 65% of repetitive manual tasks, freeing the team to focus on high-value strategic work.",
    },
    heroStat: {
      value: "65%",
      label: { es: "Reducción de Costos", en: "Cost Reduction" },
    },
    clientProblem: {
      es: "TIM Automation, una empresa de servicios industriales con más de 50 empleados, dependía de procesos manuales para gestionar órdenes de trabajo, facturación y seguimiento de clientes. Los errores humanos generaban retrabajos costosos y el equipo administrativo dedicaba más del 60% de su tiempo a tareas repetitivas.",
      en: "TIM Automation, an industrial services company with over 50 employees, relied on manual processes for work order management, invoicing, and client follow-up. Human errors caused costly rework and the admin team spent over 60% of their time on repetitive tasks.",
    },
    techStack: [
      { name: { es: "Frontend", en: "Frontend" }, rationale: { es: "React — Interfaces dinámicas con actualización en tiempo real de estados de órdenes.", en: "React — Dynamic interfaces with real-time work order status updates." } },
      { name: { es: "Backend", en: "Backend" }, rationale: { es: "Node.js + Express — Manejo eficiente de webhooks y eventos asíncronos de automatización.", en: "Node.js + Express — Efficient handling of webhooks and async automation events." } },
      { name: { es: "Automatización", en: "Automation" }, rationale: { es: "n8n + Scripts personalizados — Flujos de trabajo visuales combinados con lógica de negocio a medida.", en: "n8n + Custom Scripts — Visual workflows combined with custom business logic." } },
      { name: { es: "Base de Datos", en: "Database" }, rationale: { es: "PostgreSQL — Integridad transaccional para facturación y auditoría completa.", en: "PostgreSQL — Transactional integrity for billing and complete audit trails." } },
    ],
    architectureDiagram: {
      es: "Entrada de Datos → Motor de Automatización → Reglas de Negocio → Acciones Automatizadas → Dashboard de Monitoreo",
      en: "Data Input → Automation Engine → Business Rules → Automated Actions → Monitoring Dashboard",
    },
    features: [
      { title: { es: "Órdenes de Trabajo Automatizadas", en: "Automated Work Orders" }, description: { es: "Las órdenes se crean, asignan y actualizan automáticamente según reglas de negocio, eliminando cuellos de botella administrativos.", en: "Work orders are automatically created, assigned, and updated based on business rules, eliminating administrative bottlenecks." }, icon: "Zap" },
      { title: { es: "Facturación Inteligente", en: "Smart Invoicing" }, description: { es: "Genera facturas automáticamente al completar una orden, con cálculos de materiales, mano de obra y márgenes configurables.", en: "Automatically generates invoices upon order completion, with configurable material, labor, and margin calculations." }, icon: "Settings" },
      { title: { es: "Dashboard de Rendimiento", en: "Performance Dashboard" }, description: { es: "Panel en tiempo real con KPIs operativos, tiempos de respuesta y productividad por equipo para decisiones basadas en datos.", en: "Real-time dashboard with operational KPIs, response times, and team productivity for data-driven decisions." }, icon: "BarChart3" },
    ],
    metrics: [
      { value: "120h", label: { es: "Horas manuales eliminadas al mes", en: "Manual hours eliminated per month" } },
      { value: "45%", label: { es: "Reducción en errores de facturación", en: "Reduction in billing errors" } },
      { value: "3x", label: { es: "Aumento en velocidad de procesamiento de órdenes", en: "Increase in order processing speed" } },
    ],
    testimonial: {
      quote: { es: "Antes tardábamos días en procesar una orden completa. Ahora el sistema lo hace en minutos. Qubesight entendió nuestro negocio y automatizó exactamente lo que necesitábamos.", en: "We used to take days to process a complete order. Now the system does it in minutes. Qubesight understood our business and automated exactly what we needed." },
      name: "Roberto Vargas",
      title: { es: "Director de Operaciones, TIM Automation", en: "Operations Director, TIM Automation" },
    },
  },
  {
    slug: "temteaching",
    title: { es: "TemTeaching", en: "TemTeaching" },
    category: "web",
    categoryTag: { es: "Plataforma Educativa", en: "Education Platform" },
    image: imgTemteaching,
    summary: {
      es: "Plataforma educativa integral que digitalizó la gestión académica de una institución, conectando a más de 500 estudiantes y 40 educadores en un solo ecosistema.",
      en: "Comprehensive education platform that digitized academic management for an institution, connecting over 500 students and 40 educators in a single ecosystem.",
    },
    heroStat: {
      value: "500+",
      label: { es: "Usuarios Activos", en: "Active Users" },
    },
    clientProblem: {
      es: "TemTeaching, una institución educativa en crecimiento, gestionaba inscripciones, calificaciones y comunicaciones con padres mediante hojas de cálculo y correos electrónicos. Los profesores perdían horas semanales en tareas administrativas en lugar de enfocarse en la enseñanza, y los padres carecían de visibilidad sobre el progreso de sus hijos.",
      en: "TemTeaching, a growing educational institution, managed enrollments, grades, and parent communications through spreadsheets and emails. Teachers lost hours each week on administrative tasks instead of focusing on teaching, and parents lacked visibility into their children's progress.",
    },
    techStack: [
      { name: { es: "Frontend", en: "Frontend" }, rationale: { es: "React + TypeScript — Tipado seguro para formularios complejos y paneles multi-rol.", en: "React + TypeScript — Type-safe forms and complex multi-role dashboards." } },
      { name: { es: "Backend", en: "Backend" }, rationale: { es: "Supabase — Autenticación integrada, API en tiempo real y reglas de seguridad por rol.", en: "Supabase — Built-in auth, real-time API, and role-based security rules." } },
      { name: { es: "Base de Datos", en: "Database" }, rationale: { es: "PostgreSQL — Relaciones complejas entre cursos, estudiantes, calificaciones y asistencia.", en: "PostgreSQL — Complex relationships between courses, students, grades, and attendance." } },
      { name: { es: "Hosting", en: "Hosting" }, rationale: { es: "Vercel — Deploy continuo con preview por branch para QA del cliente.", en: "Vercel — Continuous deployment with branch previews for client QA." } },
    ],
    architectureDiagram: {
      es: "Estudiante/Profesor → Plataforma Web → API en Tiempo Real → Base de Datos → Sistema de Notificaciones",
      en: "Student/Teacher → Web Platform → Real-time API → Database → Notification System",
    },
    features: [
      { title: { es: "Gestión Académica Completa", en: "Complete Academic Management" }, description: { es: "Registro de calificaciones, asistencia y evaluaciones con cálculo automático de promedios y reportes descargables por periodo.", en: "Grade recording, attendance, and evaluations with automatic average calculations and downloadable period reports." }, icon: "GraduationCap" },
      { title: { es: "Biblioteca de Contenidos", en: "Content Library" }, description: { es: "Repositorio organizado por materia y nivel donde profesores comparten materiales, tareas y recursos multimedia con sus estudiantes.", en: "Repository organized by subject and level where teachers share materials, assignments, and multimedia resources with students." }, icon: "BookOpen" },
      { title: { es: "Portal de Padres", en: "Parent Portal" }, description: { es: "Acceso en tiempo real al rendimiento académico, calendario de eventos y canal de comunicación directa con profesores.", en: "Real-time access to academic performance, event calendar, and direct communication channel with teachers." }, icon: "Users" },
    ],
    metrics: [
      { value: "8h", label: { es: "Horas semanales ahorradas por profesor", en: "Weekly hours saved per teacher" } },
      { value: "92%", label: { es: "Satisfacción de padres con la plataforma", en: "Parent satisfaction with the platform" } },
      { value: "3x", label: { es: "Velocidad de generación de reportes", en: "Report generation speed increase" } },
    ],
    testimonial: {
      quote: { es: "La plataforma transformó la manera en que operamos. Los profesores ahora dedican su tiempo a enseñar, no a llenar formularios. Los padres están más involucrados que nunca.", en: "The platform transformed the way we operate. Teachers now spend their time teaching, not filling out forms. Parents are more involved than ever." },
      name: "Ana Lucía Herrera",
      title: { es: "Directora Académica, TemTeaching", en: "Academic Director, TemTeaching" },
    },
    embedUrl: "https://temteaching.lovable.app/demo-login",
  },
  {
    slug: "overstop",
    title: { es: "Overstop", en: "Overstop" },
    category: "ecommerce",
    categoryTag: { es: "E-commerce", en: "E-commerce" },
    image: imgOverstop,
    summary: {
      es: "Tienda e-commerce de moda urbana que triplicó las ventas online en 4 meses con una experiencia de compra optimizada para móvil y estrategia de conversión integrada.",
      en: "Urban fashion e-commerce store that tripled online sales in 4 months with a mobile-optimized shopping experience and integrated conversion strategy.",
    },
    heroStat: {
      value: "210%",
      label: { es: "Aumento en Ventas", en: "Sales Increase" },
    },
    clientProblem: {
      es: "Overstop, una marca de moda urbana en Costa Rica, vendía principalmente en redes sociales y WhatsApp. No tenían catálogo digital, los clientes abandonaban compras por procesos confusos, y el inventario se gestionaba manualmente en una libreta. Necesitaban profesionalizar su operación digital sin perder la cercanía con sus clientes.",
      en: "Overstop, an urban fashion brand in Costa Rica, sold primarily through social media and WhatsApp. They had no digital catalog, customers abandoned purchases due to confusing processes, and inventory was managed manually in a notebook. They needed to professionalize their digital operation without losing closeness with customers.",
    },
    techStack: [
      { name: { es: "Frontend", en: "Frontend" }, rationale: { es: "React + Tailwind CSS — Experiencia de compra rápida y visualmente atractiva, optimizada para móvil.", en: "React + Tailwind CSS — Fast, visually appealing shopping experience, optimized for mobile." } },
      { name: { es: "E-commerce", en: "E-commerce" }, rationale: { es: "Arquitectura headless — Flexibilidad total de diseño sin limitaciones de plantillas.", en: "Headless architecture — Total design flexibility without template limitations." } },
      { name: { es: "Pagos", en: "Payments" }, rationale: { es: "Stripe + SINPE Móvil — Pagos internacionales y locales para máxima cobertura en Costa Rica.", en: "Stripe + SINPE Móvil — International and local payments for maximum coverage in Costa Rica." } },
      { name: { es: "Inventario", en: "Inventory" }, rationale: { es: "Sistema a medida — Sincronización en tiempo real entre tienda física y online.", en: "Custom system — Real-time sync between physical and online store." } },
    ],
    architectureDiagram: {
      es: "Cliente → Tienda Online → Carrito → Pasarela de Pago → Sistema de Inventario → Notificaciones WhatsApp",
      en: "Customer → Online Store → Cart → Payment Gateway → Inventory System → WhatsApp Notifications",
    },
    features: [
      { title: { es: "Catálogo Visual Inteligente", en: "Smart Visual Catalog" }, description: { es: "Galería de productos con filtros por categoría, talla y color, con zoom de alta resolución y vista rápida sin salir del catálogo.", en: "Product gallery with filters by category, size, and color, with high-res zoom and quick view without leaving the catalog." }, icon: "ShoppingCart" },
      { title: { es: "Checkout en 2 Pasos", en: "2-Step Checkout" }, description: { es: "Proceso de compra simplificado que redujo el abandono de carrito un 40%, con soporte para múltiples métodos de pago locales.", en: "Simplified purchase process that reduced cart abandonment by 40%, with support for multiple local payment methods." }, icon: "CreditCard" },
      { title: { es: "Gestión de Inventario en Tiempo Real", en: "Real-Time Inventory Management" }, description: { es: "Panel administrativo que muestra stock actualizado, alertas de bajo inventario y reportes de productos más vendidos.", en: "Admin panel showing updated stock, low inventory alerts, and best-selling product reports." }, icon: "Package" },
    ],
    metrics: [
      { value: "210%", label: { es: "Incremento en ventas online en 4 meses", en: "Online sales increase in 4 months" } },
      { value: "40%", label: { es: "Reducción en abandono de carrito", en: "Reduction in cart abandonment" } },
      { value: "2.1s", label: { es: "Tiempo de carga promedio en móvil", en: "Average mobile load time" } },
    ],
    testimonial: {
      quote: { es: "Pasamos de vender por WhatsApp a tener una tienda online profesional que nuestros clientes aman. Las ventas se triplicaron y ahora gestionamos todo desde un solo lugar.", en: "We went from selling via WhatsApp to having a professional online store our customers love. Sales tripled and now we manage everything from one place." },
      name: "Daniela Rojas",
      title: { es: "Fundadora, Overstop", en: "Founder, Overstop" },
    },
    liveUrl: "https://overstop.lat",
    embedUrl: "https://overstop.lat",
  },
  {
    slug: "qubesight-website",
    title: { es: "Qubesight Website", en: "Qubesight Website" },
    category: "web",
    categoryTag: { es: "Sitio Corporativo", en: "Corporate Website" },
    image: imgQubesight,
    summary: {
      es: "Sitio web corporativo con diseño moderno y optimizado para conversión que refleja una marca tecnológica seria.",
      en: "Corporate website with modern design optimized for conversion that reflects a serious tech brand.",
    },
    heroStat: {
      value: "[X]s",
      label: { es: "Tiempo de Carga", en: "Load Time" },
    },
    clientProblem: {
      es: "Qubesight necesitaba un sitio web que comunicara credibilidad, profesionalismo y capacidad técnica a clientes empresariales potenciales, diferenciándose de agencias genéricas.",
      en: "Qubesight needed a website that communicated credibility, professionalism, and technical capability to potential enterprise clients, differentiating itself from generic agencies.",
    },
    techStack: [
      { name: { es: "Frontend", en: "Frontend" }, rationale: { es: "React + Vite — Velocidad de carga excepcional y DX moderno.", en: "React + Vite — Exceptional load speed and modern DX." } },
      { name: { es: "Estilo", en: "Styling" }, rationale: { es: "Tailwind CSS — Diseño consistente y mantenible.", en: "Tailwind CSS — Consistent and maintainable design." } },
      { name: { es: "Animaciones", en: "Animations" }, rationale: { es: "Framer Motion — Interacciones fluidas y profesionales.", en: "Framer Motion — Smooth, professional interactions." } },
    ],
    architectureDiagram: {
      es: "Visitante → CDN → SPA React → Componentes Interactivos → WhatsApp CTA",
      en: "Visitor → CDN → React SPA → Interactive Components → WhatsApp CTA",
    },
    features: [
      { title: { es: "[Característica 1]", en: "[Feature 1]" }, description: { es: "[Descripción]", en: "[Description]" }, icon: "Globe" },
      { title: { es: "[Característica 2]", en: "[Feature 2]" }, description: { es: "[Descripción]", en: "[Description]" }, icon: "Zap" },
      { title: { es: "[Característica 3]", en: "[Feature 3]" }, description: { es: "[Descripción]", en: "[Description]" }, icon: "Languages" },
    ],
    metrics: [
      { value: "[X]", label: { es: "[Métrica 1]", en: "[Metric 1]" } },
      { value: "[Y]%", label: { es: "[Métrica 2]", en: "[Metric 2]" } },
      { value: "[Z]", label: { es: "[Métrica 3]", en: "[Metric 3]" } },
    ],
    testimonial: {
      quote: { es: "[Testimonio del cliente]", en: "[Client testimonial]" },
      name: "[Client Name]",
      title: { es: "[Cargo]", en: "[Title]" },
    },
    liveUrl: "https://qubesight.lat",
  },
  {
    slug: "ajhb-sistema",
    title: { es: "AJHB Sistema", en: "AJHB System" },
    category: "systems",
    categoryTag: { es: "Sistema Empresarial", en: "Business System" },
    image: imgAjhb1,
    summary: {
      es: "Sistema empresarial personalizado para gestión y control de operaciones que reemplaza procesos manuales con tecnología robusta.",
      en: "Custom business system for operations management and control that replaces manual processes with robust technology.",
    },
    heroStat: {
      value: "[X]%",
      label: { es: "Eficiencia Operativa", en: "Operational Efficiency" },
    },
    clientProblem: {
      es: "[Nombre del Cliente] gestionaba sus operaciones con hojas de cálculo y procesos manuales, generando errores, duplicación de datos y dificultad para escalar. Necesitaban un sistema centralizado y a medida.",
      en: "[Client Name] managed their operations with spreadsheets and manual processes, generating errors, data duplication, and difficulty scaling. They needed a centralized, custom-built system.",
    },
    techStack: [
      { name: { es: "Frontend", en: "Frontend" }, rationale: { es: "React — [Razón]", en: "React — [Rationale]" } },
      { name: { es: "Backend", en: "Backend" }, rationale: { es: "[Tecnología] — [Razón]", en: "[Technology] — [Rationale]" } },
      { name: { es: "Base de Datos", en: "Database" }, rationale: { es: "PostgreSQL — [Razón]", en: "PostgreSQL — [Rationale]" } },
    ],
    architectureDiagram: {
      es: "Usuarios → Dashboard → API Backend → Base de Datos → Reportes Automatizados",
      en: "Users → Dashboard → Backend API → Database → Automated Reports",
    },
    features: [
      { title: { es: "[Característica 1]", en: "[Feature 1]" }, description: { es: "[Descripción]", en: "[Description]" }, icon: "LayoutDashboard" },
      { title: { es: "[Característica 2]", en: "[Feature 2]" }, description: { es: "[Descripción]", en: "[Description]" }, icon: "FileBarChart" },
      { title: { es: "[Característica 3]", en: "[Feature 3]" }, description: { es: "[Descripción]", en: "[Description]" }, icon: "Shield" },
    ],
    metrics: [
      { value: "[X]", label: { es: "[Métrica 1]", en: "[Metric 1]" } },
      { value: "[Y]%", label: { es: "[Métrica 2]", en: "[Metric 2]" } },
      { value: "[Z]", label: { es: "[Métrica 3]", en: "[Metric 3]" } },
    ],
    testimonial: {
      quote: { es: "[Testimonio del cliente]", en: "[Client testimonial]" },
      name: "[Client Name]",
      title: { es: "[Cargo]", en: "[Title]" },
    },
    embedUrl: "https://ajhbsistemademo.lovable.app",
  },
];

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
  return caseStudies.find((cs) => cs.slug === slug);
};
