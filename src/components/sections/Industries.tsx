import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Building2, UtensilsCrossed, Stethoscope, Dumbbell, Check, ArrowRight } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const Industries = () => {
  const { t } = useTranslation();

  const industries = [
    {
      key: "realestate",
      icon: Building2,
      title: t("industries.realestate.title"),
      bullets: [t("industries.realestate.b1"), t("industries.realestate.b2"), t("industries.realestate.b3")],
      demoTo: "/inmobiliarias",
    },
    {
      key: "restaurants",
      icon: UtensilsCrossed,
      title: t("industries.restaurants.title"),
      bullets: [t("industries.restaurants.b1"), t("industries.restaurants.b2"), t("industries.restaurants.b3")],
      demoTo: "/restaurantes",
    },
    {
      key: "clinics",
      icon: Stethoscope,
      title: t("industries.clinics.title"),
      bullets: [t("industries.clinics.b1"), t("industries.clinics.b2"), t("industries.clinics.b3")],
      demoTo: "/dental",
    },
    {
      key: "gyms",
      icon: Dumbbell,
      title: t("industries.gyms.title"),
      bullets: [t("industries.gyms.b1"), t("industries.gyms.b2"), t("industries.gyms.b3")],
      demoTo: "/gimnasios",
    },
  ];

  return (
    <section id="industries" className="py-24 sm:py-32 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl sm:text-5xl font-bold font-display leading-tight text-balance">
            {t("industries.title")}
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">{t("industries.description")}</p>
        </motion.div>

        <Tabs defaultValue="realestate" className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 h-auto bg-secondary/40 p-1.5 rounded-2xl mb-8">
            {industries.map((ind) => (
              <TabsTrigger
                key={ind.key}
                value={ind.key}
                className="flex items-center gap-2 py-3 px-4 rounded-xl data-[state=active]:gradient-bg data-[state=active]:text-primary-foreground data-[state=active]:shadow-glow text-sm"
              >
                <ind.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{t(`industries.${ind.key}.tab`)}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {industries.map((ind) => (
            <TabsContent key={ind.key} value={ind.key}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-3xl p-8 sm:p-12"
              >
                <div className="flex items-start gap-5 mb-8">
                  <div className="flex-shrink-0 h-14 w-14 rounded-2xl gradient-bg flex items-center justify-center text-primary-foreground shadow-glow">
                    <ind.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-display leading-tight">{ind.title}</h3>
                </div>
                <ul className="grid sm:grid-cols-3 gap-4 mb-8">
                  {ind.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 p-4 rounded-xl bg-background/40 border border-white/5">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{b}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="hero" size="lg" asChild className="min-h-[52px]">
                  <Link to={ind.demoTo}>
                    Probar demo en vivo
                    <ArrowRight className="ml-1 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Industries;
