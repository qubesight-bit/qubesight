import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Globe2,
  Clock,
  Calendar,
  CreditCard,
  Mic,
  Zap,
  Check,
  X,
} from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const VoiceBot = () => {
  const { t, language } = useTranslation();

  const whatsappUrl = `https://wa.me/50686425281?text=${encodeURIComponent(
    language === "es"
      ? "Hola, quiero información sobre el Voice Bot AI de QubeSight."
      : "Hi, I want info about QubeSight's Voice Bot AI."
  )}`;

  const benefits = [
    { icon: Zap, label: t("voicebot.benefit.latency") },
    { icon: Mic, label: t("voicebot.benefit.orders") },
    { icon: CreditCard, label: t("voicebot.benefit.payments") },
    { icon: Calendar, label: t("voicebot.benefit.calendar") },
  ];

  const rows = [
    {
      icon: Clock,
      label: t("voicebot.row.hours"),
      human: t("voicebot.row.hours.human"),
      bot: t("voicebot.row.hours.bot"),
    },
    {
      icon: Globe2,
      label: t("voicebot.row.languages"),
      human: t("voicebot.row.languages.human"),
      bot: t("voicebot.row.languages.bot"),
    },
    {
      icon: Phone,
      label: t("voicebot.row.calls"),
      human: t("voicebot.row.calls.human"),
      bot: t("voicebot.row.calls.bot"),
    },
    {
      icon: CreditCard,
      label: t("voicebot.row.cost"),
      human: "$12,000 + " + t("voicebot.row.cost.extra"),
      bot: "$2,687",
      highlight: true,
    },
  ];

  return (
    <section id="voicebot" className="py-24 sm:py-32 relative">
      {/* Subtle radial glow */}
      <div
        className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "var(--gradient-glow)" }}
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 text-xs font-semibold uppercase tracking-wider rounded-full glass-card text-primary">
            <Phone className="h-3.5 w-3.5" />
            {t("voicebot.badge")}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-display leading-tight text-balance">
            {t("voicebot.title")}{" "}
            <span className="gradient-text">{t("voicebot.titleAccent")}</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            {t("voicebot.subtitle")}
          </p>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto glass-card rounded-3xl p-2 sm:p-3 overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left p-4 sm:p-5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {t("voicebot.col.feature")}
                  </th>
                  <th className="text-left p-4 sm:p-5 text-sm font-semibold">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <X className="h-4 w-4" />
                      {t("voicebot.col.human")}
                    </div>
                  </th>
                  <th className="text-left p-4 sm:p-5 text-sm font-semibold">
                    <div className="flex items-center gap-2 text-primary">
                      <Check className="h-4 w-4" />
                      QubeSight Voice Bot
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="p-4 sm:p-5">
                      <div className="flex items-center gap-3 text-sm font-medium">
                        <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                          <row.icon className="h-4 w-4" />
                        </div>
                        {row.label}
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-sm text-muted-foreground">
                      {row.human}
                    </td>
                    <td
                      className={`p-4 sm:p-5 text-sm font-semibold ${
                        row.highlight ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {row.bot}
                    </td>
                  </tr>
                ))}
                <tr className="bg-primary/5">
                  <td className="p-4 sm:p-5 text-sm font-bold uppercase tracking-wider text-primary">
                    {t("voicebot.row.savings")}
                  </td>
                  <td className="p-4 sm:p-5" />
                  <td className="p-4 sm:p-5">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full gradient-bg text-primary-foreground text-sm font-bold shadow-glow">
                      −77% · $9,313/{t("voicebot.year")}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mt-8">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card rounded-2xl p-5 flex items-center gap-3 hover:border-primary/30 transition-colors"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <b.icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium leading-tight">{b.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="hero" size="lg" asChild className="min-h-[52px]">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              {t("voicebot.cta")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VoiceBot;
