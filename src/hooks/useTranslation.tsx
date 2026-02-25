import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'es' | 'en';

interface Translations {
  [key: string]: {
    es: string;
    en: string;
  };
}

export const translations: Translations = {
  // Header
  'nav.whatWeDo': { es: 'Qué Hacemos', en: 'What We Do' },
  'nav.services': { es: 'Servicios', en: 'Services' },
  'nav.process': { es: 'Proceso', en: 'Process' },
  'nav.whyUs': { es: 'Por Qué Nosotros', en: 'Why Us' },
  'nav.portfolio': { es: 'Portafolio', en: 'Portfolio' },
  'nav.contact': { es: 'Contacto', en: 'Contact' },
  'nav.getQuote': { es: 'Cotizar', en: 'Get Quote' },

  // Hero
  'hero.badge': { es: 'Transformación Digital', en: 'Digital Transformation' },
  'hero.title1': { es: 'Soluciones Digitales', en: 'Digital Solutions' },
  'hero.title2': { es: 'para tu Negocio', en: 'for Your Business' },
  'hero.description': { 
    es: 'Desarrollamos páginas web, apps, chatbots con IA, Call Centers automatizados y automatizaciones que impulsan tu crecimiento.', 
    en: 'We develop websites, apps, AI chatbots, automated Call Centers, and automations that drive your growth.' 
  },
  'hero.cta': { es: 'Solicitar Propuesta', en: 'Request Proposal' },
  'hero.secondary': { es: 'Ver Servicios', en: 'View Services' },

  // What We Do
  'whatWeDo.badge': { es: 'Nuestra Misión', en: 'Our Mission' },
  'whatWeDo.title': { es: 'Transformamos Ideas en Realidad Digital', en: 'We Transform Ideas into Digital Reality' },
  'whatWeDo.description': { 
    es: 'Somos expertos en crear soluciones tecnológicas que automatizan procesos, mejoran la experiencia del cliente y aumentan tus ventas.', 
    en: 'We are experts in creating technological solutions that automate processes, improve customer experience, and increase your sales.' 
  },
  'whatWeDo.feature1': { es: 'Desarrollo a medida para cada cliente', en: 'Custom development for each client' },
  'whatWeDo.feature2': { es: 'Tecnología de última generación', en: 'Cutting-edge technology' },
  'whatWeDo.feature3': { es: 'Soporte y mantenimiento continuo', en: 'Continuous support and maintenance' },
  'whatWeDo.feature4': { es: 'Enfoque en resultados medibles', en: 'Focus on measurable results' },

  // Services
  'services.badge': { es: 'Servicios', en: 'Services' },
  'services.title': { es: 'Soluciones Integrales', en: 'Comprehensive Solutions' },
  'services.description': { 
    es: 'Ofrecemos un ecosistema completo de servicios digitales para llevar tu negocio al siguiente nivel.', 
    en: 'We offer a complete ecosystem of digital services to take your business to the next level.' 
  },
  'services.websites.title': { es: 'Páginas Web', en: 'Websites' },
  'services.websites.description': { es: 'Sitios web profesionales, rápidos y optimizados para conversión.', en: 'Professional, fast websites optimized for conversion.' },
  'services.ecommerce.title': { es: 'E-commerce', en: 'E-commerce' },
  'services.ecommerce.description': { es: 'Tiendas online completas con pasarelas de pago integradas.', en: 'Complete online stores with integrated payment gateways.' },
  'services.chatbots.title': { es: 'Chatbots con IA', en: 'AI Chatbots' },
  'services.chatbots.description': { es: 'Asistentes virtuales inteligentes para atención al cliente 24/7.', en: 'Intelligent virtual assistants for 24/7 customer service.' },
  'services.callcenter.title': { es: 'Call Center con IA', en: 'AI Call Center' },
  'services.callcenter.description': { es: 'Centros de llamadas automatizados con inteligencia artificial para atención telefónica 24/7.', en: 'Automated call centers with AI for 24/7 phone support.' },
  'services.automations.title': { es: 'Automatizaciones', en: 'Automations' },
  'services.automations.description': { es: 'Flujos de trabajo automatizados que ahorran tiempo y recursos.', en: 'Automated workflows that save time and resources.' },
  'services.apps.title': { es: 'Aplicaciones Móviles', en: 'Mobile Apps' },
  'services.apps.description': { es: 'Apps nativas y multiplataforma para iOS y Android.', en: 'Native and cross-platform apps for iOS and Android.' },
  'services.integrations.title': { es: 'Integraciones', en: 'Integrations' },
  'services.integrations.description': { es: 'Conectamos tus sistemas para un flujo de datos perfecto.', en: 'We connect your systems for perfect data flow.' },

  // Process
  'process.badge': { es: 'Proceso', en: 'Process' },
  'process.title': { es: 'Cómo Trabajamos', en: 'How We Work' },
  'process.description': { es: 'Un proceso claro y eficiente para garantizar el éxito de tu proyecto.', en: 'A clear and efficient process to ensure the success of your project.' },
  'process.step1.title': { es: 'Consulta Inicial', en: 'Initial Consultation' },
  'process.step1.description': { es: 'Analizamos tus necesidades y objetivos de negocio.', en: 'We analyze your needs and business objectives.' },
  'process.step2.title': { es: 'Propuesta', en: 'Proposal' },
  'process.step2.description': { es: 'Diseñamos una solución personalizada con cronograma y presupuesto.', en: 'We design a custom solution with timeline and budget.' },
  'process.step3.title': { es: 'Desarrollo', en: 'Development' },
  'process.step3.description': { es: 'Construimos tu solución con metodologías ágiles.', en: 'We build your solution using agile methodologies.' },
  'process.step4.title': { es: 'Lanzamiento', en: 'Launch' },
  'process.step4.description': { es: 'Implementamos y te brindamos capacitación completa.', en: 'We implement and provide you with complete training.' },

  // Why Us
  'whyUs.badge': { es: 'Por Qué Nosotros', en: 'Why Us' },
  'whyUs.title': { es: 'Tu Socio Digital de Confianza', en: 'Your Trusted Digital Partner' },
  'whyUs.description': { es: 'Más que proveedores, somos aliados estratégicos comprometidos con tu éxito.', en: 'More than providers, we are strategic allies committed to your success.' },
  'whyUs.experience': { es: 'Años de Experiencia', en: 'Years of Experience' },
  'whyUs.projects': { es: 'Proyectos Completados', en: 'Completed Projects' },
  'whyUs.clients': { es: 'Clientes Satisfechos', en: 'Satisfied Clients' },
  'whyUs.support': { es: 'Soporte 24/7', en: '24/7 Support' },

  // Use Cases
  'useCases.badge': { es: 'Casos de Uso', en: 'Use Cases' },
  'useCases.title': { es: 'Soluciones para Cada Industria', en: 'Solutions for Every Industry' },
  'useCases.description': { es: 'Adaptamos nuestras soluciones a las necesidades específicas de tu sector.', en: 'We adapt our solutions to the specific needs of your sector.' },

  // Portfolio
  'portfolio.title': { es: 'Nuestro Portafolio', en: 'Our Portfolio' },
  'portfolio.description': { es: 'Proyectos reales que demuestran nuestra experiencia y compromiso.', en: 'Real projects that demonstrate our experience and commitment.' },
  'portfolio.temteaching': { es: 'TemTeaching', en: 'TemTeaching' },
  'portfolio.temteaching.desc': { es: 'Plataforma educativa profesional con experiencia de aprendizaje moderna.', en: 'Professional educational platform with a modern learning experience.' },
  'portfolio.overstop': { es: 'Overstop', en: 'Overstop' },
  'portfolio.overstop.desc': { es: 'Tienda e-commerce con diseño atractivo y funcionalidades avanzadas.', en: 'E-commerce store with attractive design and advanced features.' },
  'portfolio.timAutomation': { es: 'TIM Automation', en: 'TIM Automation' },
  'portfolio.timAutomation.desc': { es: 'Sistema de automatización inteligente para optimización de procesos empresariales.', en: 'Intelligent automation system for business process optimization.' },
  'portfolio.timVoice': { es: 'TIM AI Voice Agent', en: 'TIM AI Voice Agent' },
  'portfolio.timVoice.desc': { es: 'Agente de voz con IA para atención telefónica automatizada 24/7.', en: 'AI voice agent for automated 24/7 phone support.' },
  'portfolio.qubesight': { es: 'Qubesight Website', en: 'Qubesight Website' },
  'portfolio.qubesight.desc': { es: 'Sitio web corporativo con diseño moderno y optimizado para conversión.', en: 'Corporate website with modern design optimized for conversion.' },
  'portfolio.ajhb1': { es: 'AJHB Sistema', en: 'AJHB System' },
  'portfolio.ajhb1.desc': { es: 'Sistema empresarial personalizado para gestión y control de operaciones.', en: 'Custom business system for operations management and control.' },
  'portfolio.ajhb2': { es: 'AJHB Sistema V2', en: 'AJHB System V2' },
  'portfolio.ajhb2.desc': { es: 'Segunda versión del sistema empresarial con funcionalidades mejoradas.', en: 'Second version of the business system with enhanced features.' },

  // CTA
  'cta.badge': { es: 'Comienza hoy mismo', en: 'Start today' },
  'cta.title': { es: '¿Listo para digitalizar tu negocio?', en: 'Ready to digitize your business?' },
  'cta.description': { es: 'Conversemos sobre tu proyecto. Sin compromiso, solo soluciones.', en: 'Let\'s talk about your project. No commitment, just solutions.' },
  'cta.button': { es: 'Solicitar propuesta', en: 'Request proposal' },

  // FAQ
  'faq.badge': { es: 'Preguntas Frecuentes', en: 'FAQ' },
  'faq.title': { es: 'Resolvemos tus Dudas', en: 'We Answer Your Questions' },
  'faq.description': { es: 'Encuentra respuestas a las preguntas más comunes sobre nuestros servicios.', en: 'Find answers to the most common questions about our services.' },
  'faq.q1': { es: '¿Cuánto tiempo toma desarrollar un proyecto?', en: 'How long does it take to develop a project?' },
  'faq.a1': { es: 'El tiempo varía según la complejidad. Una página web básica puede estar lista en 2-3 semanas, mientras que proyectos más complejos como e-commerce o apps pueden tomar 2-3 meses.', en: 'The time varies depending on complexity. A basic website can be ready in 2-3 weeks, while more complex projects like e-commerce or apps can take 2-3 months.' },
  'faq.q2': { es: '¿Ofrecen mantenimiento después del lanzamiento?', en: 'Do you offer maintenance after launch?' },
  'faq.a2': { es: 'Sí, ofrecemos planes de mantenimiento mensual que incluyen actualizaciones, soporte técnico y mejoras continuas para garantizar el óptimo funcionamiento de tu solución.', en: 'Yes, we offer monthly maintenance plans that include updates, technical support, and continuous improvements to ensure optimal performance of your solution.' },
  'faq.q3': { es: '¿Cómo funciona el chatbot con IA?', en: 'How does the AI chatbot work?' },
  'faq.a3': { es: 'Nuestros chatbots utilizan inteligencia artificial avanzada para entender y responder preguntas de tus clientes de forma natural, las 24 horas del día, reduciendo la carga de tu equipo de soporte.', en: 'Our chatbots use advanced artificial intelligence to understand and respond to your customers\' questions naturally, 24 hours a day, reducing the workload of your support team.' },
  'faq.q4': { es: '¿Qué es un Call Center con IA?', en: 'What is an AI Call Center?' },
  'faq.a4': { es: 'Es un sistema de atención telefónica automatizado que utiliza inteligencia artificial para responder llamadas, resolver consultas y transferir a un agente humano cuando sea necesario, disponible 24/7.', en: 'It is an automated phone support system that uses artificial intelligence to answer calls, resolve queries, and transfer to a human agent when necessary, available 24/7.' },
  'faq.q5': { es: '¿Cuáles son las formas de pago?', en: 'What are the payment methods?' },
  'faq.a5': { es: 'Aceptamos transferencias bancarias, tarjetas de crédito/débito y pagos en cuotas. Generalmente solicitamos un 50% de anticipo y el resto al finalizar el proyecto.', en: 'We accept bank transfers, credit/debit cards, and installment payments. We generally request a 50% advance and the rest upon project completion.' },
  'faq.q6': { es: '¿Trabajan con clientes internacionales?', en: 'Do you work with international clients?' },
  'faq.a6': { es: 'Sí, trabajamos con clientes de toda Latinoamérica y el mundo. Las reuniones se realizan por videollamada y utilizamos herramientas colaborativas para mantener una comunicación fluida.', en: 'Yes, we work with clients from all over Latin America and the world. Meetings are held via video call and we use collaborative tools to maintain fluid communication.' },

  // WhatWeDo
  'whatWeDo.title2': { es: 'Qué hacemos', en: 'What We Do' },
  'whatWeDo.description2': { 
    es: 'En Qubesight ayudamos a empresas a <strong>digitalizar, automatizar y escalar</strong> sus operaciones mediante soluciones tecnológicas modernas y personalizadas. No usamos soluciones genéricas. Cada proyecto se adapta al negocio.',
    en: 'At Qubesight we help businesses <strong>digitize, automate and scale</strong> their operations through modern and customized technology solutions. We don\'t use generic solutions. Each project is tailored to the business.'
  },

  // Services section
  'services.title2': { es: 'Servicios', en: 'Services' },
  'services.description2': { es: 'Soluciones reales para negocios, no productos genéricos.', en: 'Real solutions for businesses, not generic products.' },
  'services.websites.title2': { es: 'Websites profesionales', en: 'Professional Websites' },
  'services.websites.desc2': { es: 'Sitios web corporativos, landing pages y portafolios de alto impacto.', en: 'Corporate websites, landing pages and high-impact portfolios.' },
  'services.ecommerce.title2': { es: 'Tiendas e-commerce', en: 'E-commerce Stores' },
  'services.ecommerce.desc2': { es: 'Tiendas online completas con pasarelas de pago y gestión de inventario.', en: 'Complete online stores with payment gateways and inventory management.' },
  'services.chatbots.title2': { es: 'Chatbots con IA', en: 'AI Chatbots' },
  'services.chatbots.desc2': { es: 'Asistentes virtuales inteligentes para atención al cliente 24/7.', en: 'Intelligent virtual assistants for 24/7 customer service.' },
  'services.callcenter.title2': { es: 'Call Center con IA', en: 'AI Call Center' },
  'services.callcenter.desc2': { es: 'Centros de llamadas automatizados con inteligencia artificial para atención telefónica 24/7.', en: 'Automated call centers with AI for 24/7 phone support.' },
  'services.automations.title2': { es: 'Automatizaciones inteligentes', en: 'Smart Automations' },
  'services.automations.desc2': { es: 'Flujos automatizados que optimizan procesos y reducen trabajo manual.', en: 'Automated workflows that optimize processes and reduce manual work.' },
  'services.apps.title2': { es: 'Apps empresariales', en: 'Business Apps' },
  'services.apps.desc2': { es: 'Aplicaciones móviles y web diseñadas para las necesidades de tu equipo.', en: 'Mobile and web applications designed for your team\'s needs.' },
  'services.systems.title': { es: 'Sistemas a la medida', en: 'Custom Systems' },
  'services.systems.desc': { es: 'Software empresarial personalizado según las necesidades del negocio.', en: 'Custom business software tailored to business needs.' },

  // Process section
  'process.title2': { es: 'Cómo trabajamos', en: 'How We Work' },
  'process.description2': { es: 'Un proceso simple y transparente para que te enfoques en tu negocio.', en: 'A simple and transparent process so you can focus on your business.' },
  'process.step1.title2': { es: 'Diagnóstico del negocio', en: 'Business Diagnosis' },
  'process.step1.desc2': { es: 'Analizamos tus procesos actuales, identificamos oportunidades de mejora y definimos objetivos claros.', en: 'We analyze your current processes, identify improvement opportunities, and define clear objectives.' },
  'process.step2.title2': { es: 'Propuesta clara', en: 'Clear Proposal' },
  'process.step2.desc2': { es: 'Diseñamos una solución específica con alcance, tiempos y costos definidos desde el inicio.', en: 'We design a specific solution with scope, timelines, and costs defined from the start.' },
  'process.step3.title2': { es: 'Desarrollo e implementación', en: 'Development & Implementation' },
  'process.step3.desc2': { es: 'Construimos e integramos la solución con entregas incrementales para que veas el progreso.', en: 'We build and integrate the solution with incremental deliveries so you can see progress.' },
  'process.step4.title2': { es: 'Soporte y optimización', en: 'Support & Optimization' },
  'process.step4.desc2': { es: 'Te acompañamos después del lanzamiento para asegurar que todo funcione y evolucione contigo.', en: 'We support you after launch to ensure everything works and evolves with you.' },

  // WhyUs section
  'whyUs.title2': { es: '¿Por qué Qubesight?', en: 'Why Qubesight?' },
  'whyUs.description2': { es: 'Una empresa que respalda tu proyecto con tecnología seria.', en: 'A company that backs your project with serious technology.' },
  'whyUs.reason1.title': { es: 'Marca tecnológica seria', en: 'Serious Tech Brand' },
  'whyUs.reason1.desc': { es: 'Empresa estructurada con procesos claros y profesionales.', en: 'Structured company with clear and professional processes.' },
  'whyUs.reason2.title': { es: 'Precios transparentes', en: 'Transparent Pricing' },
  'whyUs.reason2.desc': { es: 'Catálogo de servicios con precios definidos para facilitar la decisión.', en: 'Service catalog with defined prices to facilitate decision-making.' },
  'whyUs.reason3.title': { es: 'Soporte continuo', en: 'Continuous Support' },
  'whyUs.reason3.desc': { es: 'Te apoyamos con respuestas técnicas y acompañamiento durante todo el proyecto.', en: 'We support you with technical answers and guidance throughout the project.' },
  'whyUs.reason4.title': { es: 'Implementación eficiente', en: 'Efficient Implementation' },
  'whyUs.reason4.desc': { es: 'Qubesight ejecuta el proyecto. Tú te enfocas en hacer crecer tu negocio.', en: 'Qubesight executes the project. You focus on growing your business.' },

  // UseCases section
  'useCases.title2': { es: 'Casos de uso', en: 'Use Cases' },
  'useCases.description2': { es: 'Soluciones aplicables a distintos sectores.', en: 'Solutions applicable to different sectors.' },
  'useCases.case1.title': { es: 'Atención al cliente automatizada', en: 'Automated Customer Service' },
  'useCases.case1.desc': { es: 'Negocios que implementan chatbots y flujos automatizados para responder consultas 24/7.', en: 'Businesses that implement chatbots and automated workflows to answer queries 24/7.' },
  'useCases.case2.title': { es: 'Ventas online optimizadas', en: 'Optimized Online Sales' },
  'useCases.case2.desc': { es: 'Empresas que migran sus ventas al mundo digital con tiendas e-commerce robustas.', en: 'Companies that migrate their sales to the digital world with robust e-commerce stores.' },
  'useCases.case3.title': { es: 'Procesos internos eficientes', en: 'Efficient Internal Processes' },
  'useCases.case3.desc': { es: 'Equipos que eliminan hojas de cálculo y procesos manuales con sistemas a medida.', en: 'Teams that eliminate spreadsheets and manual processes with custom systems.' },

  // Footer
  'footer.description': { es: 'Soluciones digitales y automatización con IA', en: 'Digital solutions and AI automation' },
  'footer.whatsapp': { es: 'Contactar por WhatsApp', en: 'Contact via WhatsApp' },
  'footer.legal': { es: 'Aviso legal', en: 'Legal Notice' },
  'footer.privacy': { es: 'Privacidad', en: 'Privacy' },
  'footer.rights': { es: 'Todos los derechos reservados.', en: 'All rights reserved.' },

  // WhatsApp button
  'whatsapp.tooltip': { es: '¿Necesitas ayuda?', en: 'Need help?' },
  'whatsapp.message': { es: 'Hola, me interesa conocer más sobre sus servicios.', en: 'Hello, I\'m interested in learning more about your services.' },

  // Portfolio dialog
  'portfolio.openTab': { es: 'Abrir en nueva pestaña', en: 'Open in new tab' },
};

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es');

  useEffect(() => {
    const detectLanguage = async () => {
      try {
        // Try to detect language from IP using free API
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        // Spanish-speaking countries
        const spanishCountries = [
          'ES', 'MX', 'AR', 'CO', 'PE', 'VE', 'CL', 'EC', 'GT', 'CU', 
          'BO', 'DO', 'HN', 'PY', 'SV', 'NI', 'CR', 'PA', 'UY', 'PR', 'GQ'
        ];
        
        if (spanishCountries.includes(data.country_code)) {
          setLanguage('es');
        } else {
          setLanguage('en');
        }
      } catch (error) {
        // Fallback to browser language
        const browserLang = navigator.language.split('-')[0];
        setLanguage(browserLang === 'es' ? 'es' : 'en');
      }
    };

    detectLanguage();
  }, []);

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) return key;
    return translation[language];
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
