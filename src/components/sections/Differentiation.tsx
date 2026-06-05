import { motion } from "framer-motion";
import { Check, X, Shield } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const Differentiation = () => {
  const { t } = useTranslation();

  const others = [t("diff.others.1"), t("diff.others.2"), t("diff.others.3"), t("diff.others.4")];
  const us = [t("diff.us.1"), t("diff.us.2"), t("diff.us.3"), t("diff.us.4")];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "var(--gradient-glow)" }} />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 text-xs font-semibold uppercase tracking-wider rounded-full glass-card text-primary">
            <Shield className="h-3.5 w-3.5" />
            {t("diff.badge")}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-display leading-tight text-balance">
            {t("diff.title")}{" "}
            <span className="gradient-text">{t("diff.titleAccent")}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto perspective-2000">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card depth-card rounded-3xl p-8 border-destructive/20"
          >
            <h3 className="text-lg font-bold font-display mb-5 flex items-center gap-2 text-muted-foreground">
              <X className="h-5 w-5 text-destructive" />
              {t("diff.others.title")}
            </h3>
            <ul className="space-y-3">
              {others.map((o, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card depth-card rounded-3xl p-8 border-primary/40 shadow-glow"
          >
            <h3 className="text-lg font-bold font-display mb-5 flex items-center gap-2 text-primary">
              <Check className="h-5 w-5" />
              {t("diff.us.title")}
            </h3>
            <ul className="space-y-3">
              {us.map((u, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{u}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Differentiation;
