import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, ShoppingCart, Bot, Workflow, Smartphone, Settings } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Websites profesionales",
    description: "Sitios web modernos, rápidos y optimizados para convertir visitantes en clientes.",
  },
  {
    icon: ShoppingCart,
    title: "Tiendas e-commerce",
    description: "Plataformas de venta online completas con pasarelas de pago y gestión de inventario.",
  },
  {
    icon: Bot,
    title: "Chatbots con IA",
    description: "Asistentes virtuales inteligentes que atienden a tus clientes 24/7.",
  },
  {
    icon: Workflow,
    title: "Automatizaciones inteligentes",
    description: "Flujos automatizados que eliminan tareas repetitivas y reducen errores.",
  },
  {
    icon: Smartphone,
    title: "Apps empresariales",
    description: "Aplicaciones móviles y web diseñadas para las necesidades de tu equipo.",
  },
  {
    icon: Settings,
    title: "Sistemas a la medida",
    description: "Software personalizado que se adapta exactamente a tus procesos de negocio.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicios" className="py-24 bg-background" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full bg-accent text-accent-foreground">
            Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-6 text-foreground">
            Soluciones para cada necesidad
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No usamos soluciones genéricas. Cada proyecto se adapta al negocio.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
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
