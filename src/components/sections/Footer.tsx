import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "50686425281";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <a href="#" className="inline-block mb-3">
              <img src={logo} alt="Qubesight" className="h-12 w-auto" />
            </a>
            <p className="text-sm text-muted-foreground">
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
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Contactar por WhatsApp</span>
            </a>
            <div className="hidden sm:block w-px h-6 bg-border" />
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                Aviso legal
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                Privacidad
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 pt-8 border-t border-border text-center"
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} Qubesight. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
