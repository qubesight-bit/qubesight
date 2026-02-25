import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, ShoppingBag, BarChart3 } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const UseCases = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  const useCases = [
    { icon: MessageSquare, titleKey: "useCases.case1.title", descKey: "useCases.case1.desc" },
    { icon: ShoppingBag, titleKey: "useCases.case2.title", descKey: "useCases.case2.desc" },
    { icon: BarChart3, titleKey: "useCases.case3.title", descKey: "useCases.case3.desc" },
  ];

  return (
    <section id="casos" className="py-24 bg-background" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-6 text-foreground">
            {t('useCases.title2')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('useCases.description2')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.titleKey}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group p-6 rounded-2xl glass-card hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <useCase.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold font-display mb-3 text-foreground">
                {t(useCase.titleKey)}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(useCase.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
