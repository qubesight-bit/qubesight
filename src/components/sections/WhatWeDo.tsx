import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const WhatWeDo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="que-hacemos" className="py-24 bg-background" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-6 text-foreground">
            Qué hacemos
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            En Qubesight ayudamos a empresas a <strong className="text-foreground">digitalizar, automatizar y escalar</strong> sus operaciones mediante soluciones tecnológicas modernas y personalizadas. No usamos soluciones genéricas. Cada proyecto se adapta al negocio.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;
