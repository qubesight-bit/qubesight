import { motion } from "framer-motion";
import { Check, Phone, MessageSquare, Globe } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const Waveform = () => {
  return (
    <div className="flex items-end gap-[3px] h-5">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <motion.span
          key={i}
          className="w-[3px] rounded-full bg-primary"
          animate={{
            height: [8, 18, 10, 20, 12, 8],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.12,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const HeroChatPreview = () => {
  const { language } = useTranslation();
  const es = language === "es";

  const messages = [
    {
      role: "in" as const,
      text: es
        ? "Hola, ¿cuánto cuesta una limpieza dental?"
        : "Hi, how much is a dental cleaning?",
      time: "09:41",
    },
    {
      role: "out" as const,
      text: es
        ? "¡Claro! La limpieza dental es $80. ¿Te agendo para mañana a las 10am?"
        : "Sure! A dental cleaning is $80. Shall I book you for tomorrow at 10am?",
      time: "09:41",
    },
    {
      role: "in" as const,
      text: es ? "Sí, perfecto." : "Yes, perfect.",
      time: "09:42",
    },
    {
      role: "out" as const,
      text: es
        ? "Listo. Te envío la cotización y confirmación por SMS ahora mismo."
        : "Done. I'm sending the quote and confirmation via SMS right now.",
      time: "09:42",
      tag: es ? "SMS enviado" : "SMS sent",
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
                {es ? "En llamada · Respuesta < 2s" : "On call · Reply < 2s"}
              </div>
            </div>
          </div>
          <div className="flex gap-1">
            <span className="h-2 w-2 rounded-full bg-white/10" />
            <span className="h-2 w-2 rounded-full bg-white/10" />
            <span className="h-2 w-2 rounded-full bg-white/10" />
          </div>
        </div>

        {/* Live call waveform strip */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4 flex items-center gap-3 rounded-xl bg-white/[0.03] border border-white/[0.06] px-3.5 py-2.5"
        >
          <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-primary/15 text-primary">
            <Phone className="h-4 w-4" strokeWidth={1.5} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-semibold text-foreground leading-tight">
              {es ? "Llamada entrante atendida" : "Incoming call answered"}
            </div>
            <div className="text-[10px] text-muted-foreground mt-0.5 leading-tight">
              {es
                ? "Interpretación en vivo · Español ↔ English"
                : "Live interpretation · Spanish ↔ English"}
            </div>
          </div>
          <Waveform />
        </motion.div>

        <div className="hairline my-4" />

        {/* Conversation */}
        <div className="flex flex-col gap-2.5">
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.18 }}
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
                    <MessageSquare className="h-3 w-3" /> {m.tag}
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
            {es ? "Escribe o habla..." : "Type or speak..."}
          </span>
          <span className="flex items-center gap-1 text-[10px] uppercase tracking-widest text-primary/80 font-semibold">
            <Globe className="h-3 w-3" />
            AI
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroChatPreview;
