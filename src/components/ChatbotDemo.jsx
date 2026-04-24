import { useState, useRef, useEffect } from "react";

// ─── NICHE CONFIGURATIONS ────────────────────────────────────────────────────
const NICHES = {
  restaurante: {
    label: "Restaurante",
    emoji: "🍽️",
    color: "#C0392B",
    bgLight: "#FDF2F0",
    bizName: "La Cocina Tica",
    flows: {
      menu: {
        triggers: ["hola", "menu", "menú", "inicio", "catalogo", "catálogo", "start", "hi", "buenas"],
        response: `👋 ¡Bienvenido a La Cocina Tica! 🍽️\n\n📋 MENÚ DEL DÍA\n1️⃣ Casado con pollo — ₡4,000\n2️⃣ Casado con carne — ₡4,500\n3️⃣ Casado vegetariano — ₡3,500\n4️⃣ Arroz con pollo — ₡4,000\n5️⃣ Sopa del día — ₡2,500\n6️⃣ Gallo pinto + huevos — ₡2,500\n7️⃣ Empanadas (3 und) — ₡2,000\n8️⃣ Refresco natural — ₡1,000\n\n✍️ Escribe el número del platillo.`,
      },
      producto: {
        triggers: ["1", "2", "3", "4", "5", "6", "7", "8"],
        response: (msg) => {
          const items = {
            "1": { nombre: "Casado con pollo", precio: "₡4,000" },
            "2": { nombre: "Casado con carne", precio: "₡4,500" },
            "3": { nombre: "Casado vegetariano", precio: "₡3,500" },
            "4": { nombre: "Arroz con pollo", precio: "₡4,000" },
            "5": { nombre: "Sopa del día", precio: "₡2,500" },
            "6": { nombre: "Gallo pinto + huevos", precio: "₡2,500" },
            "7": { nombre: "Empanadas (3 und)", precio: "₡2,000" },
            "8": { nombre: "Refresco natural", precio: "₡1,000" },
          };
          const p = items[msg.trim()];
          if (!p) return null;
          return `✅ Seleccionaste: *${p.nombre}* — ${p.precio}\n\n¿Cuántas unidades deseas?`;
        },
      },
      promo: {
        triggers: ["promo", "descuento", "oferta", "promocion", "promoción"],
        response: `🎁 PROMOCIÓN DEL DÍA\n\nCupón: *TICA10*\n10% de descuento en tu pedido.\n\nEscribe "menú" para ver los platillos.`,
      },
      horario: {
        triggers: ["horario", "hora", "cuando", "cuándo", "abierto", "abren", "cierran"],
        response: `🕐 HORARIO\n\nLun–Vie: 7am – 8pm\nSáb–Dom: 8am – 6pm\n\nEscribe "menú" para ordenar.`,
      },
      ubicacion: {
        triggers: ["donde", "dónde", "ubicacion", "ubicación", "direccion", "dirección"],
        response: `📍 UBICACIÓN\n\nCurridabat, San José, 200m norte del parque.\n\nEscribe "menú" para ordenar a domicilio.`,
      },
      asesor: {
        triggers: ["asesor", "humano", "persona", "hablar", "ayuda", "soporte"],
        response: `👨‍💼 Un asesor te atenderá pronto.\n\nHorario: 7am – 8pm\nTambién puedes llamarnos al 8888-0000.`,
      },
    },
    defaultResponse: `No entendí tu mensaje. 😊\n\nEscribe *"menú"* para ver platillos o *"promo"* para descuentos.`,
    autoWelcome: `👋 ¡Hola! Soy el asistente de *La Cocina Tica* 🍽️\n\nEscribe *"menú"* para ver nuestros platillos del día.`,
  },

  salon: {
    label: "Salón de Belleza",
    emoji: "💇",
    color: "#8E44AD",
    bgLight: "#F9F0FF",
    bizName: "Salón Glam",
    flows: {
      menu: {
        triggers: ["hola", "menu", "menú", "servicios", "catalogo", "catálogo", "inicio", "hi", "buenas"],
        response: `👋 ¡Bienvenida a Salón Glam! 💇\n\n📋 SERVICIOS\n1️⃣ Corte de cabello — ₡8,000\n2️⃣ Tinte completo — ₡25,000\n3️⃣ Mechas / balayage — ₡35,000\n4️⃣ Alisado keratina — ₡45,000\n5️⃣ Manicure — ₡6,000\n6️⃣ Pedicure — ₡8,000\n7️⃣ Manicure + Pedicure — ₡13,000\n8️⃣ Maquillaje profesional — ₡20,000\n\n✍️ Escribe el número del servicio.`,
      },
      producto: {
        triggers: ["1", "2", "3", "4", "5", "6", "7", "8"],
        response: (msg) => {
          const items = {
            "1": "Corte de cabello — ₡8,000",
            "2": "Tinte completo — ₡25,000",
            "3": "Mechas / balayage — ₡35,000",
            "4": "Alisado keratina — ₡45,000",
            "5": "Manicure — ₡6,000",
            "6": "Pedicure — ₡8,000",
            "7": "Manicure + Pedicure — ₡13,000",
            "8": "Maquillaje profesional — ₡20,000",
          };
          const p = items[msg.trim()];
          if (!p) return null;
          return `✅ Servicio: *${p}*\n\nEscribe *"cita"* para agendar o *"asesor"* para más info.`;
        },
      },
      cita: {
        triggers: ["cita", "agendar", "reservar", "turno", "appointment"],
        response: `📅 AGENDAR CITA\n\n⏰ Horario: Lun–Sáb 8am – 7pm\n📞 WhatsApp: 8777-1234\n\nO escribe *"asesor"* para que te atendamos aquí.`,
      },
      promo: {
        triggers: ["promo", "descuento", "oferta", "promocion", "promoción"],
        response: `🎁 PROMO DEL MES\n\nCupón: *BELLA10*\n10% de descuento en cualquier servicio.\n\nEscribe el número del servicio para más info.`,
      },
      asesor: {
        triggers: ["asesor", "humano", "persona", "hablar", "ayuda"],
        response: `👩‍💼 Una estilista te atenderá pronto.\n\nHorario: Lun–Sáb 8am – 7pm\nWhatsApp: 8777-1234`,
      },
    },
    defaultResponse: `No entendí tu mensaje. 😊\n\nEscribe *"menú"* para ver servicios o *"cita"* para agendar.`,
    autoWelcome: `👋 ¡Hola! Soy la asistente de *Salón Glam* 💇\n\nEscribe *"menú"* para ver nuestros servicios y precios.`,
  },

  dental: {
    label: "Clínica Dental",
    emoji: "🦷",
    color: "#2980B9",
    bgLight: "#EBF5FB",
    bizName: "DentalCare CR",
    flows: {
      menu: {
        triggers: ["hola", "menu", "menú", "servicios", "tratamientos", "inicio", "hi", "buenas"],
        response: `👋 ¡Bienvenido a DentalCare CR! 🦷\n\n📋 SERVICIOS\n1️⃣ Consulta general — ₡15,000\n2️⃣ Limpieza dental — ₡20,000\n3️⃣ Blanqueamiento — ₡60,000\n4️⃣ Extracción simple — ₡25,000\n5️⃣ Empaste (resina) — ₡30,000\n6️⃣ Radiografía — ₡12,000\n7️⃣ Ortodoncia (consulta) — Gratis\n8️⃣ Emergencia dental — ₡35,000\n\n✍️ Escribe el número o tu consulta.`,
      },
      producto: {
        triggers: ["1", "2", "3", "4", "5", "6", "7", "8"],
        response: (msg) => {
          const items = {
            "1": "Consulta general — ₡15,000",
            "2": "Limpieza dental — ₡20,000",
            "3": "Blanqueamiento — ₡60,000",
            "4": "Extracción simple — ₡25,000",
            "5": "Empaste (resina) — ₡30,000",
            "6": "Radiografía — ₡12,000",
            "7": "Ortodoncia — consulta gratuita",
            "8": "Emergencia dental — ₡35,000",
          };
          const p = items[msg.trim()];
          if (!p) return null;
          return `✅ Servicio: *${p}*\n\nEscribe *"cita"* para agendar.\n📞 También: 2222-0000\n⏰ Lun–Vie 8am – 6pm`;
        },
      },
      cita: {
        triggers: ["cita", "agendar", "reservar", "turno", "consulta"],
        response: `📅 AGENDAR CITA\n\nIndícanos:\n• Tu nombre\n• Servicio que necesitas\n• Día y hora preferida\n\n📞 2222-0000\n⏰ Lun–Vie 8am – 6pm`,
      },
      promo: {
        triggers: ["promo", "descuento", "oferta", "promocion", "promoción"],
        response: `🎁 PROMOCIÓN\n\nConsulta + Limpieza: *₡30,000* (ahorra ₡5,000)\nVigencia: este mes.\n\nEscribe *"cita"* para aprovecharla.`,
      },
      emergencia: {
        triggers: ["emergencia", "dolor", "urgente", "urgencia", "duele"],
        response: `🚨 EMERGENCIA DENTAL\n\nTe atendemos hoy mismo.\n📞 Llámanos: 2222-0000\n\nHorario emergencias: 7am – 8pm\nTambién sábados.`,
      },
      asesor: {
        triggers: ["asesor", "humano", "doctor", "persona", "hablar", "ayuda"],
        response: `👨‍⚕️ Nuestro equipo te contactará.\n\n⏰ Lun–Vie 8am – 6pm\n📞 2222-0000`,
      },
    },
    defaultResponse: `No entendí tu mensaje. 😊\n\nEscribe *"menú"* para ver tratamientos o *"cita"* para agendar.`,
    autoWelcome: `👋 ¡Hola! Soy la asistente de *DentalCare CR* 🦷\n\nEscribe *"menú"* para ver servicios y precios.`,
  },

  gym: {
    label: "Gimnasio",
    emoji: "💪",
    color: "#E67E22",
    bgLight: "#FEF9F0",
    bizName: "FitZone CR",
    flows: {
      menu: {
        triggers: ["hola", "menu", "menú", "membresias", "membresías", "precios", "inicio", "hi", "buenas"],
        response: `👋 ¡Bienvenido a FitZone CR! 💪\n\n📋 MEMBRESÍAS Y SERVICIOS\n1️⃣ Mensualidad básica — ₡15,000\n2️⃣ Mensualidad premium — ₡25,000\n3️⃣ Plan trimestral — ₡40,000\n4️⃣ Plan semestral — ₡70,000\n5️⃣ Clase de spinning — ₡4,000\n6️⃣ Clase de yoga — ₡4,000\n7️⃣ Entrenamiento personal — ₡12,000\n8️⃣ Día de visita — ₡2,500\n\n✍️ Escribe el número que te interesa.`,
      },
      producto: {
        triggers: ["1", "2", "3", "4", "5", "6", "7", "8"],
        response: (msg) => {
          const items = {
            "1": "Mensualidad básica — ₡15,000",
            "2": "Mensualidad premium — ₡25,000",
            "3": "Plan trimestral — ₡40,000",
            "4": "Plan semestral — ₡70,000",
            "5": "Clase de spinning — ₡4,000",
            "6": "Clase de yoga — ₡4,000",
            "7": "Entrenamiento personal — ₡12,000",
            "8": "Día de visita — ₡2,500",
          };
          const p = items[msg.trim()];
          if (!p) return null;
          return `🔥 Seleccionaste: *${p}*\n\nEscribe *"inscribir"* para registrarte o *"asesor"* para más info.`;
        },
      },
      inscribir: {
        triggers: ["inscribir", "inscripcion", "inscripción", "registrar", "unirme", "empezar"],
        response: `📝 INSCRIPCIÓN\n\n📍 Curridabat, San José\n📞 WhatsApp: 8555-2000\n⏰ Lun–Sáb 5am – 10pm\n\n🎉 ¡El primer día es gratis!`,
      },
      promo: {
        triggers: ["promo", "descuento", "oferta", "promocion", "promoción"],
        response: `🎁 PROMO DEL MES\n\nCupón: *GYM15*\n15% en tu primera mensualidad.\n\nEscribe "menú" para elegir tu plan.`,
      },
      horario: {
        triggers: ["horario", "hora", "cuando", "cuándo", "abierto", "abren"],
        response: `🕐 HORARIO\n\nLun–Vie: 5am – 10pm\nSábado: 6am – 8pm\nDomingo: 7am – 2pm\n\n¡Te esperamos! 💪`,
      },
      asesor: {
        triggers: ["asesor", "entrenador", "coach", "persona", "hablar", "ayuda"],
        response: `👨‍💼 Un entrenador te contactará pronto.\n\n⏰ Lun–Sáb 5am – 10pm\n📞 WhatsApp: 8555-2000`,
      },
    },
    defaultResponse: `No entendí tu mensaje. 💪\n\nEscribe *"menú"* para ver planes o *"promo"* para descuentos.`,
    autoWelcome: `👋 ¡Hola! Soy el asistente de *FitZone CR* 💪\n\nEscribe *"menú"* para ver membresías y precios.`,
  },

  inmobiliaria: {
    label: "Inmobiliaria",
    emoji: "🏠",
    color: "#27AE60",
    bgLight: "#EAFAF1",
    bizName: "PropCR",
    flows: {
      menu: {
        triggers: ["hola", "menu", "menú", "propiedades", "inicio", "hi", "buenas", "ayuda"],
        response: `👋 ¡Bienvenido a PropCR! 🏠\n\n📋 ¿EN QUÉ TE AYUDAMOS?\n1️⃣ Propiedades en venta\n2️⃣ Propiedades en alquiler\n3️⃣ Agendar visita\n4️⃣ Avalúo de mi propiedad\n5️⃣ Asesoría de crédito\n6️⃣ Publicar mi propiedad\n7️⃣ Hablar con un asesor\n\n✍️ Escribe el número de la opción.`,
      },
      producto: {
        triggers: ["1", "2", "3", "4", "5", "6", "7"],
        response: (msg) => {
          const items = {
            "1": `🏘️ PROPIEDADES EN VENTA\n\nMás de 50 opciones en San José, Heredia y Alajuela.\n\nEscribe *"asesor"* para recibir el catálogo personalizado.`,
            "2": `🏡 PROPIEDADES EN ALQUILER\n\nApartamentos desde ₡250,000/mes.\nCasas desde ₡400,000/mes.\n\nEscribe *"asesor"* para ver opciones.`,
            "3": `📅 AGENDAR VISITA\n\nIndícanos zona y tipo de propiedad.\n📞 También: 2233-4455`,
            "4": `📊 AVALÚO GRATUITO\n\nEsta semana: avalúo sin costo.\nEscribe *"asesor"* y te contactamos hoy.`,
            "5": `💳 ASESORÍA DE CRÉDITO\n\nTe ayudamos con crédito hipotecario.\nEscribe *"asesor"* para iniciar.`,
            "6": `📣 PUBLICAR PROPIEDAD\n\n30 días gratis.\nEscribe *"asesor"* para empezar.`,
            "7": `👨‍💼 Un asesor te contactará.\n\n⏰ Lun–Sáb 8am – 6pm\n📞 2233-4455`,
          };
          return items[msg.trim()] || null;
        },
      },
      venta: {
        triggers: ["venta", "comprar", "compra", "casa", "apartamento"],
        response: `🏘️ PROPIEDADES EN VENTA\n\nMás de 50 opciones disponibles.\n\nEscribe *"asesor"* para recibir el catálogo o llama al 📞 2233-4455.`,
      },
      alquiler: {
        triggers: ["alquiler", "alquilar", "arrendar", "renta", "rentar"],
        response: `🏡 PROPIEDADES EN ALQUILER\n\nApartamentos desde ₡250,000/mes.\nCasas desde ₡400,000/mes.\n\nEscribe *"asesor"* para ver opciones.`,
      },
      promo: {
        triggers: ["promo", "gratis", "oferta", "avaluo", "avalúo"],
        response: `🎁 AVALÚO GRATUITO\n\nEsta semana valoramos tu propiedad sin costo.\nEscribe *"asesor"* y te contactamos hoy.`,
      },
      asesor: {
        triggers: ["asesor", "agente", "persona", "hablar", "contacto", "llamar"],
        response: `👨‍💼 Un asesor te contactará pronto.\n\n⏰ Lun–Sáb 8am – 6pm\n📞 2233-4455\n✉️ info@propcr.com`,
      },
    },
    defaultResponse: `No entendí tu mensaje. 🏠\n\nEscribe *"menú"* para ver opciones o *"asesor"* para hablar con alguien.`,
    autoWelcome: `👋 ¡Hola! Soy la asistente de *PropCR* 🏠\n\nEscribe *"menú"* para explorar propiedades y servicios.`,
  },
};

