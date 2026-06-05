import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

const Differentiation = () => {
  const { t, language } = useTranslation();

  const others = [t("diff.others.1"), t("diff.others.2"), t("diff.others.3"), t("diff.others.4")];
  const us = [t("diff.us.1"), t("diff.us.2"), t("diff.us.3"), t("diff.us.4")];

  return (
    <section className="py-24 sm:py-32 hairline-y">
      <div className="container">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <span className="col-span-12 md:col-span-2 eyebrow">07 / {language === "es" ? "Diferencia" : "Difference"}</span>
          <h2 className="col-span-12 md:col-span-10 font-display text-4xl sm:text-6xl leading-[1.02] tracking-tight text-balance">
            {t("diff.title")} <span className="italic text-primary">{t("diff.titleAccent")}</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 max-w-5xl"
        >
          <div className="md:pr-12 pb-10 md:pb-0 md:border-r border-foreground/15">
            <p className="eyebrow mb-6">{t("diff.others.title")}</p>
            <ul className="space-y-4">
              {others.map((o, i) => (
                <li key={i} className="flex gap-4 text-foreground/55">
                  <span className="font-display italic text-foreground/30 leading-none w-6">—</span>
                  <span className="leading-relaxed line-through decoration-foreground/30">{o}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:pl-12 pt-10 md:pt-0 border-t md:border-t-0 border-foreground/15">
            <p className="eyebrow mb-6 text-primary">{t("diff.us.title")}</p>
            <ul className="space-y-4">
              {us.map((u, i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-display italic text-primary leading-none w-6">{String(i + 1).padStart(2, "0")}</span>
                  <span className="leading-relaxed text-foreground">{u}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Differentiation;
