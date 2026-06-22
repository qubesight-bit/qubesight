import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Mic, MessageSquare } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const Waveform = () => {
  return (
    <div className="flex items-end justify-center gap-[4px] h-10">
      {Array.from({ length: 28 }).map((_, i) => (
        <motion.span
          key={i}
          className="w-[3px] rounded-full bg-gradient-to-t from-primary to-[hsl(255,70%,72%)]"
          animate={{
            height: [6, 22 + Math.random() * 18, 10, 28 + Math.random() * 14, 14, 6],
          }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.05,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const CallTimer = () => {
  const [seconds, setSeconds] = useState(12);
  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, []);
  const m = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return <span className="tabular-nums">{m}:{s}</span>;
};

const HeroChatPreview = () => {
  const { language } = useTranslation();
  const es = language === "es";

  return (
    <div className="bezel-shell">
      <div className="bezel-inner p-6 sm:p-8 text-center">
        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 border border-emerald-400/20 px-3.5 py-1.5 mb-6"
        >
          <span className="relative inline-flex h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-widest text-emerald-300">
            {es ? "Llamada en curso" : "On call"}
          </span>
        </motion.div>

        {/* Large avatar with pulse ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mx-auto mb-5 w-24 h-24"
        >
          {/* Outer pulse rings */}
          <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping" style={{ animationDuration: "2.5s" }} />
          <span className="absolute -inset-3 rounded-full bg-primary/10 animate-ping" style={{ animationDuration: "3s" }} />
          {/* Avatar */}
          <div className="relative h-24 w-24 rounded-full bg-gradient-to-br from-[hsl(249,65%,56%)] to-[hsl(258,70%,62%)] grid place-items-center text-3xl font-bold text-white shadow-[0_0_40px_-8px_hsl(249,70%,50%,0.5)]">
            <Phone className="h-8 w-8" strokeWidth={1.5} />
          </div>
        </motion.div>

        {/* Caller name */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-1"
        >
          <div className="text-xl font-semibold text-foreground tracking-tight">
            QubeSight AI
          </div>
        </motion.div>

        {/* Timer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="text-sm text-muted-foreground mb-6"
        >
          <CallTimer />
        </motion.div>

        {/* Big waveform */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6"
        >
          <Waveform />
        </motion.div>

        {/* Live interpretation tag */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 rounded-xl bg-white/[0.03] border border-white/[0.06] px-4 py-2.5">
            <Mic className="h-4 w-4 text-primary" strokeWidth={1.5} />
            <span className="text-xs text-muted-foreground">
              {es
                ? "Interpretación en vivo · Español ↔ English"
                : "Live interpretation · Spanish ↔ English"}
            </span>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="hairline my-5" />

        {/* Call transcript bubbles */}
        <div className="flex flex-col gap-3 text-left">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bubble-in rounded-2xl rounded-bl-md px-3.5 py-2.5 text-[13px] leading-snug max-w-[85%]"
          >
            {es
              ? "Hola, ¿cuánto cuesta una limpieza dental?"
              : "Hi, how much is a dental cleaning?"}
            <div className="mt-1 text-[10px] text-muted-foreground">09:41</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="self-end bubble-out rounded-2xl rounded-br-md px-3.5 py-2.5 text-[13px] leading-snug max-w-[85%]"
          >
            {es
              ? "¡Claro! La limpieza es $80. ¿Te agendo para mañana a las 10am?"
              : "Sure! A cleaning is $80. Shall I book you for tomorrow at 10am?"}
            <div className="mt-1 text-[10px] text-white/70">09:41</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0 }}
            className="self-end bubble-out rounded-2xl rounded-br-md px-3.5 py-2.5 text-[13px] leading-snug max-w-[85%]"
          >
            {es
              ? "Listo. Te envío la cotización por SMS ahora mismo."
              : "Done. I'm sending the quote via SMS right now."}
            <div className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-semibold tracking-wide">
              <MessageSquare className="h-3 w-3" /> {es ? "SMS enviado" : "SMS sent"}
            </div>
            <div className="mt-1 text-[10px] text-white/70">09:42</div>
          </motion.div>
        </div>

        {/* Call action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-6 flex items-center justify-center gap-5"
        >
          <div className="flex flex-col items-center gap-1.5">
            <div className="h-12 w-12 rounded-full bg-white/[0.06] border border-white/[0.08] grid place-items-center text-muted-foreground">
              <Mic className="h-5 w-5" strokeWidth={1.5} />
            </div>
            <span className="text-[10px] text-muted-foreground">{es ? "Silenciar" : "Mute"}</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <div className="h-14 w-14 rounded-full bg-red-500/90 grid place-items-center text-white shadow-[0_8px_24px_-6px_rgba(239,68,68,0.5)]">
              <Phone className="h-6 w-6 rotate-[135deg]" strokeWidth={1.5} />
            </div>
            <span className="text-[10px] text-muted-foreground">{es ? "Colgar" : "End"}</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <div className="h-12 w-12 rounded-full bg-white/[0.06] border border-white/[0.08] grid place-items-center text-muted-foreground">
              <MessageSquare className="h-5 w-5" strokeWidth={1.5} />
            </div>
            <span className="text-[10px] text-muted-foreground">SMS</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroChatPreview;
