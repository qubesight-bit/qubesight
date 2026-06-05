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
  const { t, language } = useTranslation();

  return (
    <section id="founders" className="py-24 sm:py-32 hairline-y">
      <div className="container">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <span className="col-span-12 md:col-span-2 eyebrow">
            {language === "es" ? "Quiénes somos" : "Who we are"}
          </span>
          <h2 className="col-span-12 md:col-span-10 font-display text-4xl sm:text-6xl leading-[1.02] tracking-tight">
            {language === "es"
              ? "Dos personas, no una agencia."
              : "Two people. Not an agency."}
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-6 sm:gap-10">
          {founders.map((f) => (
            <article key={f.name} className="col-span-12 sm:col-span-6">
              <div className="aspect-[4/5] w-full overflow-hidden bg-foreground/5 mb-6">
                <img
                  src={f.img}
                  alt={f.name}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale hover:grayscale-0 transition-[filter] duration-700"
                />
              </div>
              <h3 className="font-display text-3xl sm:text-4xl leading-none">{f.name}</h3>
              <p className="mt-2 eyebrow">{t(f.roleKey)}</p>
              <p className="mt-4 text-foreground/75 leading-relaxed max-w-md">{t(f.bioKey)}</p>
              {f.linkedin && (
                <a
                  href={f.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm underline underline-offset-[6px] decoration-foreground/30 hover:decoration-primary hover:text-primary transition-colors"
                >
                  LinkedIn ↗
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
