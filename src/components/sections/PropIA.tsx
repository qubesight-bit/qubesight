import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Camera, Sparkles, Video, Send, ArrowRight, Search, Bell } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const PropIA = () => {
  const { t, language } = useTranslation();
  const whatsappUrl = `https://wa.me/50686425281?text=${encodeURIComponent(
    language === "es" ? "Hola, quiero activar PropIA." : "Hi, I want to activate PropIA."
  )}`;

  const steps = [
    { icon: Camera, title: t("propia.step1.title"), desc: t("propia.step1.desc") },
    { icon: Sparkles, title: t("propia.step2.title"), desc: t("propia.step2.desc") },
    { icon: Video, title: t("propia.step3.title"), desc: t("propia.step3.desc") },
    { icon: Send, title: t("propia.step4.title"), desc: t("propia.step4.desc") },
  ];

  const extras = [
    { icon: Search, label: t("propia.feature1") },
    { icon: Bell, label: t("propia.feature2") },
  ];

  return (
    <section id="propia" className="py-24 sm:py-32 relative bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-xs font-semibold uppercase tracking-wider rounded-full glass-card text-accent">
            <Sparkles className="h-3.5 w-3.5" />
            {t("propia.badge")}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-display leading-tight text-balance">
            {t("propia.title")}{" "}
            <span className="gradient-text">{t("propia.titleAccent")}</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">{t("propia.description")}</p>
        </motion.div>

        {/* Steps timeline */}
        <div className="relative grid md:grid-cols-4 gap-6 mb-12">
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative text-center"
            >
              <div className="relative inline-flex h-16 w-16 mb-5 rounded-2xl gradient-bg items-center justify-center text-primary-foreground shadow-glow">
                <step.icon className="h-7 w-7" />
                <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-background border border-primary/40 text-xs font-bold text-primary flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-semibold font-display mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Extras */}
        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-10">
          {extras.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-5 flex items-center gap-4"
            >
              <div className="h-11 w-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                <e.icon className="h-5 w-5" />
              </div>
              <span className="font-medium">{e.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" asChild className="min-h-[52px]">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              {t("propia.cta")}
              <ArrowRight className="ml-1 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PropIA;