const QUICK_REPLIES = {
  restaurante: ["Menú", "Promo", "Horario", "Dónde están", "Asesor"],
  salon:       ["Menú", "Cita", "Promo", "Asesor"],
  dental:      ["Menú", "Cita", "Emergencia", "Promo", "Asesor"],
  gym:         ["Menú", "Promo", "Horario", "Inscribir", "Asesor"],
  inmobiliaria:["Menú", "Venta", "Alquiler", "Avalúo", "Asesor"],
};

function getResponse(nicheKey, message) {
  const niche = NICHES[nicheKey];
  const msg = message.toLowerCase().trim();
  for (const [, flow] of Object.entries(niche.flows)) {
    if (flow.triggers.some((t) => msg === t || msg.includes(t))) {
      if (typeof flow.response === "function") {
        const result = flow.response(msg);
        if (result) return result;
      } else {
        return flow.response;
      }
    }
  }
  return niche.defaultResponse;
}

function formatMessage(text) {
  const parts = text.split(/(\*[^*]+\*)/g);
  return parts.map((part, i) =>
    part.startsWith("*") && part.endsWith("*")
      ? <strong key={i}>{part.slice(1, -1)}</strong>
      : part
  );
}

function Bubble({ msg, color }) {
  const isBot = msg.role === "bot";
  return (
    <div style={{ display: "flex", justifyContent: isBot ? "flex-start" : "flex-end", marginBottom: 8 }}>
      {isBot && (
        <div style={{
          width: 28, height: 28, borderRadius: "50%", background: color, color: "#fff",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 13, fontWeight: 700, marginRight: 8, flexShrink: 0, alignSelf: "flex-end",
        }}>Q</div>
      )}
      <div style={{
        maxWidth: "78%", background: isBot ? "#fff" : color,
        color: isBot ? "#1a1a1a" : "#fff",
        borderRadius: isBot ? "4px 16px 16px 16px" : "16px 4px 16px 16px",
        padding: "10px 14px", fontSize: 13.5, lineHeight: 1.6, whiteSpace: "pre-wrap",
        boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
        border: isBot ? "1px solid #f0f0f0" : "none",
      }}>
        {formatMessage(msg.text)}
        <div style={{ fontSize: 10, opacity: 0.5, marginTop: 4, textAlign: "right" }}>{msg.time}</div>
      </div>
    </div>
  );
}

