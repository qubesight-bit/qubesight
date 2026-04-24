import { useEffect, useState } from "react";
import { Sparkles, X } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const STORAGE_KEY = "qs_urgency_dismissed_v1";

const UrgencyBanner = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [seats, setSeats] = useState(7);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY) === "1") return;
    setVisible(true);

    // Compute pseudo-stable seats based on day of month, so it feels real but doesn't jump on every reload.
    const day = new Date().getDate();
    setSeats(((day * 3) % 8) + 3); // 3..10
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  };

  return (
    <div className="relative z-50 gradient-bg text-primary-foreground">
      <div className="container py-2.5 flex items-center justify-center gap-3 text-xs sm:text-sm font-semibold">
        <Sparkles className="h-3.5 w-3.5 flex-shrink-0 animate-pulse" />
        <span className="truncate text-center">
          {t("urgency.text").replace("{n}", String(seats))}
        </span>
        <a
          href="#pricing"
          className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-full bg-background/15 hover:bg-background/25 transition-colors backdrop-blur-sm whitespace-nowrap"
        >
          {t("urgency.cta")}
        </a>
        <button
          onClick={dismiss}
          aria-label="Cerrar"
          className="ml-1 flex-shrink-0 h-6 w-6 rounded-full hover:bg-background/15 transition-colors flex items-center justify-center"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
};

export default UrgencyBanner;
