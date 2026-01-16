import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Lightbulb, Target, MessageCircle, Rocket } from "lucide-react";

const reasons = [
  {
    icon: Cpu,
    title: "Tecnología moderna y escalable",
    description: "Usamos las herramientas más actuales para construir soluciones que crecen contigo.",
  },
  {
    icon: Lightbulb,
    title: "Soluciones prácticas, no complicadas",
    description: "Simplificamos la tecnología para que sea fácil de usar y mantener.",
  },
  {
    icon: Target,
    title: "Enfoque en resultados",
    description: "Cada proyecto se mide por el impacto real en tu negocio.",
  },
  {
    icon: MessageCircle,
    title: "Comunicación directa",
    description: "Acceso directo al equipo sin intermediarios ni burocracia.",
  },
  {
    icon: Rocket,
    title: "Implementación eficiente",
    description: "Entregamos rápido sin sacrificar calidad ni atención al detalle.",
  },
];

const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="por-que" className="py-24 bg-background" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full bg-accent text-accent-foreground">
              Por qué Qubesight
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display mb-6 text-foreground">
              La tecnología debe ser una <span className="gradient-text">ventaja competitiva</span>, no un dolor de cabeza.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nos enfocamos en entender tu negocio antes de escribir una línea de código. Esto nos permite crear soluciones que realmente resuelven problemas y generan valor.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="flex gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                  <reason.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
