import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const niches = [
  {
    to: "/restaurantes",
    emoji: "🍽️",
    title: "Restaurantes",
    description: "Reservas y pedidos automáticos sin errores.",
  },
  {
    to: "/salones",
    emoji: "💇",
    title: "Salones de belleza",
    description: "Agenda citas mientras atiendes clientes.",
  },
  {
    to: "/dental",
    emoji: "🦷",
    title: "Clínicas dentales",
    description: "Pacientes atendidos 24/7 sin saturación.",
  },
  {
    to: "/gimnasios",
    emoji: "💪",
    title: "Gimnasios",
    description: "Convierte consultas en suscripciones al instante.",
  },
  {
    to: "/inmobiliarias",
    emoji: "🏠",
    title: "Inmobiliarias",
    description: "Califica leads y agenda visitas automáticamente.",
  },
];

const DemoNiches = () => {
  return (
    <section id="demos" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-xs font-semibold uppercase tracking-wider rounded-full glass-card text-primary">
            Demos en vivo
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-display leading-tight mb-4 text-balance">
            Prueba el asistente <span className="gradient-text">de tu industria</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Interactúa con un chatbot real configurado para cada nicho.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {niches.map((n, i) => (
            <motion.div
              key={n.to}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                to={n.to}
                className="group relative block h-full glass-card rounded-2xl p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{n.emoji}</div>
                <h3 className="text-xl font-semibold font-display mb-2">{n.title}</h3>
                <p className="text-muted-foreground text-sm mb-6">{n.description}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                  Probar demo
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoNiches;
