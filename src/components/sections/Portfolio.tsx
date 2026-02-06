import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

import imgTemteaching from "@/assets/portfolio/temteaching.png";
import imgOverstop from "@/assets/portfolio/overstop.png";
import imgTimAutomation from "@/assets/portfolio/tim-automation.png";
import imgTimVoice from "@/assets/portfolio/tim-voice.png";
import imgQubesight from "@/assets/portfolio/qubesight.png";
import imgAjhb1 from "@/assets/portfolio/ajhb1.png";
import imgAjhb2 from "@/assets/portfolio/ajhb2.png";

const projects = [
  {
    titleKey: "portfolio.temteaching",
    descriptionKey: "portfolio.temteaching.desc",
    image: imgTemteaching,
    url: "https://temteaching.com",
    tags: ["Website", "Education"],
  },
  {
    titleKey: "portfolio.overstop",
    descriptionKey: "portfolio.overstop.desc",
    image: imgOverstop,
    url: "https://overstop.lat",
    tags: ["Website", "E-commerce"],
  },
  {
    titleKey: "portfolio.timAutomation",
    descriptionKey: "portfolio.timAutomation.desc",
    image: imgTimAutomation,
    url: null,
    tags: ["Automation", "AI"],
  },
  {
    titleKey: "portfolio.timVoice",
    descriptionKey: "portfolio.timVoice.desc",
    image: imgTimVoice,
    url: null,
    tags: ["AI", "Voice Agent"],
  },
  {
    titleKey: "portfolio.qubesight",
    descriptionKey: "portfolio.qubesight.desc",
    image: imgQubesight,
    url: "https://qubesight.lat",
    tags: ["Website", "Corporate"],
  },
  {
    titleKey: "portfolio.ajhb1",
    descriptionKey: "portfolio.ajhb1.desc",
    image: imgAjhb1,
    url: "https://ajhbsistema.lovable.app/",
    tags: ["Web App", "System"],
  },
  {
    titleKey: "portfolio.ajhb2",
    descriptionKey: "portfolio.ajhb2.desc",
    image: imgAjhb2,
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
              className="group rounded-2xl glass-card hover:border-primary/30 hover:bg-card/80 transition-all duration-300 overflow-hidden"
            >
              {/* Screenshot */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={t(project.titleKey)}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 p-2 rounded-lg bg-background/70 backdrop-blur-sm text-muted-foreground hover:text-primary hover:bg-background/90 transition-all duration-200"
                    aria-label={`Visit ${t(project.titleKey)}`}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold font-display mb-2 text-foreground">
                  {t(project.titleKey)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
