import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "5491112345678";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className="py-12 bg-foreground text-background/80">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold font-display text-background mb-2">
              Qubesight
            </h3>
            <p className="text-sm text-background/60">
              Soluciones digitales y automatización con IA
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-background/80 hover:text-background transition-colors duration-200"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Contactar por WhatsApp</span>
            </a>
            <div className="hidden sm:block w-px h-6 bg-background/20" />
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-background/60 hover:text-background transition-colors duration-200">
                Aviso legal
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors duration-200">
                Privacidad
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 pt-8 border-t border-background/10 text-center"
        >
          <p className="text-sm text-background/50">
            © {currentYear} Qubesight. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
