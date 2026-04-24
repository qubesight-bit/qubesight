import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, MessageCircle, ArrowRight, Bot } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const Assistant = () => {
  const { t, language } = useTranslation();
  const whatsappUrl = `https://wa.me/50686425281?text=${encodeURIComponent(
    language === "es" ? "Hola, quiero mi QubeSight Assistant." : "Hi, I want my QubeSight Assistant."
  )}`;

  const benefits = [
    t("assistant.b1"),
    t("assistant.b2"),
    t("assistant.b3"),
    t("assistant.b4"),
    t("assistant.b5"),
  ];

  return (
    <section id="assistant" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-xs font-semibold uppercase tracking-wider rounded-full glass-card text-primary">
              <Bot className="h-3.5 w-3.5" />
              {t("assistant.badge")}
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold font-display leading-tight mb-6 text-balance">
              {t("assistant.title")}{" "}
              <span className="gradient-text">{t("assistant.titleAccent")}</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">{t("assistant.description")}</p>

            <ul className="space-y-3 mb-10">
              {benefits.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 flex-shrink-0 h-6 w-6 rounded-full bg-primary/15 text-primary flex items-center justify-center">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-foreground/90">{b}</span>
                </motion.li>
              ))}
            </ul>

            <Button variant="hero" size="lg" asChild className="min-h-[52px]">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                {t("assistant.cta")}
                <ArrowRight className="ml-1 h-5 w-5" />
              </a>
            </Button>
          </motion.div>

          {/* Right: chat mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute inset-0 blur-3xl opacity-40" style={{ background: "var(--gradient-glow)" }} />
            <div className="relative glass-card rounded-3xl p-6 shadow-glow">
              <div className="flex items-center gap-3 pb-4 border-b border-white/5">
                <div className="h-10 w-10 rounded-full gradient-bg flex items-center justify-center text-primary-foreground">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-sm">QubeSight Assistant</div>
                  <div className="text-xs text-primary flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                    {language === "es" ? "En línea · Responde al instante" : "Online · Replies instantly"}
                  </div>
                </div>
              </div>

              <div className="space-y-3 py-5">
                <div className="max-w-[80%] bg-secondary rounded-2xl rounded-tl-sm px-4 py-3 text-sm">
                  {language === "es"
                    ? "Hola, ¿tienen mesas disponibles para mañana a las 8pm?"
                    : "Hi, do you have tables available tomorrow at 8pm?"}
                </div>
                <div className="max-w-[80%] ml-auto gradient-bg text-primary-foreground rounded-2xl rounded-tr-sm px-4 py-3 text-sm">
                  {language === "es"
                    ? "¡Hola! Sí, tenemos disponibilidad para 2, 4 o 6 personas. ¿Cuántos serán?"
                    : "Hi! Yes, we have availability for 2, 4 or 6 people. How many will you be?"}
                </div>
                <div className="max-w-[80%] bg-secondary rounded-2xl rounded-tl-sm px-4 py-3 text-sm">
                  {language === "es" ? "Seríamos 4 personas." : "We'd be 4 people."}
                </div>
                <div className="max-w-[80%] ml-auto gradient-bg text-primary-foreground rounded-2xl rounded-tr-sm px-4 py-3 text-sm">
                  {language === "es"
                    ? "¡Listo! Reserva confirmada para 4 personas mañana 8pm. ✅"
                    : "Done! Booking confirmed for 4 people tomorrow 8pm. ✅"}
                </div>
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-white/5 text-xs text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {language === "es" ? "Respondido en 2.1 segundos" : "Replied in 2.1 seconds"}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Assistant;
