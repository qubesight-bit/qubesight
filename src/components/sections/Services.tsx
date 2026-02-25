import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, ShoppingCart, Bot, Workflow, Smartphone, Settings, Headphones } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  const services = [
    { icon: Globe, titleKey: "services.websites.title2", descKey: "services.websites.desc2" },
    { icon: ShoppingCart, titleKey: "services.ecommerce.title2", descKey: "services.ecommerce.desc2" },
    { icon: Bot, titleKey: "services.chatbots.title2", descKey: "services.chatbots.desc2" },
    { icon: Headphones, titleKey: "services.callcenter.title2", descKey: "services.callcenter.desc2" },
    { icon: Workflow, titleKey: "services.automations.title2", descKey: "services.automations.desc2" },
    { icon: Smartphone, titleKey: "services.apps.title2", descKey: "services.apps.desc2" },
    { icon: Settings, titleKey: "services.systems.title", descKey: "services.systems.desc" },
  ];

  return (
    <section id="servicios" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-6 text-foreground">
            {t('services.title2')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('services.description2')}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.titleKey}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl glass-card hover:border-primary/30 hover:bg-card/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold font-display mb-3 text-foreground">
                {t(service.titleKey)}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(service.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
