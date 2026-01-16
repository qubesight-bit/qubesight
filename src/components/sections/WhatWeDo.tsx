import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const WhatWeDo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="que-hacemos" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full bg-accent text-accent-foreground">
            Qué hacemos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-6 text-foreground">
            Transformamos la forma en que operas
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            En Qubesight ayudamos a empresas a <strong className="text-foreground">digitalizar, automatizar y escalar</strong> sus operaciones mediante soluciones tecnológicas modernas y personalizadas. Nuestro enfoque combina innovación práctica con resultados medibles.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;
