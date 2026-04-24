import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const Pricing = () => {
  const { t, language } = useTranslation();
  const [yearly, setYearly] = useState(false);

  const whatsapp = (plan: string) =>
    `https://wa.me/50686425281?text=${encodeURIComponent(
      language === "es"
        ? `Hola, me interesa el plan ${plan} de QubeSight.`
        : `Hi, I'm interested in the ${plan} plan from QubeSight.`
    )}`;

  const fmt = (monthly: number) => {
    if (yearly) return Math.round(monthly * 0.8);
    return monthly;
  };

  const plans = [
    {
      name: t("pricing.basic.name"),
      desc: t("pricing.basic.desc"),
      price: fmt(49),
      suffix: t("pricing.month"),
      popular: false,
      features: [t("pricing.basic.f1"), t("pricing.basic.f2"), t("pricing.basic.f3"), t("pricing.basic.f4")],
    },
    {
      name: t("pricing.growth.name"),
      desc: t("pricing.growth.desc"),
      price: fmt(99),
      suffix: t("pricing.month"),
      popular: true,
      features: [
        t("pricing.growth.f1"),
        t("pricing.growth.f2"),
        t("pricing.growth.f3"),
        t("pricing.growth.f4"),
        t("pricing.growth.f5"),
      ],
    },
    {
      name: t("pricing.propia.name"),
      desc: t("pricing.propia.desc"),
      price: 150,
      suffix: t("pricing.month"),
      setup: { label: t("pricing.propia.setup"), value: "$800 – $1,200", note: t("pricing.oneTime") },
      popular: false,
      features: [
        t("pricing.propia.f1"),
        t("pricing.propia.f2"),
        t("pricing.propia.f3"),
        t("pricing.propia.f4"),
        t("pricing.propia.f5"),
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 sm:py-32 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 text-xs font-semibold uppercase tracking-wider rounded-full glass-card text-primary">
            {t("pricing.badge")}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-display leading-tight text-balance">
            {t("pricing.title")}{" "}
            <span className="gradient-text">{t("pricing.titleAccent")}</span>
          </h2>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 mt-10 p-1.5 glass-card rounded-full">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                !yearly ? "gradient-bg text-primary-foreground shadow-glow" : "text-muted-foreground"
              }`}
            >
              {t("pricing.monthly")}
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                yearly ? "gradient-bg text-primary-foreground shadow-glow" : "text-muted-foreground"
              }`}
            >
              {t("pricing.yearly")}
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${yearly ? "bg-background/20" : "bg-primary/20 text-primary"}`}>
                {t("pricing.save")}
              </span>
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative glass-card rounded-3xl p-8 flex flex-col ${
                plan.popular ? "border-primary/40 shadow-glow scale-100 md:scale-105" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-3 py-1 rounded-full gradient-bg text-primary-foreground text-xs font-bold uppercase tracking-wider shadow-glow">
                  <Sparkles className="h-3 w-3" />
                  {t("pricing.popular")}
                </span>
              )}

              <h3 className="text-xl font-bold font-display mb-1">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-6">{plan.desc}</p>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold font-display">${plan.price}</span>
                  <span className="text-muted-foreground">{plan.suffix}</span>
                </div>
                {plan.setup && (
                  <div className="mt-2 text-sm text-muted-foreground">
                    + <span className="font-semibold text-foreground">{plan.setup.value}</span> {plan.setup.label}{" "}
                    <span className="text-xs">({plan.setup.note})</span>
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "hero" : "outline"}
                size="lg"
                asChild
                className="w-full min-h-[48px]"
              >
                <a href={whatsapp(plan.name)} target="_blank" rel="noopener noreferrer">
                  {t("pricing.cta")}
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
