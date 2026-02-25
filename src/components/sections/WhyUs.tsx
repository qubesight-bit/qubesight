import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, DollarSign, HeadphonesIcon, Rocket } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  const reasons = [
    { icon: Building2, titleKey: "whyUs.reason1.title", descKey: "whyUs.reason1.desc" },
    { icon: DollarSign, titleKey: "whyUs.reason2.title", descKey: "whyUs.reason2.desc" },
    { icon: HeadphonesIcon, titleKey: "whyUs.reason3.title", descKey: "whyUs.reason3.desc" },
    { icon: Rocket, titleKey: "whyUs.reason4.title", descKey: "whyUs.reason4.desc" },
  ];

  return (
    <section id="por-que" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-6 text-foreground">
            {t('whyUs.title2')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('whyUs.description2')}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.titleKey}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl glass-card text-center hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-5 mx-auto">
                <reason.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold font-display mb-3 text-foreground">
                {t(reason.titleKey)}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t(reason.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
