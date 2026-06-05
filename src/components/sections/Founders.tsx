import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import ernestoImg from "@/assets/founder-ernesto.jpeg";
import karlaImg from "@/assets/founder-karla.png";

const founders = [
  {
    name: "Ernesto Libby",
    roleKey: "founders.ernesto.role",
    bioKey: "founders.ernesto.bio",
    img: ernestoImg,
    linkedin: "https://www.linkedin.com/in/ernestolibby25/",
  },
  {
    name: "Karla Araya",
    roleKey: "founders.karla.role",
    bioKey: "founders.karla.bio",
    img: karlaImg,
    linkedin: null,
  },
];

const Founders = () => {
  const { t } = useTranslation();

  return (
    <section id="founders" className="py-24 sm:py-32 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold font-display leading-tight text-balance">
            {t("founders.title")}{" "}
            <span className="gradient-text">{t("founders.titleAccent")}</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">{t("founders.subtitle")}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {founders.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass-card rounded-2xl p-6 flex flex-col items-center text-center"
            >
              <div className="relative mb-5">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/40 to-blue-600/40 blur-md opacity-70" />
                <img
                  src={f.img}
                  alt={f.name}
                  loading="lazy"
                  className="relative h-32 w-32 rounded-full object-cover border border-white/10"
                />
              </div>
              <h3 className="font-display font-semibold text-xl">{f.name}</h3>
              <p className="text-sm text-primary mt-1">{t(f.roleKey)}</p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{t(f.bioKey)}</p>
              {f.linkedin && (
                <a
                  href={f.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LinkedIn ${f.name}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
