import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { Button } from "@/components/ui/button";
import { caseStudies, categories } from "@/data/caseStudies";
import type { Language } from "@/data/caseStudies";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { language } = useTranslation();
  const lang = language as Language;
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? caseStudies
      : caseStudies.filter((cs) => cs.category === activeFilter);

  return (
    <section id="portafolio" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary/20 text-primary">
            {lang === "es" ? "Portafolio" : "Portfolio"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-6 text-foreground">
            {lang === "es"
              ? "Soluciones Reales, Resultados Reales"
              : "Real Solutions, Real Results"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {lang === "es"
              ? "Descubre cómo hemos ayudado a empresas a automatizar, escalar y crecer con tecnología a medida."
              : "Explore how we've helped businesses automate, scale, and succeed with tailored technology."}
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-14"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveFilter(cat.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeFilter === cat.key
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                  : "bg-card/50 text-muted-foreground border-border/50 hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {cat.label[lang]}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
              className="group rounded-2xl glass-card overflow-hidden hover:border-primary/30 transition-all duration-500 flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={project.image}
                  alt={project.title[lang]}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Hover overlay actions */}
                <div className="absolute inset-0 flex items-end justify-center pb-5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <Button variant="hero" size="sm" asChild>
                    <Link to={`/case-study/${project.slug}`}>
                      {lang === "es" ? "Ver Caso de Estudio" : "View Case Study"}
                      <ArrowRight className="ml-1.5 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                {/* Category tag */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-background/80 backdrop-blur-sm text-foreground border border-border/50">
                    {project.categoryTag[lang]}
                  </span>
                </div>

                {/* External link */}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-3 right-3 p-2 rounded-lg bg-background/70 backdrop-blur-sm text-muted-foreground hover:text-primary hover:bg-background/90 transition-all duration-200"
                    aria-label={`Visit ${project.title[lang]}`}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold font-display mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title[lang]}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                  {project.summary[lang]}
                </p>

                {/* Bottom row */}
                <div className="flex items-center justify-between pt-4 border-t border-border/30">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold font-display gradient-text">
                      {project.heroStat.value}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {project.heroStat.label[lang]}
                    </span>
                  </div>
                  <Link
                    to={`/case-study/${project.slug}`}
                    className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
                  >
                    {lang === "es" ? "Ver más" : "Learn more"}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
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
