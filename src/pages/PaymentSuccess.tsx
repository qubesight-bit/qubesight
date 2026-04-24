import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";

const PaymentSuccess = () => {
  const { language } = useTranslation();
  const [params] = useSearchParams();
  const orderId = params.get("order_id") ?? params.get("payment_id");

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="glass-card rounded-3xl p-10 max-w-lg w-full text-center">
        <div className="mx-auto mb-6 h-16 w-16 rounded-full gradient-bg flex items-center justify-center shadow-glow">
          <CheckCircle2 className="h-8 w-8 text-primary-foreground" />
        </div>
        <h1 className="text-3xl font-bold font-display mb-3">
          {language === "es" ? "¡Pago confirmado!" : "Payment confirmed!"}
        </h1>
        <p className="text-muted-foreground mb-2">
          {language === "es"
            ? "Recibimos tu pago. En breve te contactaremos para activar tu servicio."
            : "We received your payment. We'll be in touch shortly to activate your service."}
        </p>
        {orderId && <p className="text-xs text-muted-foreground mb-6">Ref: {orderId}</p>}
        <Button asChild variant="hero" size="lg" className="w-full">
          <Link to="/">{language === "es" ? "Volver al inicio" : "Back to home"}</Link>
        </Button>
      </div>
    </main>
  );
};

export default PaymentSuccess;
