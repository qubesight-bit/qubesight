import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Globe, Bot, Phone, Briefcase } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const projects = [
  {
    titleKey: "portfolio.temteaching",
    descriptionKey: "portfolio.temteaching.desc",
    icon: Globe,
    url: "https://temteaching.com",
    tags: ["Website", "Education"],
  },
  {
    titleKey: "portfolio.overstop",
    descriptionKey: "portfolio.overstop.desc",
    icon: Globe,
    url: "https://overstop.lat",
    tags: ["Website", "E-commerce"],
  },
  {
    titleKey: "portfolio.timAutomation",
    descriptionKey: "portfolio.timAutomation.desc",
    icon: Bot,
    url: null,
    tags: ["Automation", "AI"],
  },
  {
    titleKey: "portfolio.timVoice",
    descriptionKey: "portfolio.timVoice.desc",
    icon: Phone,
    url: null,
    tags: ["AI", "Voice Agent"],
  },
  {
    titleKey: "portfolio.qubesight",
    descriptionKey: "portfolio.qubesight.desc",
    icon: Globe,
    url: "https://qubesight.lat",
    tags: ["Website", "Corporate"],
  },
  {
    titleKey: "portfolio.ajhb1",
    descriptionKey: "portfolio.ajhb1.desc",
    icon: Briefcase,
    url: "https://ajhbsistema.lovable.app/",
    tags: ["Web App", "System"],
  },
  {
    titleKey: "portfolio.ajhb2",
    descriptionKey: "portfolio.ajhb2.desc",
    icon: Briefcase,
    url: "https://ajhbsistema2.base44.app/",
    tags: ["Web App", "System"],
  },
];

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  return (
    <section id="portafolio" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-6 text-foreground">
            {t('portfolio.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('portfolio.description')}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.titleKey}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl glass-card hover:border-primary/30 hover:bg-card/80 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <project.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                    aria-label={`Visit ${t(project.titleKey)}`}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
              </div>

              <h3 className="text-xl font-semibold font-display mb-3 text-foreground">
                {t(project.titleKey)}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t(project.descriptionKey)}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