function TypingIndicator({ color }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
      <div style={{
        width: 28, height: 28, borderRadius: "50%", background: color,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 13, fontWeight: 700, color: "#fff", flexShrink: 0,
      }}>Q</div>
      <div style={{
        background: "#fff", border: "1px solid #f0f0f0",
        borderRadius: "4px 16px 16px 16px",
        padding: "12px 16px", display: "flex", gap: 4,
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
      }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{
            width: 6, height: 6, borderRadius: "50%", background: color, opacity: 0.6,
            animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
          }} />
        ))}
      </div>
    </div>
  );
}

function ChatWidget({ nicheKey }) {
  const niche = NICHES[nicheKey];
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [open, setOpen] = useState(false);
  const [unread, setUnread] = useState(1);
  const bottomRef = useRef(null);
  const hasOpened = useRef(false);

  const now = () =>
    new Date().toLocaleTimeString("es-CR", { hour: "2-digit", minute: "2-digit" });

  useEffect(() => {
    if (bottomRef.current) bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    if (open && !hasOpened.current) {
      hasOpened.current = true;
      setUnread(0);
      setTimeout(() => {
        setTyping(true);
        setTimeout(() => {
          setTyping(false);
          setMessages([{ role: "bot", text: niche.autoWelcome, time: now() }]);
        }, 1200);
      }, 400);
    }
    if (open) setUnread(0);
  }, [open]);

  const send = (text) => {
    const msg = (text || input).trim();
    if (!msg) return;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: msg, time: now() }]);
    setTyping(true);
    setTimeout(() => {
      const reply = getResponse(nicheKey, msg);
      setTyping(false);
      setMessages((prev) => [...prev, { role: "bot", text: reply, time: now() }]);
    }, 900 + Math.random() * 600);
  };

  return (
    <>
      <style>{`
        @keyframes bounce {
          0%,60%,100%{transform:translateY(0)}
          30%{transform:translateY(-5px)}
        }
        @keyframes popIn {
          from{opacity:0;transform:scale(0.9) translateY(10px)}
          to{opacity:1;transform:scale(1) translateY(0)}
        }
      `}</style>

      <div
        onClick={() => setOpen((v) => !v)}
        style={{
          position: "fixed", bottom: 24, right: 24, zIndex: 9999,
          width: 56, height: 56, borderRadius: "50%",
          background: niche.color, color: "#fff",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 24, cursor: "pointer",
          boxShadow: "0 4px 16px rgba(0,0,0,0.22)",
          transition: "transform 0.2s",
        }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.08)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
      >
        {open ? "✕" : niche.emoji}
        {!open && unread > 0 && (
          <div style={{
            position: "absolute", top: -3, right: -3,
            background: "#E74C3C", color: "#fff",
            width: 18, height: 18, borderRadius: "50%",
            fontSize: 10, fontWeight: 700,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>{unread}</div>
        )}
      </div>

      {open && (
        <div style={{
          position: "fixed", bottom: 92, right: 24, zIndex: 9998,
          width: 340, height: 520, borderRadius: 20,
          background: "#f5f5f5", display: "flex", flexDirection: "column",
          boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
          animation: "popIn 0.25s ease",
          overflow: "hidden",
          fontFamily: "'Segoe UI', system-ui, sans-serif",
        }}>
          <div style={{
            background: niche.color, color: "#fff",
            padding: "14px 16px", display: "flex", alignItems: "center", gap: 10,
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: "50%",
              background: "rgba(255,255,255,0.25)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 18,
            }}>{niche.emoji}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 14 }}>{niche.bizName}</div>
              <div style={{ fontSize: 11, opacity: 0.85 }}>
                <span style={{
                  display: "inline-block", width: 6, height: 6, borderRadius: "50%",
                  background: "#4ade80", marginRight: 4, verticalAlign: "middle",
                }} />
                En línea ahora
              </div>
            </div>
            <div onClick={() => setOpen(false)} style={{ cursor: "pointer", fontSize: 18, opacity: 0.8 }}>✕</div>
          </div>

          <div style={{
            flex: 1, overflowY: "auto", padding: "12px 12px 4px",
            background: niche.bgLight,
          }}>
            {messages.map((msg, i) => <Bubble key={i} msg={msg} color={niche.color} />)}
            {typing && <TypingIndicator color={niche.color} />}
            <div ref={bottomRef} />
          </div>

          {messages.length > 0 && !typing && (
            <div style={{
              padding: "6px 10px", background: niche.bgLight,
              display: "flex", gap: 6, flexWrap: "wrap",
              borderTop: "1px solid rgba(0,0,0,0.06)",
            }}>
              {QUICK_REPLIES[nicheKey].map((q) => (
                <button
                  key={q}
                  onClick={() => send(q.toLowerCase())}
                  style={{
                    background: "#fff", border: `1px solid ${niche.color}`,
                    color: niche.color, borderRadius: 20,
                    padding: "4px 12px", fontSize: 11.5,
                    cursor: "pointer", fontWeight: 500,
                  }}
                >{q}</button>
              ))}
            </div>
          )}

          <div style={{
            display: "flex", padding: "10px 12px",
            background: "#fff", borderTop: "1px solid #e8e8e8",
            gap: 8, alignItems: "center",
          }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Escribe tu mensaje..."
              style={{
                flex: 1, border: "1.5px solid #e0e0e0",
                borderRadius: 24, padding: "8px 14px",
                fontSize: 13.5, background: "#fafafa",
                outline: "none",
              }}
              onFocus={e => e.target.style.borderColor = niche.color}
              onBlur={e => e.target.style.borderColor = "#e0e0e0"}
            />
            <button
              onClick={() => send()}
              style={{
                width: 38, height: 38, borderRadius: "50%",
                background: niche.color, border: "none",
                color: "#fff", cursor: "pointer", fontSize: 16,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}
            >➤</button>
          </div>
        </div>
      )}
    </>
  );
}

// ─── EMBEDDED (INLINE) CHAT — full chat window rendered directly on page ──────
export function ChatEmbedded({ nicheKey }) {
  const niche = NICHES[nicheKey];
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef(null);
  const hasWelcomed = useRef(false);

  const now = () =>
    new Date().toLocaleTimeString("es-CR", { hour: "2-digit", minute: "2-digit" });

  useEffect(() => {
    if (bottomRef.current) bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  // Auto-welcome on mount
  useEffect(() => {
    if (hasWelcomed.current) return;
    hasWelcomed.current = true;
    const t1 = setTimeout(() => {
      setTyping(true);
      const t2 = setTimeout(() => {
        setTyping(false);
        setMessages([{ role: "bot", text: niche.autoWelcome, time: now() }]);
      }, 1200);
      return () => clearTimeout(t2);
    }, 400);
    return () => clearTimeout(t1);
  }, [niche.autoWelcome]);

  const send = (text) => {
    const msg = (text || input).trim();
    if (!msg) return;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: msg, time: now() }]);
    setTyping(true);
    setTimeout(() => {
      const reply = getResponse(nicheKey, msg);
      setTyping(false);
      setMessages((prev) => [...prev, { role: "bot", text: reply, time: now() }]);
    }, 900 + Math.random() * 600);
  };

  // Slightly darker shade of niche.color for gradient
  const darken = (hex, amt = 0.18) => {
    const h = hex.replace("#", "");
    const r = Math.max(0, Math.round(parseInt(h.slice(0, 2), 16) * (1 - amt)));
    const g = Math.max(0, Math.round(parseInt(h.slice(2, 4), 16) * (1 - amt)));
    const b = Math.max(0, Math.round(parseInt(h.slice(4, 6), 16) * (1 - amt)));
    return `rgb(${r},${g},${b})`;
  };
  const headerGradient = `linear-gradient(135deg, ${niche.color} 0%, ${darken(niche.color, 0.22)} 100%)`;

  return (
    <>
      <style>{`
        @keyframes bounce {
          0%,60%,100%{transform:translateY(0)}
          30%{transform:translateY(-5px)}
        }
        @keyframes qs-pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(74,222,128,0.55); }
          50% { box-shadow: 0 0 0 6px rgba(74,222,128,0); }
        }
        @keyframes qs-float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .qs-embedded-shell {
          width: 100%;
          max-width: 480px;
          height: 600px;
        }
        @media (min-width: 1280px) {
          .qs-embedded-shell {
            max-width: 560px;
            height: 700px;
          }
        }
        .qs-quick-btn {
          background: #fff;
          border-radius: 999px;
          padding: 7px 14px;
          font-size: 12.5px;
          cursor: pointer;
          font-weight: 600;
          transition: all .18s ease;
          box-shadow: 0 1px 2px rgba(0,0,0,0.04);
        }
        .qs-quick-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.10);
        }
        .qs-send-btn {
          transition: transform .15s ease, box-shadow .15s ease;
        }
        .qs-send-btn:hover {
          transform: scale(1.06);
        }
        .qs-send-btn:active {
          transform: scale(0.96);
        }
        .qs-input::placeholder { color: #9ca3af; }
      `}</style>

      <div style={{ position: "relative", width: "100%", display: "flex", justifyContent: "center" }}>
        {/* Glow halo */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: "-40px",
            background: `radial-gradient(60% 50% at 50% 40%, ${niche.color}55 0%, transparent 70%)`,
            filter: "blur(40px)",
            opacity: 0.7,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div
          className="qs-embedded-shell"
          style={{
            position: "relative",
            zIndex: 1,
            margin: "0 auto",
            borderRadius: 28,
            background: "#f5f5f7",
            display: "flex",
            flexDirection: "column",
            boxShadow:
              "0 30px 80px -20px rgba(0,0,0,0.55), 0 8px 24px -8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
            overflow: "hidden",
            fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
            border: "1px solid rgba(255,255,255,0.10)",
          }}
        >
          {/* Header */}
          <div
            style={{
              background: headerGradient,
              color: "#fff",
              padding: "18px 20px",
              display: "flex",
              alignItems: "center",
              gap: 14,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Subtle shine overlay */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "60%",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 100%)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "relative",
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.22)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
                border: "1.5px solid rgba(255,255,255,0.35)",
                animation: "qs-float 4s ease-in-out infinite",
              }}
            >
              {niche.emoji}
              <span
                style={{
                  position: "absolute",
                  bottom: 1,
                  right: 1,
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: "#4ade80",
                  border: "2px solid #fff",
                  animation: "qs-pulse 2s ease-out infinite",
                }}
              />
            </div>
            <div style={{ flex: 1, position: "relative" }}>
              <div style={{ fontWeight: 700, fontSize: 16, letterSpacing: "-0.01em" }}>
                {niche.bizName}
              </div>
              <div style={{ fontSize: 12.5, opacity: 0.92, marginTop: 2 }}>
                En línea ahora · Responde al instante
              </div>
            </div>
            <div
              style={{
                position: "relative",
                fontSize: 11,
                fontWeight: 600,
                padding: "5px 10px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.18)",
                border: "1px solid rgba(255,255,255,0.25)",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              Demo
            </div>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "18px 16px 8px",
              background: `linear-gradient(180deg, ${niche.bgLight} 0%, #ffffff 100%)`,
            }}
          >
            {messages.map((msg, i) => (
              <Bubble key={i} msg={msg} color={niche.color} />
            ))}
            {typing && <TypingIndicator color={niche.color} />}
            <div ref={bottomRef} />
          </div>

          {/* Quick replies */}
          {messages.length > 0 && !typing && (
            <div
              style={{
                padding: "10px 14px",
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(8px)",
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
                borderTop: "1px solid rgba(0,0,0,0.05)",
              }}
            >
              {QUICK_REPLIES[nicheKey].map((q) => (
                <button
                  key={q}
                  className="qs-quick-btn"
                  onClick={() => send(q.toLowerCase())}
                  style={{
                    border: `1.5px solid ${niche.color}`,
                    color: niche.color,
                  }}
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div
            style={{
              display: "flex",
              padding: "14px 16px",
              background: "#fff",
              borderTop: "1px solid #ececec",
              gap: 10,
              alignItems: "center",
            }}
          >
            <input
              className="qs-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Escribe tu mensaje..."
              style={{
                flex: 1,
                border: "1.5px solid #e5e7eb",
                borderRadius: 999,
                padding: "12px 18px",
                fontSize: 14,
                background: "#f9fafb",
                outline: "none",
                color: "#111827",
                transition: "border-color .15s ease, background .15s ease",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = niche.color;
                e.target.style.background = "#fff";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e5e7eb";
                e.target.style.background = "#f9fafb";
              }}
            />
            <button
              className="qs-send-btn"
              onClick={() => send()}
              style={{
                width: 46,
                height: 46,
                borderRadius: "50%",
                background: headerGradient,
                border: "none",
                color: "#fff",
                cursor: "pointer",
                fontSize: 18,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                boxShadow: `0 6px 18px -4px ${niche.color}88`,
              }}
              aria-label="Enviar"
            >
              ➤
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// Floating widget exports (kept intact)
export function ChatRestaurante()  { return <ChatWidget nicheKey="restaurante" />; }
export function ChatSalon()        { return <ChatWidget nicheKey="salon" />; }
export function ChatDental()       { return <ChatWidget nicheKey="dental" />; }
export function ChatGym()          { return <ChatWidget nicheKey="gym" />; }
export function ChatInmobiliaria() { return <ChatWidget nicheKey="inmobiliaria" />; }

export default ChatWidget;
