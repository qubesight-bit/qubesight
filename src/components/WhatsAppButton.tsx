import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "5491112345678";
  const whatsappMessage = encodeURIComponent("Hola, me interesa conocer más sobre sus servicios.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-bg shadow-lg shadow-glow flex items-center justify-center group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6 text-primary-foreground group-hover:scale-110 transition-transform duration-200" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-2 rounded-lg bg-foreground text-background text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        ¿Necesitas ayuda?
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
