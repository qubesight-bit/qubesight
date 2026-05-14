import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, MessageSquare, Zap, TrendingUp } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import heroBgVideo from "@/assets/hero-bg.mp4";

const Hero = () => {
  const { t, language } = useTranslation();
  const whatsappUrl = `https://wa.me/50686425281?text=${encodeURIComponent(
    language === "es"
      ? "Hola, quiero empezar a responder automáticamente con QubeSight."
      : "Hi, I want to start replying automatically with QubeSight."
  )}`;

  const stats = [
    { icon: MessageSquare, value: "2,847", label: t("hero.proof.messages") },
    { icon: Zap, value: "< 3 seg", label: t("hero.proof.time") },
    { icon: TrendingUp, value: "94%", label: t("hero.proof.conversion") },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero-bg pt-24 pb-16">
      {/* Cinematic background video */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          src={heroBgVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
      </div>

      {/* 3D perspective grid floor */}
      <div className="absolute bottom-0 left-0 right-0 h-[60vh] neon-grid-3d animate-grid-drift opacity-40 pointer-events-none" />

      {/* Floating orbs */}
      <div className="absolute top-[20%] left-[8%] w-32 h-32 rounded-full orb-3d animate-float-3d pointer-events-none" />
      <div className="absolute top-[30%] right-[10%] w-24 h-24 rounded-full orb-3d animate-float-3d pointer-events-none" style={{ animationDelay: "-4s" }} />
      <div className="absolute bottom-[25%] right-[20%] w-16 h-16 rounded-full orb-3d animate-float-3d pointer-events-none" style={{ animationDelay: "-8s" }} />

      {/* Vignette glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-40 pointer-events-none"
        style={{ background: "var(--gradient-glow)" }} />

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center perspective-2000">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-semibold uppercase tracking-widest rounded-full glass-card text-primary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              {t("hero.badge")}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display leading-[1.05] mb-6 text-balance preserve-3d"
            style={{ textShadow: "0 8px 40px hsl(187 92% 55% / 0.25)" }}
          >
            {t("hero.title")}
            <br />
            <span className="gradient-text">{t("hero.titleAccent")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed text-balance"
          >
            {t("hero.subhead.1")}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-base sm:text-lg text-foreground/80 font-medium mb-10 max-w-3xl mx-auto leading-relaxed text-balance"
          >
            {t("hero.subhead.2")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 justify-center mb-14"
          >
            <Button variant="hero" size="lg" asChild className="min-h-[52px]">
              <a href="#demos">
                {t("hero.cta.primary")}
                <ArrowRight className="ml-1 h-5 w-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild className="min-h-[52px]">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Play className="mr-1 h-4 w-4" />
                {t("hero.cta.secondary")}
              </a>
            </Button>
          </motion.div>

          {/* Social proof bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto perspective-1000"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="glass-card depth-card rounded-2xl px-5 py-4 flex items-center gap-3 text-left"
              >
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shadow-glow">
                  <stat.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xl font-bold font-display text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground leading-tight">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
