import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const FinalCTA = () => {
  const { t, language } = useTranslation();
  const whatsappUrl = `https://wa.me/50686425281?text=${encodeURIComponent(
    language === "es"
      ? "Hola, quiero hablar con un experto de QubeSight."
      : "Hi, I want to talk to a QubeSight expert."
  )}`;

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 gradient-hero-bg opacity-60" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center glass-card rounded-3xl p-10 sm:p-16 shadow-glow"
        >
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display leading-tight mb-6 text-balance">
            {t("final.title")}{" "}
            <span className="gradient-text">{t("final.titleAccent")}</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            {t("final.description")}
          </p>
          <Button variant="hero" size="lg" asChild className="min-h-[56px] px-8">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              {t("final.cta")}
              <ArrowRight className="ml-1 h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
