import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Bell, ClipboardList, BarChart3, Bot, ArrowRight, Settings } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const QubeOps = () => {
  const { language } = useTranslation();
  const whatsappUrl = `https://wa.me/50646009140?text=${encodeURIComponent(
    language === "es"
      ? "Hola, quiero información sobre QubeSight Ops"
      : "Hi, I want information about QubeSight Ops"
  )}`;

  const isES = language === "es";

  const features = [
    {
      icon: Bell,
      title: isES ? "Alertas de cobro automáticas" : "Automated payment alerts",
      desc: isES
        ? "WhatsApp a tus clientes 2 días antes del vencimiento."
        : "WhatsApp your clients 2 days before due date.",
      emoji: "📲",
    },
    {
      icon: ClipboardList,
      title: isES ? "Tareas diarias por empleado" : "Daily tasks per employee",
      desc: isES
        ? "Cada colaborador recibe sus instrucciones del día por WhatsApp."
        : "Each team member gets their daily instructions via WhatsApp.",
      emoji: "📋",
    },
    {
      icon: BarChart3,
      title: isES ? "Cierre contable mensual" : "Monthly accounting close",
      desc: isES
        ? "Reportás ingresos y gastos por WhatsApp y el sistema genera el reporte en Excel automáticamente."
        : "Report income and expenses via WhatsApp and the system automatically generates an Excel report.",
      emoji: "📊",
    },
    {
      icon: Bot,
      title: isES ? "Asistente IA para gerencia" : "AI assistant for management",
      desc: isES
        ? "Consultas internas respondidas por IA 24/7."
        : "Internal queries answered by AI 24/7.",
      emoji: "🤖",
    },
  ];

  const niches = isES
    ? [
        "Inmobiliarias",
        "Gimnasios",
        "Clínicas",
        "Coworkings",
        "Escuelas",
        "Parqueos",
        "Cualquier negocio con empleados",
      ]
    : [
        "Real Estate",
        "Gyms",
        "Clinics",
        "Coworkings",
        "Schools",
        "Parking lots",
        "Any business with employees",
      ];

  return (
    <section id="qubeops" className="py-24 sm:py-32 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-xs font-semibold uppercase tracking-wider rounded-full glass-card text-accent">
            <Settings className="h-3.5 w-3.5" />
            {isES ? "Producto 4 · QubeSight Ops" : "Product 4 · QubeSight Ops"}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-display leading-tight text-balance">
            QubeSight Ops —{" "}
            <span className="gradient-text">
              {isES ? "Automatización Operativa" : "Operations Automation"}
            </span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            {isES
              ? "Coordina empleados, cobra automático y cierra contabilidad sin levantar un dedo."
              : "Coordinate employees, charge automatically, and close accounting without lifting a finger."}
          </p>
          <p className="mt-3 text-base text-muted-foreground/80">
            {isES
              ? "Sistema de gestión automatizada para negocios con equipos y cobros recurrentes. Se adapta a cualquier industria en 48 horas."
              : "Automated management system for businesses with teams and recurring billing. Adapts to any industry in 48 hours."}
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center hover:border-primary/40 transition-colors"
            >
              <div className="relative inline-flex h-16 w-16 mb-5 rounded-2xl gradient-bg items-center justify-center text-primary-foreground shadow-glow">
                <f.icon className="h-7 w-7" />
                <span className="absolute -top-2 -right-2 text-xl">{f.emoji}</span>
              </div>
              <h3 className="font-semibold font-display mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Niche chips */}
        <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto mb-10">
          {niches.map((n, i) => (
            <motion.span
              key={n}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="px-3 py-1.5 text-sm rounded-full glass-card text-foreground/80 border border-primary/20"
            >
              {n}
            </motion.span>
          ))}
        </div>

        {/* Price + CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass-card border border-accent/30">
            <span className="text-sm font-semibold text-accent">
              {isES ? "Desde" : "From"}
            </span>
            <span className="text-sm font-bold gradient-text">
              $149 setup + $79/{isES ? "mes" : "mo"}
            </span>
          </div>
          <div>
            <Button variant="hero" size="lg" asChild className="min-h-[52px]">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                {isES ? "Automatizar mi operación" : "Automate my operations"}
                <ArrowRight className="ml-1 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QubeOps;
