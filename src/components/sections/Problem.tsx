import { motion } from "framer-motion";
import { Clock, MoonStar, Activity } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const Problem = () => {
  const { t } = useTranslation();

  const items = [
    { icon: Clock, title: t("problem.p1.title"), desc: t("problem.p1.desc") },
    { icon: MoonStar, title: t("problem.p2.title"), desc: t("problem.p2.desc") },
    { icon: Activity, title: t("problem.p3.title"), desc: t("problem.p3.desc") },
  ];

  return (
    <section id="problem" className="py-24 sm:py-32 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold font-display leading-tight text-balance">
            {t("problem.title")}{" "}
            <span className="gradient-text">{t("problem.titleAccent")}</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">{t("problem.subtitle")}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-8 hover:border-destructive/30 transition-colors"
            >
              <div className="h-12 w-12 rounded-xl bg-destructive/10 text-destructive flex items-center justify-center mb-5">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold font-display mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
