import { motion } from "framer-motion";
import { MessageCircle, Instagram, Facebook, Globe, Phone, Network } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const Multichannel = () => {
  const { t } = useTranslation();

  const channels = [
    { icon: MessageCircle, label: t("multi.ch.whatsapp") },
    { icon: Instagram, label: t("multi.ch.instagram") },
    { icon: Facebook, label: t("multi.ch.messenger") },
    { icon: Globe, label: t("multi.ch.web") },
    { icon: Phone, label: t("multi.ch.voice") },
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 text-xs font-semibold uppercase tracking-wider rounded-full glass-card text-primary">
            <Network className="h-3.5 w-3.5" />
            {t("multi.badge")}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-display leading-tight text-balance">
            {t("multi.title")}{" "}
            <span className="gradient-text">{t("multi.titleAccent")}</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">{t("multi.description")}</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto perspective-1000">
          {channels.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card depth-card rounded-2xl p-6 flex flex-col items-center text-center gap-3 hover:border-primary/30 transition-colors"
            >
              <div className="h-12 w-12 rounded-xl gradient-bg flex items-center justify-center text-primary-foreground shadow-glow">
                <c.icon className="h-6 w-6" />
              </div>
              <span className="text-sm font-semibold leading-tight">{c.label}</span>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-lg sm:text-xl font-bold gradient-text">
          {t("multi.tagline")}
        </p>
      </div>
    </section>
  );
};

export default Multichannel;
