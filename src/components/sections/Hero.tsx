import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

const Hero = () => {
  const { t, language } = useTranslation();
  const whatsappUrl = `https://wa.me/50686425281?text=${encodeURIComponent(
    language === "es"
      ? "Hola, quiero empezar con QubeSight."
      : "Hi, I want to get started with QubeSight."
  )}`;

  return (
    <section className="relative pt-40 pb-24 sm:pt-48 sm:pb-32">
      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          {/* Eyebrow + index, left margin */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="col-span-12 md:col-span-2"
          >
            <span className="eyebrow">00 / {language === "es" ? "Inicio" : "Intro"}</span>
          </motion.div>

          {/* Headline + lede */}
          <div className="col-span-12 md:col-span-10">
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-[clamp(2.75rem,8vw,7.5rem)] leading-[0.95] tracking-tight text-foreground text-balance"
            >
              {language === "es" ? (
                <>
                  Tu negocio responde<br />
                  <span className="italic text-primary">mientras duermes.</span>
                </>
              ) : (
                <>
                  Your business answers<br />
                  <span className="italic text-primary">while you sleep.</span>
                </>
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-10 max-w-xl text-lg leading-relaxed text-foreground/75"
            >
              {language === "es"
                ? "Automatización con IA para WhatsApp, web, redes y llamadas. Un sistema. Veinticuatro horas. Sin contratar más gente."
                : "AI automation across WhatsApp, web, social and calls. One system. Twenty-four hours. Without hiring."}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
            >
              <a
                href="#demos"
                className="inline-flex items-center gap-3 bg-primary px-6 h-12 text-primary-foreground text-[15px] hover:bg-primary/90 transition-colors"
              >
                {language === "es" ? "Ver una demo" : "See a demo"}
                <span aria-hidden>→</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] text-foreground underline underline-offset-[6px] decoration-foreground/30 hover:decoration-primary hover:text-primary transition-colors"
              >
                {language === "es" ? "Hablar por WhatsApp" : "Talk on WhatsApp"}
              </a>
            </motion.div>
          </div>

          {/* Hairline + table of contents — replaces stat-card row */}
          <div className="col-span-12 mt-24 sm:mt-32">
            <div className="hairline pt-6">
              <div className="grid grid-cols-12 gap-6 text-sm">
                <span className="col-span-12 md:col-span-2 eyebrow">{language === "es" ? "Contenido" : "Contents"}</span>
                <ol className="col-span-12 md:col-span-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-3 text-foreground/70">
                  <li><a href="#problem" className="hover:text-foreground"><span className="text-foreground/40 mr-3">01</span>{t("nav.problem")}</a></li>
                  <li><a href="#assistant" className="hover:text-foreground"><span className="text-foreground/40 mr-3">02</span>{t("nav.assistant")}</a></li>
                  <li><a href="#voicebot" className="hover:text-foreground"><span className="text-foreground/40 mr-3">03</span>{t("nav.voicebot")}</a></li>
                  <li><a href="#pricing" className="hover:text-foreground"><span className="text-foreground/40 mr-3">04</span>{t("nav.pricing")}</a></li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
