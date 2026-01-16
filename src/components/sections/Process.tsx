import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Diagnóstico del negocio",
    description: "Analizamos tus procesos actuales, identificamos oportunidades de mejora y definimos objetivos claros.",
  },
  {
    number: "02",
    title: "Propuesta clara",
    description: "Diseñamos una solución específica con alcance, tiempos y costos definidos desde el inicio.",
  },
  {
    number: "03",
    title: "Desarrollo e implementación",
    description: "Construimos e integramos la solución con entregas incrementales para que veas el progreso.",
  },
  {
    number: "04",
    title: "Soporte y optimización",
    description: "Te acompañamos después del lanzamiento para asegurar que todo funcione y evolucione contigo.",
  },
];

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="proceso" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full bg-accent text-accent-foreground">
            Proceso
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-6 text-foreground">
            Cómo trabajamos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un proceso estructurado que garantiza resultados predecibles y entregas a tiempo.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              <div className="p-6 rounded-2xl bg-card border border-border h-full">
                <span className="text-5xl font-bold font-display gradient-text opacity-80">
                  {step.number}
                </span>
                <h3 className="text-xl font-semibold font-display mt-4 mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
