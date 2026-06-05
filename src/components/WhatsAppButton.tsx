import { useTranslation } from "@/hooks/useTranslation";

const WhatsAppButton = () => {
  const { t } = useTranslation();
  const whatsappNumber = "50686425281";
  const whatsappMessage = encodeURIComponent(t("whatsapp.message"));
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("whatsapp.tooltip")}
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 px-4 h-10 bg-foreground text-background text-[13px] hover:bg-primary transition-colors"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-background/80" />
      WhatsApp
    </a>
  );
};

export default WhatsAppButton;
