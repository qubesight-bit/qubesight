import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { href: "#que-hacemos", label: "Qué hacemos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#por-que", label: "Por qué nosotros" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappNumber = "50686425281";
  const whatsappMessage = encodeURIComponent("Hola, me interesa conocer más sobre sus soluciones digitales.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold font-display text-foreground">
            Qubesight
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <Button variant="hero" size="sm" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Contactar
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-background border-t border-border"
            >
              <div className="py-4 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="px-4 pt-2">
                  <Button variant="hero" size="default" asChild className="w-full">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      Contactar
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
