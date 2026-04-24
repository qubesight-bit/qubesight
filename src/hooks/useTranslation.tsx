import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'es' | 'en';

interface Translations {
  [key: string]: { es: string; en: string };
}

export const translations: Translations = {
  // Header
  'nav.problem': { es: 'Problema', en: 'Problem' },
  'nav.assistant': { es: 'Asistente', en: 'Assistant' },
  'nav.propia': { es: 'PropIA', en: 'PropIA' },
  'nav.industries': { es: 'Industrias', en: 'Industries' },
  'nav.pricing': { es: 'Precios', en: 'Pricing' },
  'nav.contact': { es: 'Empezar', en: 'Get Started' },

  // Hero
  'hero.badge': { es: 'Automatización con IA · 24/7', en: 'AI Automation · 24/7' },
  'hero.title': { es: 'Nunca pierdas un cliente más.', en: 'Never lose another customer.' },
  'hero.titleAccent': { es: 'Tu negocio responde 24/7 con IA.', en: 'Your business replies 24/7 with AI.' },
  'hero.description': {
    es: 'QubeSight gestiona tus mensajes en WhatsApp y web instantáneamente, mientras PropIA automatiza tus redes sociales. Deja de perder ventas por no contestar a tiempo.',
    en: 'QubeSight handles your WhatsApp and web messages instantly, while PropIA automates your social media. Stop losing sales for not replying in time.'
  },
  'hero.cta.primary': { es: 'Empezar a Responder Automáticamente', en: 'Start Replying Automatically' },
  'hero.cta.secondary': { es: 'Ver Cómo Funciona', en: 'See How It Works' },
  'hero.proof.messages': { es: 'mensajes respondidos este mes', en: 'messages answered this month' },
  'hero.proof.time': { es: 'tiempo de respuesta', en: 'response time' },
  'hero.proof.conversion': { es: 'tasa de conversión', en: 'conversion rate' },

  // Problem
  'problem.title': { es: 'Cada mensaje no respondido es', en: 'Every unanswered message is' },
  'problem.titleAccent': { es: 'dinero que se lleva tu competencia.', en: 'money your competition takes.' },
  'problem.subtitle': {
    es: 'Mientras tú contestas a las 9am, ya perdiste al cliente que escribió a las 11pm.',
    en: 'While you reply at 9am, you already lost the customer who wrote at 11pm.'
  },
  'problem.p1.title': { es: 'Los clientes se van si no contestas rápido', en: 'Customers leave if you don\'t reply fast' },
  'problem.p1.desc': { es: 'El 78% compra al primero que responde. Si tardas más de 5 minutos, ya perdiste.', en: '78% buy from whoever replies first. If you take more than 5 minutes, you already lost.' },
  'problem.p2.title': { es: 'Consultas a deshoras', en: 'Off-hours inquiries' },
  'problem.p2.desc': { es: 'Noches, fines de semana y festivos. Tus clientes preguntan cuando tú no estás.', en: 'Nights, weekends and holidays. Customers ask when you\'re not there.' },
  'problem.p3.title': { es: 'Saturación operativa', en: 'Operational overload' },
  'problem.p3.desc': { es: 'No puedes atender, vender, publicar y operar al mismo tiempo. Algo siempre falla.', en: 'You can\'t serve, sell, post and operate at the same time. Something always breaks.' },

  // Assistant
  'assistant.badge': { es: 'Producto 1 · QubeSight Assistant', en: 'Product 1 · QubeSight Assistant' },
  'assistant.title': { es: 'Tu asistente inteligente que', en: 'Your smart assistant that' },
  'assistant.titleAccent': { es: 'nunca duerme.', en: 'never sleeps.' },
  'assistant.description': {
    es: 'Una IA entrenada con tu negocio que responde clientes en WhatsApp y web chat al instante, captura leads y agenda citas mientras tú haces lo importante.',
    en: 'An AI trained on your business that replies to customers on WhatsApp and web chat instantly, captures leads and books appointments while you focus on what matters.'
  },
  'assistant.b1': { es: 'Respuestas inmediatas en WhatsApp y Web Chat', en: 'Instant replies on WhatsApp and Web Chat' },
  'assistant.b2': { es: 'Manejo de FAQ: precios, horarios, citas y stock', en: 'Handles FAQs: pricing, hours, appointments and stock' },
  'assistant.b3': { es: 'Captura de leads 24/7 sin intervención humana', en: '24/7 lead capture with zero human intervention' },
  'assistant.b4': { es: 'Configuración 100% gestionada por nuestro equipo', en: 'Setup 100% managed by our team' },
  'assistant.b5': { es: 'Escalación inteligente a humano cuando hace falta', en: 'Smart hand-off to a human when needed' },
  'assistant.cta': { es: 'Quiero mi Asistente', en: 'I want my Assistant' },

  // PropIA
  'propia.badge': { es: 'Producto 2 · PropIA', en: 'Product 2 · PropIA' },
  'propia.title': { es: 'PropIA: Publicación Automática', en: 'PropIA: Automatic Publishing' },
  'propia.titleAccent': { es: 'Multiplataforma.', en: 'Across All Platforms.' },
  'propia.description': {
    es: 'Sube tus fotos una vez. Nuestra IA hace el resto: textos SEO, videos automáticos y publicación simultánea en Instagram, Facebook y TikTok.',
    en: 'Upload your photos once. Our AI does the rest: SEO copy, automatic videos and simultaneous posting on Instagram, Facebook and TikTok.'
  },
  'propia.step1.title': { es: 'Subes tus fotos', en: 'Upload your photos' },
  'propia.step1.desc': { es: 'Una sola vez, desde tu celular o computadora.', en: 'Just once, from your phone or computer.' },
  'propia.step2.title': { es: 'IA genera textos SEO', en: 'AI generates SEO copy' },
  'propia.step2.desc': { es: 'Optimizados para alcance y conversión.', en: 'Optimized for reach and conversion.' },
  'propia.step3.title': { es: 'IA crea videos automáticos', en: 'AI creates videos automatically' },
  'propia.step3.desc': { es: 'Reels, stories y videos cortos listos para publicar.', en: 'Reels, stories and short videos ready to publish.' },
  'propia.step4.title': { es: 'Publica en todas tus redes', en: 'Posts to all your channels' },
  'propia.step4.desc': { es: 'IG (Feed/Stories/Reels), Facebook y TikTok a la vez.', en: 'IG (Feed/Stories/Reels), Facebook and TikTok at once.' },
  'propia.feature1': { es: 'SEO Enhancer para visibilidad máxima', en: 'SEO Enhancer for maximum visibility' },
  'propia.feature2': { es: 'Notificaciones por WhatsApp en cada publicación', en: 'WhatsApp notifications on every post' },
  'propia.cta': { es: 'Activar PropIA', en: 'Activate PropIA' },

  // Industries
  'industries.title': { es: 'Soluciones por industria', en: 'Solutions by industry' },
  'industries.description': { es: 'Configuramos QubeSight para tu sector específico.', en: 'We tune QubeSight to your specific sector.' },
  'industries.realestate.tab': { es: 'Inmobiliarias', en: 'Real Estate' },
  'industries.realestate.title': { es: 'Califica leads y agenda visitas mientras muestras propiedades.', en: 'Qualify leads and book visits while you show properties.' },
  'industries.realestate.b1': { es: 'Responde por cada propiedad publicada', en: 'Answers for every listed property' },
  'industries.realestate.b2': { es: 'Pre-califica al comprador automáticamente', en: 'Auto-qualifies the buyer' },
  'industries.realestate.b3': { es: 'Agenda visitas en tu calendario', en: 'Books visits to your calendar' },
  'industries.restaurants.tab': { es: 'Restaurantes', en: 'Restaurants' },
  'industries.restaurants.title': { es: 'Reservas y pedidos automáticos sin errores.', en: 'Automatic bookings and orders, error-free.' },
  'industries.restaurants.b1': { es: 'Confirma reservas al instante', en: 'Confirms reservations instantly' },
  'industries.restaurants.b2': { es: 'Toma pedidos por WhatsApp', en: 'Takes orders via WhatsApp' },
  'industries.restaurants.b3': { es: 'Envía menú y promos del día', en: 'Sends menu and daily specials' },
  'industries.clinics.tab': { es: 'Clínicas', en: 'Clinics' },
  'industries.clinics.title': { es: 'Gestión de citas y consultas frecuentes 24/7.', en: 'Appointment management and FAQs 24/7.' },
  'industries.clinics.b1': { es: 'Agenda, reagenda y cancela citas', en: 'Books, reschedules and cancels appointments' },
  'industries.clinics.b2': { es: 'Recordatorios automáticos a pacientes', en: 'Automatic reminders to patients' },
  'industries.clinics.b3': { es: 'Responde sobre tratamientos y precios', en: 'Answers about treatments and pricing' },
  'industries.gyms.tab': { es: 'Gimnasios y Salones', en: 'Gyms & Salons' },
  'industries.gyms.title': { es: 'Convierte consultas en suscripciones al instante.', en: 'Turn inquiries into subscriptions instantly.' },
  'industries.gyms.b1': { es: 'Información de planes y horarios', en: 'Plan and schedule info' },
  'industries.gyms.b2': { es: 'Cierra inscripciones por chat', en: 'Closes sign-ups via chat' },
  'industries.gyms.b3': { es: 'Reserva clases y servicios', en: 'Books classes and services' },

  // Testimonials
  'testimonials.title': { es: 'Negocios que ya', en: 'Businesses already' },
  'testimonials.titleAccent': { es: 'venden más mientras duermen.', en: 'selling more while they sleep.' },
  'testimonials.t1.name': { es: 'María González', en: 'María González' },
  'testimonials.t1.role': { es: 'Restaurante', en: 'Restaurant Owner' },
  'testimonials.t1.quote': {
    es: 'Antes perdía reservas cada noche. Ahora mi teléfono contesta solo y despierto con nuevas mesas confirmadas.',
    en: 'I used to lose reservations every night. Now my phone answers on its own and I wake up to new tables confirmed.'
  },
  'testimonials.t2.name': { es: 'James Carter', en: 'James Carter' },
  'testimonials.t2.role': { es: 'Inmobiliaria', en: 'Real Estate Agent' },
  'testimonials.t2.quote': {
    es: 'Mis ventas subieron un 40% el primer mes. Ningún lead se queda sin respuesta.',
    en: 'My sales went up 40% the first month. No lead goes unanswered.'
  },
  'testimonials.t3.name': { es: 'Ana López', en: 'Ana López' },
  'testimonials.t3.role': { es: 'Clínica Dental', en: 'Dental Clinic' },
  'testimonials.t3.quote': {
    es: 'A los pacientes les encanta la rapidez. Dejamos de perder pacientes ante clínicas más rápidas.',
    en: 'Patients love the speed. We stopped losing patients to faster clinics.'
  },

  // Pricing
  'pricing.badge': { es: 'Precios transparentes', en: 'Transparent pricing' },
  'pricing.title': { es: 'Planes simples,', en: 'Simple plans,' },
  'pricing.titleAccent': { es: 'resultados inmediatos.', en: 'immediate results.' },
  'pricing.monthly': { es: 'Mensual', en: 'Monthly' },
  'pricing.yearly': { es: 'Anual', en: 'Yearly' },
  'pricing.save': { es: 'Ahorra 20%', en: 'Save 20%' },
  'pricing.popular': { es: 'Más Popular', en: 'Most Popular' },
  'pricing.month': { es: '/mes', en: '/mo' },
  'pricing.oneTime': { es: 'pago único', en: 'one-time' },
  'pricing.cta': { es: 'Empezar ahora', en: 'Start now' },
  'pricing.basic.name': { es: 'QubeSight Basic', en: 'QubeSight Basic' },
  'pricing.basic.desc': { es: 'Para empezar a responder automáticamente.', en: 'To start replying automatically.' },
  'pricing.basic.f1': { es: 'Respuestas automáticas 24/7', en: '24/7 automatic replies' },
  'pricing.basic.f2': { es: 'Integración con WhatsApp', en: 'WhatsApp integration' },
  'pricing.basic.f3': { es: 'FAQ y captura de leads', en: 'FAQ and lead capture' },
  'pricing.basic.f4': { es: 'Soporte por email', en: 'Email support' },
  'pricing.growth.name': { es: 'QubeSight Growth', en: 'QubeSight Growth' },
  'pricing.growth.desc': { es: 'Para escalar atención multi-canal.', en: 'To scale multi-channel support.' },
  'pricing.growth.f1': { es: 'Todo lo de Basic', en: 'Everything in Basic' },
  'pricing.growth.f2': { es: 'Respuestas inteligentes con IA avanzada', en: 'Smart replies with advanced AI' },
  'pricing.growth.f3': { es: 'Multi-canal: WhatsApp + Web + IG', en: 'Multi-channel: WhatsApp + Web + IG' },
  'pricing.growth.f4': { es: 'Reportes detallados y analytics', en: 'Detailed reports and analytics' },
  'pricing.growth.f5': { es: 'Soporte prioritario por WhatsApp', en: 'Priority support via WhatsApp' },
  'pricing.propia.name': { es: 'PropIA Completo', en: 'PropIA Complete' },
  'pricing.propia.desc': { es: 'Marketing automatizado en todas tus redes.', en: 'Automated marketing across all your channels.' },
  'pricing.propia.setup': { es: 'Setup', en: 'Setup' },
  'pricing.propia.f1': { es: 'Publicación en IG, FB y TikTok', en: 'Posts on IG, FB and TikTok' },
  'pricing.propia.f2': { es: 'Generación de textos SEO con IA', en: 'AI-generated SEO copy' },
  'pricing.propia.f3': { es: 'Videos automáticos (Reels/Stories)', en: 'Automatic videos (Reels/Stories)' },
  'pricing.propia.f4': { es: 'SEO Enhancer incluido', en: 'SEO Enhancer included' },
  'pricing.propia.f5': { es: 'Notificaciones por WhatsApp', en: 'WhatsApp notifications' },

  // Final CTA
  'final.title': { es: 'Configuración en minutos.', en: 'Setup in minutes.' },
  'final.titleAccent': { es: 'Tu negocio empieza a responder hoy mismo.', en: 'Your business starts replying today.' },
  'final.description': { es: 'Sin contratos eternos. Sin tarjetas de crédito ocultas. Solo más clientes atendidos.', en: 'No long contracts. No hidden cards. Just more customers served.' },
  'final.cta': { es: 'Hablar con un experto', en: 'Talk to an expert' },

  // Footer
  'footer.tagline': { es: 'Automatización con IA para pequeños negocios que quieren crecer en grande.', en: 'AI automation for small businesses that want to grow big.' },
  'footer.product': { es: 'Producto', en: 'Product' },
  'footer.company': { es: 'Compañía', en: 'Company' },
  'footer.legal': { es: 'Legal', en: 'Legal' },
  'footer.terms': { es: 'Términos', en: 'Terms' },
  'footer.privacy': { es: 'Privacidad', en: 'Privacy' },
  'footer.rights': { es: 'Todos los derechos reservados.', en: 'All rights reserved.' },
};

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('es');

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language | null;
    if (saved === 'es' || saved === 'en') setLanguageState(saved);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[language];
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const ctx = useContext(TranslationContext);
  if (!ctx) throw new Error('useTranslation must be used within TranslationProvider');
  return ctx;
};
