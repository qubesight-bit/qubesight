import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, ShoppingBag, BarChart3 } from "lucide-react";

const useCases = [
  {
    icon: MessageSquare,
    title: "Atención al cliente automatizada",
    description: "Negocios que implementan chatbots y flujos automatizados para responder consultas 24/7, reduciendo tiempos de respuesta y liberando al equipo humano para tareas estratégicas.",
    tag: "Chatbots & IA",
  },
  {
    icon: ShoppingBag,
    title: "Ventas online optimizadas",
    description: "Empresas que migran sus ventas al mundo digital con tiendas e-commerce robustas, integradas con inventario, logística y pasarelas de pago locales e internacionales.",
    tag: "E-commerce",
  },
  {
    icon: BarChart3,
    title: "Procesos internos eficientes",
    description: "Equipos que eliminan hojas de cálculo y procesos manuales con sistemas a medida, mejorando la productividad y reduciendo errores operativos.",
    tag: "Automatización",
  },
];

const UseCases = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="casos" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full bg-accent text-accent-foreground">
            Casos de uso
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-6 text-foreground">
            Soluciones aplicables a distintos sectores
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada industria tiene sus desafíos. Nuestra tecnología se adapta para resolverlos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <useCase.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent text-accent-foreground">
                    {useCase.tag}
                  </span>
                </div>
                <h3 className="text-xl font-semibold font-display mb-3 text-foreground">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
