import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const HeroChatPreview = () => {
  const { language } = useTranslation();
  const es = language === "es";

  const messages = [
    {
      role: "in" as const,
      text: es
        ? "Hola, ¿tienen mesa para 4 mañana 8pm?"
        : "Hi, do you have a table for 4 tomorrow 8pm?",
      time: "20:14",
    },
    {
      role: "out" as const,
      text: es
        ? "¡Hola! Sí, 8:00 pm para 4 personas. ¿Te la reservo?"
        : "Hi! Yes, 8:00 pm for 4 people. Want me to book it?",
      time: "20:14",
    },
    {
      role: "in" as const,
      text: es ? "Sí, por favor." : "Yes please.",
      time: "20:14",
    },
    {
      role: "out" as const,
      text: es
        ? "Reserva confirmada para mañana 8:00 pm · 4 pers."
        : "Booking confirmed for tomorrow 8:00 pm · 4 ppl.",
      time: "20:14",
      tag: es ? "Reserva creada" : "Booking created",
    },
  ];

  return (
    <div className="bezel-shell">
      <div className="bezel-inner p-5 sm:p-6">
        {/* Header strip */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[hsl(249,65%,56%)] to-[hsl(258,70%,62%)] grid place-items-center text-[13px] font-bold text-white">
              Q
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-foreground">QubeSight</div>
              <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <span className="relative inline-flex h-1.5 w-1.5">
                  <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                {es ? "Respondiendo en 2.1 seg" : "Replying in 2.1s"}
              </div>
            </div>
          </div>
          <div className="flex gap-1">
            <span className="h-2 w-2 rounded-full bg-white/10" />
            <span className="h-2 w-2 rounded-full bg-white/10" />
            <span className="h-2 w-2 rounded-full bg-white/10" />
          </div>
        </div>

        <div className="hairline my-4" />

        {/* Conversation */}
        <div className="flex flex-col gap-2.5">
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.18 }}
              className={`flex ${m.role === "out" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-snug ${
                  m.role === "out"
                    ? "bubble-out rounded-br-md"
                    : "bubble-in text-foreground/90 rounded-bl-md"
                }`}
              >
                {m.text}
                {m.tag && (
                  <div className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-semibold tracking-wide">
                    <Check className="h-3 w-3" /> {m.tag}
                  </div>
                )}
                <div className={`mt-1 text-[10px] ${m.role === "out" ? "text-white/70" : "text-muted-foreground"}`}>
                  {m.time}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="hairline my-4" />

        {/* Composer mock */}
        <div className="flex items-center gap-2 rounded-full bg-white/[0.04] border border-white/[0.06] px-4 py-2.5">
          <span className="text-xs text-muted-foreground flex-1">
            {es ? "Escribe un mensaje..." : "Type a message..."}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-primary/80 font-semibold">AI</span>
        </div>
      </div>
    </div>
  );
};

export default HeroChatPreview;
