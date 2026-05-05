import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import CheckoutDialog from "@/components/CheckoutDialog";

const Pricing = () => {
  const { t } = useTranslation();
  const [yearly, setYearly] = useState(false);
  const [checkout, setCheckout] = useState<{ open: boolean; amount: number; description: string; planId: string }>(
    { open: false, amount: 0, description: "", planId: "" },
  );

  const openCheckout = (planId: string, amount: number, planName: string) => {
    setCheckout({ open: true, amount, description: `QubeSight — ${planName}`, planId });
  };

  const fmt = (monthly: number) => {
    if (yearly) return Math.round(monthly * 0.8);
    return monthly;
  };

  const plans = [
    {
      id: "starter",
      name: t("pricing.basic.name"),
      desc: t("pricing.basic.desc"),
      price: fmt(129),
      suffix: t("pricing.month"),
      popular: false,
      features: [t("pricing.basic.f1"), t("pricing.basic.f2"), t("pricing.basic.f3"), t("pricing.basic.f4")],
    },
    {
      id: "growth",
      name: t("pricing.growth.name"),
      desc: t("pricing.growth.desc"),
      price: fmt(229),
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
      id: "scale",
      name: t("pricing.propia.name"),
      desc: t("pricing.propia.desc"),
      price: fmt(399),
      suffix: t("pricing.month"),
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
    <section id="pricing" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full blur-3xl opacity-30 pointer-events-none animate-float-3d" style={{ background: "var(--gradient-glow)" }} />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full blur-3xl opacity-30 pointer-events-none animate-float-3d" style={{ background: "radial-gradient(circle, hsl(217 91% 60% / 0.4), transparent 70%)", animationDelay: "-7s" }} />
      <div className="container relative">
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

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto perspective-2000">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative glass-card depth-card rounded-3xl p-8 flex flex-col ${
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
                <div className="mt-2 text-sm text-muted-foreground">
                  {yearly ? (
                    <>
                      <span className="text-foreground font-semibold">${plan.price * 12}</span>{" "}
                      {t("pricing.annualTotal")}{" "}
                      <span className="text-primary">
                        ({t("pricing.youSave")} ${(plan.price * 12) / 4})
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="text-foreground font-semibold">${plan.price * 12}</span>{" "}
                      {t("pricing.annualTotal")}
                    </>
                  )}
                </div>
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
                onClick={() => openCheckout(plan.id, plan.price, plan.name)}
                className="w-full min-h-[48px]"
              >
                {t("pricing.cta")}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Voice Bot AI plans */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mt-24 mb-10"
        >
          <h3 className="text-2xl sm:text-4xl font-bold font-display leading-tight">
            {t("pricing.voice.title")}
          </h3>
          <p className="mt-3 text-muted-foreground">
            {t("pricing.voice.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto perspective-2000">
          {[
            {
              id: "voice_bronze",
              name: t("pricing.voice.bronze.name"),
              desc: t("pricing.voice.bronze.desc"),
              price: fmt(199),
              tier: "bronze" as const,
              popular: false,
              features: [
                t("pricing.voice.bronze.f1"),
                t("pricing.voice.bronze.f2"),
                t("pricing.voice.bronze.f3"),
                t("pricing.voice.bronze.f4"),
              ],
            },
            {
              id: "voice_silver",
              name: t("pricing.voice.silver.name"),
              desc: t("pricing.voice.silver.desc"),
              price: fmt(399),
              tier: "silver" as const,
              popular: true,
              features: [
                t("pricing.voice.silver.f1"),
                t("pricing.voice.silver.f2"),
                t("pricing.voice.silver.f3"),
                t("pricing.voice.silver.f4"),
                t("pricing.voice.silver.f5"),
              ],
            },
            {
              id: "voice_gold",
              name: t("pricing.voice.gold.name"),
              desc: t("pricing.voice.gold.desc"),
              price: fmt(799),
              tier: "gold" as const,
              popular: false,
              features: [
                t("pricing.voice.gold.f1"),
                t("pricing.voice.gold.f2"),
                t("pricing.voice.gold.f3"),
                t("pricing.voice.gold.f4"),
                t("pricing.voice.gold.f5"),
              ],
            },
          ].map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative glass-card depth-card rounded-3xl p-8 flex flex-col ${
                plan.popular ? "border-primary/40 shadow-glow scale-100 md:scale-105" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-3 py-1 rounded-full gradient-bg text-primary-foreground text-xs font-bold uppercase tracking-wider shadow-glow">
                  <Sparkles className="h-3 w-3" />
                  {t("pricing.popular")}
                </span>
              )}

              <div className="flex items-center gap-2 mb-1">
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    plan.tier === "bronze"
                      ? "bg-amber-700"
                      : plan.tier === "silver"
                      ? "bg-slate-300"
                      : "bg-yellow-400"
                  }`}
                />
                <h3 className="text-xl font-bold font-display">Voice Bot {plan.name}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-6">{plan.desc}</p>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold font-display">${plan.price}</span>
                  <span className="text-muted-foreground">{t("pricing.month")}</span>
                </div>
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
                onClick={() => openCheckout(plan.id, plan.price, `Voice Bot ${plan.name}`)}
                className="w-full min-h-[48px]"
              >
                {t("pricing.cta")}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>

      <CheckoutDialog
        open={checkout.open}
        onOpenChange={(open) => setCheckout((c) => ({ ...c, open }))}
        amount={checkout.amount}
        description={checkout.description}
        planId={checkout.planId}
      />
    </section>
  );
};

export default Pricing;
