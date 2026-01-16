import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, ShoppingCart, Bot, Workflow, Smartphone, Settings, Headphones } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Websites profesionales",
    description: "Sitios web corporativos, landing pages y portafolios de alto impacto.",
  },
  {
    icon: ShoppingCart,
    title: "Tiendas e-commerce",
    description: "Tiendas online completas con pasarelas de pago y gestión de inventario.",
  },
  {
    icon: Bot,
    title: "Chatbots con IA",
    description: "Asistentes virtuales inteligentes para atención al cliente 24/7.",
  },
  {
    icon: Headphones,
    title: "Call Center con IA",
    description: "Centros de llamadas automatizados con inteligencia artificial para atención telefónica 24/7.",
  },
  {
    icon: Workflow,
    title: "Automatizaciones inteligentes",
    description: "Flujos automatizados que optimizan procesos y reducen trabajo manual.",
  },
  {
    icon: Smartphone,
    title: "Apps empresariales",
    description: "Aplicaciones móviles y web diseñadas para las necesidades de tu equipo.",
  },
  {
    icon: Settings,
    title: "Sistemas a la medida",
    description: "Software empresarial personalizado según las necesidades del negocio.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicios" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-6 text-foreground">
            Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluciones reales para negocios, no productos genéricos.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl glass-card hover:border-primary/30 hover:bg-card/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold font-display mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
