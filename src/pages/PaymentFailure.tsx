import { Link } from "react-router-dom";
import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";

const PaymentFailure = () => {
  const { language } = useTranslation();

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="glass-card rounded-3xl p-10 max-w-lg w-full text-center">
        <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-destructive/15 flex items-center justify-center">
          <XCircle className="h-8 w-8 text-destructive" />
        </div>
        <h1 className="text-3xl font-bold font-display mb-3">
          {language === "es" ? "Pago no completado" : "Payment not completed"}
        </h1>
        <p className="text-muted-foreground mb-6">
          {language === "es"
            ? "No pudimos procesar tu pago. Puedes intentarlo de nuevo o escribirnos por WhatsApp."
            : "We couldn't process your payment. You can try again or message us on WhatsApp."}
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild variant="hero" size="lg" className="flex-1">
            <Link to="/#pricing">{language === "es" ? "Reintentar" : "Try again"}</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="flex-1">
            <a href="https://wa.me/50686425281" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default PaymentFailure;
