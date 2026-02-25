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
        rationale: { es: "[Plataforma de IA] — Seleccionada por su robusto reconocimiento de intenciones e integración sencilla.", en: "[AI Platform] — Selected for its robust intent matching and easy integration." },
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
        value: "$XX,XXX",
        label: { es: "Ahorro anual estimado vs turno nocturno", en: "Estimated annual savings vs night shift" },
      },
    ],
    testimonial: {
      quote: {
        es: "Qubesight no solo nos construyó una herramienta; se convirtieron en un socio estratégico en nuestra transformación digital. El agente de voz IA ha sido un game-changer para nuestro servicio al cliente.",
        en: "Qubesight didn't just build us a tool; they became a strategic partner in our digital transformation. The AI voice agent has been a game-changer for our customer service.",
      },
      name: "[Client Name]",
      title: { es: "CEO", en: "CEO" },
    },
  },
  {
    slug: "tim-automation",
    title: { es: "TIM Automation", en: "TIM Automation" },
    category: "ai",
    categoryTag: { es: "Automatización IA", en: "AI Automation" },
    image: imgTimAutomation,
    summary: {
      es: "Sistema de automatización inteligente para optimización de procesos empresariales, reduciendo trabajo manual y aumentando eficiencia operativa.",
      en: "Intelligent automation system for business process optimization, reducing manual work and increasing operational efficiency.",
    },
    heroStat: {
      value: "[X]%",
      label: { es: "Reducción de Costos", en: "Cost Reduction" },
    },
    clientProblem: {
      es: "[Nombre del Cliente], una empresa en crecimiento, enfrentaba procesos manuales repetitivos que consumían recursos valiosos y generaban errores. Necesitaban una solución que automatizara sus flujos de trabajo sin interrumpir sus operaciones existentes.",
      en: "[Client Name], a growing company, faced repetitive manual processes that consumed valuable resources and generated errors. They needed a solution that would automate their workflows without disrupting existing operations.",
    },
    techStack: [
      { name: { es: "Frontend", en: "Frontend" }, rationale: { es: "React — [Razón de elección]", en: "React — [Rationale]" } },
      { name: { es: "Backend", en: "Backend" }, rationale: { es: "Node.js — [Razón de elección]", en: "Node.js — [Rationale]" } },
      { name: { es: "Automatización", en: "Automation" }, rationale: { es: "[Plataforma] — [Razón de elección]", en: "[Platform] — [Rationale]" } },
      { name: { es: "Base de Datos", en: "Database" }, rationale: { es: "PostgreSQL — [Razón de elección]", en: "PostgreSQL — [Rationale]" } },
    ],
    architectureDiagram: {
      es: "Entrada de Datos → Motor de Automatización → Reglas de Negocio → Acciones Automatizadas → Dashboard de Monitoreo",
      en: "Data Input → Automation Engine → Business Rules → Automated Actions → Monitoring Dashboard",
    },
    features: [
      { title: { es: "[Característica 1]", en: "[Feature 1]" }, description: { es: "[Descripción del beneficio]", en: "[Benefit description]" }, icon: "Zap" },
      { title: { es: "[Característica 2]", en: "[Feature 2]" }, description: { es: "[Descripción del beneficio]", en: "[Benefit description]" }, icon: "Settings" },
      { title: { es: "[Característica 3]", en: "[Feature 3]" }, description: { es: "[Descripción del beneficio]", en: "[Benefit description]" }, icon: "BarChart3" },
    ],
    metrics: [
      { value: "[X]", label: { es: "[Métrica de resultado 1]", en: "[Outcome metric 1]" } },
      { value: "[Y]%", label: { es: "[Métrica de resultado 2]", en: "[Outcome metric 2]" } },
      { value: "[Z]", label: { es: "[Métrica de resultado 3]", en: "[Outcome metric 3]" } },
    ],
    testimonial: {
      quote: { es: "[Testimonio del cliente sobre el proyecto y resultados obtenidos.]", en: "[Client testimonial about the project and results achieved.]" },
      name: "[Client Name]",
      title: { es: "[Cargo]", en: "[Title]" },
    },
  },
  {
    slug: "temteaching",
    title: { es: "TemTeaching", en: "TemTeaching" },
    category: "web",
    categoryTag: { es: "Plataforma Educativa", en: "Education Platform" },
    image: imgTemteaching,
    summary: {
      es: "Plataforma educativa profesional con experiencia de aprendizaje moderna que conecta estudiantes y educadores de forma eficiente.",
      en: "Professional educational platform with a modern learning experience that efficiently connects students and educators.",
    },
    heroStat: {
      value: "[X]+",
      label: { es: "Usuarios Activos", en: "Active Users" },
    },
    clientProblem: {
      es: "[Nombre del Cliente] necesitaba una plataforma educativa moderna que facilitara la gestión de cursos, estudiantes y contenido, reemplazando sistemas obsoletos que limitaban el crecimiento.",
      en: "[Client Name] needed a modern educational platform to facilitate course, student, and content management, replacing outdated systems that limited growth.",
    },
    techStack: [
      { name: { es: "Frontend", en: "Frontend" }, rationale: { es: "React — [Razón de elección]", en: "React — [Rationale]" } },
      { name: { es: "Backend", en: "Backend" }, rationale: { es: "[Tecnología] — [Razón de elección]", en: "[Technology] — [Rationale]" } },
      { name: { es: "Base de Datos", en: "Database" }, rationale: { es: "PostgreSQL — [Razón de elección]", en: "PostgreSQL — [Rationale]" } },
    ],
    architectureDiagram: {
      es: "Estudiante/Profesor → Plataforma Web → API → Base de Datos → Sistema de Notificaciones",
      en: "Student/Teacher → Web Platform → API → Database → Notification System",
    },
    features: [
      { title: { es: "[Característica 1]", en: "[Feature 1]" }, description: { es: "[Descripción]", en: "[Description]" }, icon: "GraduationCap" },
      { title: { es: "[Característica 2]", en: "[Feature 2]" }, description: { es: "[Descripción]", en: "[Description]" }, icon: "BookOpen" },
      { title: { es: "[Característica 3]", en: "[Feature 3]" }, description: { es: "[Descripción]", en: "[Description]" }, icon: "Users" },
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
    embedUrl: "https://temteaching.lovable.app/demo-login",
  },
  {
    slug: "overstop",
    title: { es: "Overstop", en: "Overstop" },
    category: "ecommerce",
    categoryTag: { es: "E-commerce", en: "E-commerce" },
    image: imgOverstop,
    summary: {
      es: "Tienda e-commerce con diseño atractivo y funcionalidades avanzadas para maximizar ventas online.",
      en: "E-commerce store with attractive design and advanced features to maximize online sales.",
    },
    heroStat: {
      value: "[X]%",
      label: { es: "Aumento en Ventas", en: "Sales Increase" },
    },
    clientProblem: {
      es: "[Nombre del Cliente] necesitaba migrar su negocio físico al mundo digital con una tienda online completa, moderna y optimizada para conversiones.",
      en: "[Client Name] needed to migrate their physical business to the digital world with a complete, modern, conversion-optimized online store.",
    },
    techStack: [
      { name: { es: "Frontend", en: "Frontend" }, rationale: { es: "[Tecnología] — [Razón]", en: "[Technology] — [Rationale]" } },
      { name: { es: "E-commerce", en: "E-commerce" }, rationale: { es: "[Plataforma] — [Razón]", en: "[Platform] — [Rationale]" } },
      { name: { es: "Pagos", en: "Payments" }, rationale: { es: "[Pasarela] — [Razón]", en: "[Gateway] — [Rationale]" } },
    ],
    architectureDiagram: {
      es: "Cliente → Tienda Online → Carrito → Pasarela de Pago → Sistema de Inventario → Notificaciones",
      en: "Customer → Online Store → Cart → Payment Gateway → Inventory System → Notifications",
    },
    features: [
      { title: { es: "[Característica 1]", en: "[Feature 1]" }, description: { es: "[Descripción]", en: "[Description]" }, icon: "ShoppingCart" },
      { title: { es: "[Característica 2]", en: "[Feature 2]" }, description: { es: "[Descripción]", en: "[Description]" }, icon: "CreditCard" },
      { title: { es: "[Característica 3]", en: "[Feature 3]" }, description: { es: "[Descripción]", en: "[Description]" }, icon: "Package" },
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
