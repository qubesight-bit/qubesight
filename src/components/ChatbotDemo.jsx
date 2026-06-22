import { useState, useRef, useEffect } from "react";

// ─── NICHE CONFIGURATIONS ────────────────────────────────────────────────────
// Each niche has:
//  - bizName / color / emoji / bgLight
//  - services: list with id, name, price (used for menus, booking, quotes)
//  - bookingLabel: "cita" | "reserva" | "visita"
//  - faqs: array of {triggers, response}
//  - autoWelcome
const NICHES = {
  restaurante: {
    label: "Restaurante",
    emoji: "🍽️",
    color: "#C0392B",
    bgLight: "#FDF2F0",
    bizName: "La Cocina Tica",
    phone: "8888-0000",
    address: "Curridabat, San José · 200m norte del parque",
    bookingLabel: "reserva",
    services: [
      { id: "1", name: "Casado con pollo", price: "₡4,000" },
      { id: "2", name: "Casado con carne", price: "₡4,500" },
      { id: "3", name: "Casado vegetariano", price: "₡3,500" },
      { id: "4", name: "Arroz con pollo", price: "₡4,000" },
      { id: "5", name: "Sopa del día", price: "₡2,500" },
      { id: "6", name: "Gallo pinto + huevos", price: "₡2,500" },
      { id: "7", name: "Empanadas (3 und)", price: "₡2,000" },
      { id: "8", name: "Refresco natural", price: "₡1,000" },
    ],
    extraFaqs: [
      {
        triggers: ["alergia", "alergias", "gluten", "celiaco", "celíaco", "vegano", "vegetariano"],
        response: `🌱 OPCIONES ESPECIALES\n\n• Vegetariano: casado #3, sopa del día\n• Sin gluten: arroz con pollo, gallo pinto\n• Vegano bajo pedido (avisa al ordenar)\n\nSi tienes una alergia específica, indícamela y la marco en tu pedido.`,
      },
      {
        triggers: ["delivery", "domicilio", "envio", "envío", "entrega"],
        response: `🛵 DELIVERY\n\n• Zona: Curridabat, Sabanilla, San Pedro\n• Tiempo: 25–40 min\n• Envío: ₡1,500 (gratis sobre ₡10,000)\n• Pago: efectivo, SINPE, tarjeta\n\nEscribe *"pedir"* o el número del platillo para ordenar.`,
      },
      {
        triggers: ["pago", "tarjeta", "sinpe", "efectivo", "metodo", "método"],
        response: `💳 FORMAS DE PAGO\n\n• Efectivo (colones / USD)\n• SINPE Móvil · 8888-0000\n• Tarjeta (Visa / Mastercard)\n• Link de pago al WhatsApp\n\n¿Deseas que te envíe la *cotización por SMS*?`,
      },
    ],
  },

  salon: {
    label: "Salón de Belleza",
    emoji: "💇",
    color: "#8E44AD",
    bgLight: "#F9F0FF",
    bizName: "Salón Glam",
    phone: "8777-1234",
    address: "Escazú, San José · Plaza Itskatzú local 12",
    bookingLabel: "cita",
    services: [
      { id: "1", name: "Corte de cabello", price: "₡8,000" },
      { id: "2", name: "Tinte completo", price: "₡25,000" },
      { id: "3", name: "Mechas / balayage", price: "₡35,000" },
      { id: "4", name: "Alisado keratina", price: "₡45,000" },
      { id: "5", name: "Manicure", price: "₡6,000" },
      { id: "6", name: "Pedicure", price: "₡8,000" },
      { id: "7", name: "Manicure + Pedicure", price: "₡13,000" },
      { id: "8", name: "Maquillaje profesional", price: "₡20,000" },
    ],
    extraFaqs: [
      {
        triggers: ["duracion", "duración", "tiempo", "cuanto dura", "cuánto dura"],
        response: `⏱️ DURACIÓN APROXIMADA\n\n• Corte: 45 min\n• Tinte: 1h 30min\n• Mechas / balayage: 2h – 3h\n• Keratina: 2h\n• Mani + Pedi: 1h 15min\n\n¿Te agendo una *cita*?`,
      },
      {
        triggers: ["producto", "productos", "marca", "marcas"],
        response: `💎 USAMOS PRODUCTOS PROFESIONALES\n\n• L'Oréal Professionnel\n• Wella Koleston\n• OPI / CND para uñas\n• Keratina sin formol\n\nGarantizamos resultados o repetimos el servicio.`,
      },
      {
        triggers: ["parqueo", "parking", "estacionamiento"],
        response: `🅿️ PARQUEO\n\nGratis dentro de Plaza Itskatzú.\nValidamos tu ticket en recepción.`,
      },
    ],
  },

  dental: {
    label: "Clínica Dental",
    emoji: "🦷",
    color: "#2980B9",
    bgLight: "#EBF5FB",
    bizName: "DentalCare CR",
    phone: "2222-0000",
    address: "Sabana Sur, San José · Edificio Médico Torre A, piso 3",
    bookingLabel: "cita",
    services: [
      { id: "1", name: "Consulta general", price: "₡15,000" },
      { id: "2", name: "Limpieza dental", price: "₡20,000" },
      { id: "3", name: "Blanqueamiento", price: "₡60,000" },
      { id: "4", name: "Extracción simple", price: "₡25,000" },
      { id: "5", name: "Empaste (resina)", price: "₡30,000" },
      { id: "6", name: "Radiografía", price: "₡12,000" },
      { id: "7", name: "Ortodoncia (consulta)", price: "Gratis" },
      { id: "8", name: "Emergencia dental", price: "₡35,000" },
    ],
    extraFaqs: [
      {
        triggers: ["emergencia", "dolor", "urgente", "urgencia", "duele"],
        response: `🚨 EMERGENCIA DENTAL\n\nTe atendemos hoy mismo.\n📞 2222-0000 (24/7)\nO escribe *"agendar"* y reservo el siguiente cupo libre.\n\n¿Quieres que un *recepcionista IA te llame ya mismo*? Escribe *"llamada"*.`,
      },
      {
        triggers: ["seguro", "ins", "ccss", "aseguradora", "poliza", "póliza"],
        response: `🏥 SEGUROS QUE ACEPTAMOS\n\n• INS (Vida + Médico)\n• Assa\n• MAPFRE\n• Sagicor\n\nTramitamos el cobro directo. Indícanos tu aseguradora al agendar.`,
      },
      {
        triggers: ["financiamiento", "cuotas", "plan", "pagar a plazos"],
        response: `💳 FINANCIAMIENTO\n\n• Hasta 12 cuotas sin intereses con tarjeta\n• Plan interno para ortodoncia (24 meses)\n• Descuento del 5% pago al contado\n\nTe envío la *cotización por SMS* si me das tu número.`,
      },
    ],
  },

  gym: {
    label: "Gimnasio",
    emoji: "💪",
    color: "#E67E22",
    bgLight: "#FEF9F0",
    bizName: "FitZone CR",
    phone: "8555-2000",
    address: "Curridabat, San José · 100m sur de la Pops",
    bookingLabel: "visita",
    services: [
      { id: "1", name: "Mensualidad básica", price: "₡15,000" },
      { id: "2", name: "Mensualidad premium", price: "₡25,000" },
      { id: "3", name: "Plan trimestral", price: "₡40,000" },
      { id: "4", name: "Plan semestral", price: "₡70,000" },
      { id: "5", name: "Clase de spinning", price: "₡4,000" },
      { id: "6", name: "Clase de yoga", price: "₡4,000" },
      { id: "7", name: "Entrenamiento personal", price: "₡12,000" },
      { id: "8", name: "Día de visita", price: "₡2,500" },
    ],
    extraFaqs: [
      {
        triggers: ["clases", "horario clases", "spinning", "yoga", "crossfit", "zumba"],
        response: `🧘 CLASES GRUPALES\n\n• Spinning: Lun/Mié/Vie 6am, 6pm\n• Yoga: Mar/Jue 7am, 7pm\n• HIIT: Lun–Vie 5:30pm\n• Zumba: Sáb 9am\n\nIncluidas en el plan Premium. Reserva con *"agendar"*.`,
      },
      {
        triggers: ["congelar", "pausar", "vacaciones", "suspender"],
        response: `⏸️ CONGELAR MEMBRESÍA\n\nPuedes pausarla hasta 30 días al año sin costo (con aviso de 5 días).\n\nEscribe *"asesor"* para tramitarlo.`,
      },
      {
        triggers: ["entrenador", "personal trainer", "coach", "rutina"],
        response: `🏋️ ENTRENAMIENTO PERSONAL\n\n• Sesión individual: ₡12,000\n• Pack 8 sesiones: ₡80,000\n• Plan + nutrición: ₡100,000/mes\n\nIncluye evaluación inicial gratis. ¿Te agendo?`,
      },
    ],
  },

  inmobiliaria: {
    label: "Inmobiliaria",
    emoji: "🏠",
    color: "#27AE60",
    bgLight: "#EAFAF1",
    bizName: "PropCR",
    phone: "2233-4455",
    address: "Escazú, San José · Avenida Escazú, Torre 1 piso 5",
    bookingLabel: "visita",
    services: [
      { id: "1", name: "Apartamento 2 hab · Escazú", price: "$185,000" },
      { id: "2", name: "Casa 3 hab · Heredia", price: "$240,000" },
      { id: "3", name: "Penthouse · Rohrmoser", price: "$420,000" },
      { id: "4", name: "Lote 500m² · Alajuela", price: "$95,000" },
      { id: "5", name: "Alquiler apto Sabana", price: "$950/mes" },
      { id: "6", name: "Alquiler casa Curridabat", price: "$1,400/mes" },
      { id: "7", name: "Avalúo de propiedad", price: "Gratis" },
      { id: "8", name: "Asesoría hipotecaria", price: "Gratis" },
    ],
    extraFaqs: [
      {
        triggers: ["credito", "crédito", "hipoteca", "hipotecario", "banco", "prestamo", "préstamo"],
        response: `💳 ASESORÍA HIPOTECARIA\n\nTrabajamos con BAC, BCR, Davivienda, Promerica.\n\n• Pre-aprobación en 48h\n• Hasta 90% de financiamiento\n• Plazo hasta 30 años\n\nEscribe *"cotizar"* y te envío simulación por SMS.`,
      },
      {
        triggers: ["zonas", "ubicaciones", "donde", "dónde tienen"],
        response: `📍 ZONAS CON PROPIEDADES\n\n• Escazú · Santa Ana · Rohrmoser\n• Heredia · Belén · Cariari\n• Curridabat · Sabanilla\n• Alajuela · La Garita\n\n¿En qué zona buscas? Te envío opciones.`,
      },
      {
        triggers: ["extranjero", "expat", "residencia", "english", "ingles", "inglés"],
        response: `🌎 ATENCIÓN A EXTRANJEROS\n\nAtendemos en *español, inglés y portugués* — con *intérprete en vivo* por llamada si lo necesitas.\n\nAsesoría completa: residencia, escritura, due diligence.`,
      },
    ],
  },
};

// ─── UNIVERSAL CROSS-NICHE FLOWS (voice, SMS, interpretation, payment) ───────
const UNIVERSAL_FLOWS = [
  {
    key: "voz",
    triggers: [
      "llamada", "llamame", "llámame", "llamar", "voz", "voice", "call",
      "telefono", "teléfono", "recepcionista", "receptionist", "habla",
    ],
    response: (niche) =>
      `🎙️ RECEPCIONISTA IA POR VOZ\n\nNuestro asistente de voz puede llamarte ahora mismo y:\n\n• Contestar tus preguntas en tiempo real\n• Agendar tu ${niche.bookingLabel} en el calendario\n• Enviarte la *cotización por SMS* al terminar\n• Interpretar la llamada *español ↔ inglés* en vivo\n\n📞 Línea demo: ${niche.phone}\nO escribe *"agendar"* y te llamamos en menos de 1 minuto.`,
  },
  {
    key: "interprete",
    triggers: [
      "english", "ingles", "inglés", "interprete", "intérprete",
      "interpretacion", "interpretación", "traducir", "translate",
      "idioma", "language", "bilingue", "bilingüe",
    ],
    response: (niche) =>
      `🌐 INTERPRETACIÓN EN VIVO\n\nWe also speak English! 🇺🇸🇪🇸\n\nNuestro asistente IA traduce la llamada en tiempo real:\n• Español ↔ English ↔ Português\n• Latencia < 1 segundo\n• Sin operador humano de por medio\n\nEscribe *"llamada"* para probarlo o *"agendar"* y te contactamos en tu idioma.`,
  },
  {
    key: "cotizar",
    triggers: [
      "cotizar", "cotizacion", "cotización", "presupuesto", "precio total",
      "sms", "mensaje", "quote",
    ],
    response: (niche) => {
      const top = niche.services.slice(0, 3)
        .map((s) => `• ${s.name} — ${s.price}`).join("\n");
      return `📲 COTIZACIÓN POR SMS\n\nTe enviamos un resumen al instante a tu celular:\n\n${top}\n\nEscribe *"agendar"* y al final del flujo te llega el SMS con tu cotización personalizada y enlace de pago.`;
    },
  },
];

// ─── BOOKING STATE MACHINE ────────────────────────────────────────────────────
// Stages: idle → service → date → time → name → phone → done
const BOOKING_TRIGGERS = [
  "agendar", "reservar", "reserva", "cita", "turno", "visita",
  "appointment", "book", "pedir", "ordenar",
];

function isBookingTrigger(msg) {
  const m = msg.toLowerCase().trim();
  return BOOKING_TRIGGERS.some((t) => m === t || m.includes(t));
}

function bookingPrompt(stage, niche, data) {
  switch (stage) {
    case "service":
      return `📋 AGENDAR ${niche.bookingLabel.toUpperCase()}\n\n¿Qué servicio te interesa?\n\n${niche.services
        .map((s) => `${s.id}️⃣ ${s.name} — ${s.price}`)
        .join("\n")}\n\n✍️ Escribe el número.`;
    case "date":
      return `📅 Perfecto, *${data.service.name}*.\n\n¿Para qué día? (ej: *mañana*, *viernes*, *15/jun*)`;
    case "time":
      return `🕐 ¿A qué hora? (ej: *10am*, *3:30pm*, *en la tarde*)`;
    case "name":
      return `📝 Listo. ¿A nombre de quién agendo?`;
    case "phone":
      return `📱 Último paso — ¿a qué número te envío la *confirmación + cotización por SMS*?`;
    default:
      return null;
  }
}

function bookingConfirmation(niche, data) {
  return (
    `✅ ¡${data.name.split(" ")[0]}, ${niche.bookingLabel} confirmada!\n\n` +
    `🗓️ ${data.date} · ${data.time}\n` +
    `💼 ${data.service.name} — ${data.service.price}\n` +
    `📍 ${niche.address}\n\n` +
    `📲 *SMS enviado a ${data.phone}:*\n` +
    `_"${niche.bizName}: ${data.service.name} ${data.date} ${data.time}. ` +
    `Total ${data.service.price}. Pagar: pay.qubesight.lat/${data.name
      .toLowerCase()
      .replace(/\s+/g, "")
      .slice(0, 8)}. Responde CANCELAR para anular."_\n\n` +
    `🎙️ ¿Prefieres que un *recepcionista IA te llame* para confirmar por voz? Escribe *"llamada"*.`
  );
}

// ─── QUICK REPLIES ────────────────────────────────────────────────────────────
const QUICK_REPLIES = {
  restaurante: ["Menú", "Reservar", "🎙️ Llamada IA", "📲 Cotizar SMS", "🌐 English"],
  salon:       ["Servicios", "Agendar cita", "🎙️ Llamada IA", "📲 Cotizar SMS", "🌐 English"],
  dental:      ["Tratamientos", "Agendar cita", "Emergencia", "🎙️ Llamada IA", "📲 Cotizar SMS"],
  gym:         ["Membresías", "Agendar visita", "Clases", "🎙️ Llamada IA", "📲 Cotizar SMS"],
  inmobiliaria:["Propiedades", "Agendar visita", "Crédito", "🎙️ Llamada IA", "🌐 English"],
};

// ─── RESPONSE RESOLVER ────────────────────────────────────────────────────────
function buildMenu(niche) {
  return (
    `👋 ¡Bienvenido a *${niche.bizName}*! ${niche.emoji}\n\n` +
    `📋 ${niche.bookingLabel === "reserva" ? "MENÚ" : "SERVICIOS"}\n` +
    niche.services.map((s) => `${s.id}️⃣ ${s.name} — ${s.price}`).join("\n") +
    `\n\n✍️ Escribe el número, o di *"agendar"*, *"llamada"* o *"cotizar"*.`
  );
}

function getServiceByNumber(niche, msg) {
  const m = msg.trim();
  return niche.services.find((s) => s.id === m) || null;
}

function matchUniversal(msg, niche) {
  const m = msg.toLowerCase().trim();
  for (const flow of UNIVERSAL_FLOWS) {
    if (flow.triggers.some((t) => m === t || m.includes(t))) {
      return flow.response(niche);
    }
  }
  return null;
}

function matchFaq(msg, niche) {
  const m = msg.toLowerCase().trim();
  // menu
  if (["hola", "menu", "menú", "inicio", "start", "hi", "buenas", "servicios", "tratamientos", "membresias", "membresías", "propiedades", "catalogo", "catálogo"].some((t) => m === t || m.includes(t))) {
    return buildMenu(niche);
  }
  // promo
  if (["promo", "descuento", "oferta", "promocion", "promoción", "cupon", "cupón"].some((t) => m.includes(t))) {
    return `🎁 PROMO DEL MES\n\nCupón: *QUBE10*\n10% de descuento en tu primer ${niche.bookingLabel}.\nVigencia: este mes.\n\nEscribe *"agendar"* para aplicarla.`;
  }
  // horario
  if (["horario", "hora", "abren", "cierran", "abierto"].some((t) => m.includes(t))) {
    return `🕐 HORARIO\n\nLun–Vie: 8am – 7pm\nSáb: 8am – 4pm\nDom: cerrado\n\n🤖 Pero el *asistente IA está 24/7* por chat, voz y SMS.`;
  }
  // ubicacion
  if (["donde", "dónde", "ubicacion", "ubicación", "direccion", "dirección", "como llegar", "cómo llegar"].some((t) => m.includes(t))) {
    return `📍 UBICACIÓN\n\n${niche.address}\n\n📞 ${niche.phone}\n\n¿Te envío el pin de Google Maps por SMS? Escribe *"cotizar"* con tu número.`;
  }
  // asesor
  if (["asesor", "humano", "persona", "hablar con", "agente", "contactar", "llamame", "llámame"].some((t) => m.includes(t))) {
    return null; // handled separately by lead form
  }
  // niche-specific FAQs
  for (const faq of niche.extraFaqs || []) {
    if (faq.triggers.some((t) => m.includes(t))) return faq.response;
  }
  return null;
}

// Returns scripted reply if a strong match, otherwise null (fall back to AI)
function getScriptedReply(nicheKey, message) {
  const niche = NICHES[nicheKey];
  // service number
  const svc = getServiceByNumber(niche, message);
  if (svc) {
    return `✅ Seleccionaste: *${svc.name}* — ${svc.price}\n\n¿Qué prefieres?\n• Escribe *"agendar"* para reservar\n• *"cotizar"* para recibir SMS con el detalle\n• *"llamada"* para que el asistente IA te llame ahora`;
  }
  const universal = matchUniversal(message, niche);
  if (universal) return universal;
  const faq = matchFaq(message, niche);
  if (faq) return faq;
  return null;
}

function getDefaultResponse(niche) {
  return `No estoy seguro de haber entendido 😊\n\nPuedes:\n• Escribir *"menú"* para ver opciones\n• *"agendar"* para reservar tu ${niche.bookingLabel}\n• *"llamada"* para hablar con el recepcionista IA por voz\n• *"cotizar"* para recibir SMS con precios\n• *"english"* para cambiar a inglés con intérprete en vivo`;
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

// ─── EMBEDDED (INLINE) CHAT — full chat window rendered directly on page ─────
export function ChatEmbedded({ nicheKey }) {
  const niche = NICHES[nicheKey];
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [booking, setBooking] = useState({ stage: "idle", data: {} });
  const bottomRef = useRef(null);
  const hasWelcomed = useRef(false);

  const now = () =>
    new Date().toLocaleTimeString("es-CR", { hour: "2-digit", minute: "2-digit" });

  useEffect(() => {
    if (bottomRef.current) bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing, showLeadForm]);

  // Auto-welcome with capability intro
  useEffect(() => {
    if (hasWelcomed.current) return;
    hasWelcomed.current = true;
    const welcome =
      `👋 ¡Hola! Soy el asistente IA de *${niche.bizName}* ${niche.emoji}\n\n` +
      `Atiendo 24/7 por:\n` +
      `💬 Chat · 🎙️ Llamada de voz · 📲 SMS\n` +
      `🌐 Con interpretación en vivo *español ↔ english*\n\n` +
      `Puedo responder dudas, agendar tu ${niche.bookingLabel} y enviarte la cotización por SMS en segundos.\n\n` +
      `Escribe *"menú"* para empezar o prueba: *agendar*, *llamada*, *cotizar*.`;
    const t1 = setTimeout(() => {
      setTyping(true);
      const t2 = setTimeout(() => {
        setTyping(false);
        setMessages([{ role: "bot", text: welcome, time: now() }]);
      }, 1200);
      return () => clearTimeout(t2);
    }, 400);
    return () => clearTimeout(t1);
  }, [niche]);

  const HUMAN_TRIGGERS = ["asesor", "humano", "persona", "hablar con", "agente", "contactar"];
  const looksLikeHumanRequest = (msg) => {
    const m = msg.toLowerCase();
    return HUMAN_TRIGGERS.some((t) => m.includes(t));
  };

  const callAI = async (history, userMsg) => {
    try {
      const apiMessages = history
        .filter((m) => m.role === "user" || m.role === "bot")
        .map((m) => ({
          role: m.role === "bot" ? "assistant" : "user",
          content: m.text,
        }));
      apiMessages.push({ role: "user", content: userMsg });

      const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat-niche`;
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: apiMessages, nicheKey }),
      });
      if (!res.ok) {
        if (res.status === 429) return "⏳ Estoy recibiendo muchas consultas. Intenta en unos segundos.";
        if (res.status === 402) return "⚠️ Servicio de IA temporalmente no disponible. Escribe *menú* para ver opciones.";
        return null;
      }
      const data = await res.json();
      return data.reply || null;
    } catch (e) {
      console.error("AI fallback error:", e);
      return null;
    }
  };

  const botSay = (text, delay = 700) => {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { role: "bot", text, time: now() }]);
    }, delay + Math.random() * 400);
  };

  const advanceBooking = (userMsg) => {
    const { stage, data } = booking;

    if (stage === "service") {
      // accept number or natural mention
      const svc = getServiceByNumber(niche, userMsg) ||
        niche.services.find((s) => userMsg.toLowerCase().includes(s.name.toLowerCase().split(" ")[0]));
      if (!svc) {
        botSay(`Mmm, no encontré ese servicio 😊\n\n${niche.services.map((s) => `${s.id}️⃣ ${s.name}`).join("\n")}\n\nEscribe el número.`);
        return true;
      }
      const next = { stage: "date", data: { ...data, service: svc } };
      setBooking(next);
      botSay(bookingPrompt("date", niche, next.data));
      return true;
    }
    if (stage === "date") {
      const next = { stage: "time", data: { ...data, date: userMsg } };
      setBooking(next);
      botSay(bookingPrompt("time", niche, next.data));
      return true;
    }
    if (stage === "time") {
      const next = { stage: "name", data: { ...data, time: userMsg } };
      setBooking(next);
      botSay(bookingPrompt("name", niche, next.data));
      return true;
    }
    if (stage === "name") {
      const next = { stage: "phone", data: { ...data, name: userMsg } };
      setBooking(next);
      botSay(bookingPrompt("phone", niche, next.data));
      return true;
    }
    if (stage === "phone") {
      const phone = userMsg.replace(/[^\d+\s-]/g, "").trim() || userMsg;
      const finalData = { ...data, phone };
      setBooking({ stage: "idle", data: {} });
      botSay(bookingConfirmation(niche, finalData), 1100);
      return true;
    }
    return false;
  };

  const send = async (text) => {
    const msg = (text || input).trim();
    if (!msg) return;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: msg, time: now() }]);

    // 1) inside booking flow?
    if (booking.stage !== "idle") {
      advanceBooking(msg);
      return;
    }

    // 2) start booking?
    if (isBookingTrigger(msg)) {
      const next = { stage: "service", data: {} };
      setBooking(next);
      botSay(bookingPrompt("service", niche, next.data));
      return;
    }

    setTyping(true);
    const scripted = getScriptedReply(nicheKey, msg);
    const wantsHuman = looksLikeHumanRequest(msg);

    if (scripted && !wantsHuman) {
      setTimeout(() => {
        setTyping(false);
        setMessages((prev) => [...prev, { role: "bot", text: scripted, time: now() }]);
      }, 700 + Math.random() * 400);
      return;
    }

    if (wantsHuman) {
      setTimeout(() => {
        setTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            role: "bot",
            text: `¡Claro! Déjame tus datos y un asesor humano de *${niche.bizName}* te contactará por WhatsApp en minutos.\n\n💡 O escribe *"llamada"* para que el recepcionista IA te llame *ahora mismo* por voz.`,
            time: now(),
          },
        ]);
        setShowLeadForm(true);
      }, 800);
      return;
    }

    const aiReply = await callAI(messages, msg);
    setTyping(false);
    if (aiReply) {
      setMessages((prev) => [...prev, { role: "bot", text: aiReply, time: now() }]);
    } else {
      setMessages((prev) => [...prev, { role: "bot", text: getDefaultResponse(niche), time: now() }]);
    }
  };

  const submitLead = (name, phone) => {
    setShowLeadForm(false);
    setLeadSubmitted(true);
    setMessages((prev) => [
      ...prev,
      { role: "user", text: `📋 Soy ${name} · 📱 ${phone}`, time: now() },
      {
        role: "bot",
        text: `¡Listo, ${name.split(" ")[0]}! ✅ Te abriré WhatsApp para que un asesor humano te atienda directamente.`,
        time: now(),
      },
    ]);
    const text = encodeURIComponent(
      `Hola, soy ${name} (${phone}). Me interesa ${niche.bizName} (demo desde QubeSight).`
    );
    setTimeout(() => {
      window.open(`https://wa.me/50686425281?text=${text}`, "_blank", "noopener,noreferrer");
    }, 1200);
  };

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
        @keyframes bounce { 0%,60%,100%{transform:translateY(0)} 30%{transform:translateY(-5px)} }
        @keyframes qs-pulse { 0%,100% { box-shadow: 0 0 0 0 rgba(74,222,128,0.55); } 50% { box-shadow: 0 0 0 6px rgba(74,222,128,0); } }
        @keyframes qs-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
        .qs-embedded-shell { width: 100%; max-width: 480px; height: 640px; }
        @media (min-width: 1280px) { .qs-embedded-shell { max-width: 560px; height: 720px; } }
        .qs-quick-btn { background: #fff; border-radius: 999px; padding: 7px 14px; font-size: 12.5px; cursor: pointer; font-weight: 600; transition: all .18s ease; box-shadow: 0 1px 2px rgba(0,0,0,0.04); }
        .qs-quick-btn:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,0,0,0.10); }
        .qs-send-btn { transition: transform .15s ease, box-shadow .15s ease; }
        .qs-send-btn:hover { transform: scale(1.06); }
        .qs-send-btn:active { transform: scale(0.96); }
        .qs-input::placeholder { color: #9ca3af; }
      `}</style>

      <div style={{ position: "relative", width: "100%", display: "flex", justifyContent: "center" }}>
        <div aria-hidden style={{
          position: "absolute", inset: "-40px",
          background: `radial-gradient(60% 50% at 50% 40%, ${niche.color}55 0%, transparent 70%)`,
          filter: "blur(40px)", opacity: 0.7, pointerEvents: "none", zIndex: 0,
        }} />

        <div className="qs-embedded-shell" style={{
          position: "relative", zIndex: 1, margin: "0 auto", borderRadius: 28,
          background: "#f5f5f7", display: "flex", flexDirection: "column",
          boxShadow: "0 30px 80px -20px rgba(0,0,0,0.55), 0 8px 24px -8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
          overflow: "hidden", fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
          border: "1px solid rgba(255,255,255,0.10)",
        }}>
          {/* Header */}
          <div style={{
            background: headerGradient, color: "#fff", padding: "18px 20px",
            display: "flex", alignItems: "center", gap: 14, position: "relative", overflow: "hidden",
          }}>
            <div aria-hidden style={{
              position: "absolute", top: 0, left: 0, right: 0, height: "60%",
              background: "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 100%)",
              pointerEvents: "none",
            }} />
            <div style={{
              position: "relative", width: 48, height: 48, borderRadius: "50%",
              background: "rgba(255,255,255,0.22)", display: "flex", alignItems: "center",
              justifyContent: "center", fontSize: 22, border: "1.5px solid rgba(255,255,255,0.35)",
              animation: "qs-float 4s ease-in-out infinite",
            }}>
              {niche.emoji}
              <span style={{
                position: "absolute", bottom: 1, right: 1, width: 12, height: 12,
                borderRadius: "50%", background: "#4ade80", border: "2px solid #fff",
                animation: "qs-pulse 2s ease-out infinite",
              }} />
            </div>
            <div style={{ flex: 1, position: "relative" }}>
              <div style={{ fontWeight: 700, fontSize: 16, letterSpacing: "-0.01em" }}>{niche.bizName}</div>
              <div style={{ fontSize: 12, opacity: 0.92, marginTop: 2 }}>
                💬 Chat · 🎙️ Voz · 📲 SMS · 🌐 Bilingüe — 24/7
              </div>
            </div>
            <div style={{
              position: "relative", fontSize: 11, fontWeight: 600, padding: "5px 10px",
              borderRadius: 999, background: "rgba(255,255,255,0.18)",
              border: "1px solid rgba(255,255,255,0.25)", letterSpacing: "0.04em", textTransform: "uppercase",
            }}>Demo IA</div>
          </div>

          {/* Capability strip */}
          <div style={{
            display: "flex", gap: 6, padding: "8px 12px",
            background: "rgba(255,255,255,0.6)", borderBottom: "1px solid rgba(0,0,0,0.05)",
            fontSize: 10.5, fontWeight: 600, color: "#475569", flexWrap: "wrap",
          }}>
            <span style={{ padding: "3px 8px", borderRadius: 999, background: "#fff", border: "1px solid #e2e8f0" }}>📞 Contesta llamadas</span>
            <span style={{ padding: "3px 8px", borderRadius: 999, background: "#fff", border: "1px solid #e2e8f0" }}>📅 Agenda {niche.bookingLabel}s</span>
            <span style={{ padding: "3px 8px", borderRadius: 999, background: "#fff", border: "1px solid #e2e8f0" }}>📲 Cotiza por SMS</span>
            <span style={{ padding: "3px 8px", borderRadius: 999, background: "#fff", border: "1px solid #e2e8f0" }}>🌐 ES ↔ EN en vivo</span>
          </div>

          {/* Messages */}
          <div style={{
            flex: 1, overflowY: "auto", padding: "18px 16px 8px",
            background: `linear-gradient(180deg, ${niche.bgLight} 0%, #ffffff 100%)`,
          }}>
            {messages.map((msg, i) => <Bubble key={i} msg={msg} color={niche.color} />)}
            {typing && <TypingIndicator color={niche.color} />}
            <div ref={bottomRef} />
          </div>

          {showLeadForm && (
            <LeadForm color={niche.color} gradient={headerGradient}
              onSubmit={submitLead} onCancel={() => setShowLeadForm(false)} />
          )}

          {messages.length > 0 && !typing && !showLeadForm && booking.stage === "idle" && (
            <div style={{
              padding: "10px 14px", background: "rgba(255,255,255,0.7)",
              backdropFilter: "blur(8px)", display: "flex", gap: 8, flexWrap: "wrap",
              borderTop: "1px solid rgba(0,0,0,0.05)",
            }}>
              {QUICK_REPLIES[nicheKey].map((q) => (
                <button key={q} className="qs-quick-btn"
                  onClick={() => send(q.replace(/^[^\p{L}]+/u, "").toLowerCase())}
                  style={{ border: `1.5px solid ${niche.color}`, color: niche.color }}>
                  {q}
                </button>
              ))}
              {!leadSubmitted && (
                <button className="qs-quick-btn" onClick={() => setShowLeadForm(true)}
                  style={{ border: `1.5px solid ${niche.color}`, background: niche.color, color: "#fff" }}>
                  💬 Hablar con humano
                </button>
              )}
            </div>
          )}

          {/* Input */}
          <div style={{
            display: "flex", padding: "14px 16px", background: "#fff",
            borderTop: "1px solid #ececec", gap: 10, alignItems: "center",
          }}>
            <input className="qs-input" value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder={booking.stage !== "idle" ? "Responde aquí..." : "Escribe tu mensaje..."}
              style={{
                flex: 1, border: "1.5px solid #e5e7eb", borderRadius: 999,
                padding: "12px 18px", fontSize: 14, background: "#f9fafb",
                outline: "none", color: "#111827",
                transition: "border-color .15s ease, background .15s ease",
              }}
              onFocus={(e) => { e.target.style.borderColor = niche.color; e.target.style.background = "#fff"; }}
              onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; e.target.style.background = "#f9fafb"; }}
            />
            <button className="qs-send-btn" onClick={() => send()} style={{
              width: 46, height: 46, borderRadius: "50%", background: headerGradient,
              border: "none", color: "#fff", cursor: "pointer", fontSize: 18,
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0, boxShadow: `0 6px 18px -4px ${niche.color}88`,
            }} aria-label="Enviar">➤</button>
          </div>
        </div>
      </div>
    </>
  );
}

// ─── LEAD FORM ────────────────────────────────────────────────────────────────
function LeadForm({ color, gradient, onSubmit, onCancel }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const valid = name.trim().length >= 2 && phone.trim().length >= 7;

  const handle = (e) => {
    e.preventDefault();
    if (!valid) return;
    onSubmit(name.trim(), phone.trim());
  };

  return (
    <form onSubmit={handle} style={{
      padding: "14px 16px", background: "rgba(255,255,255,0.92)",
      backdropFilter: "blur(8px)", borderTop: `2px solid ${color}`,
      display: "flex", flexDirection: "column", gap: 8,
    }}>
      <div style={{ fontSize: 12.5, fontWeight: 600, color: "#374151" }}>
        Déjanos tus datos y un asesor te contactará
      </div>
      <input autoFocus value={name} onChange={(e) => setName(e.target.value)}
        placeholder="Tu nombre" maxLength={60}
        style={{ border: "1.5px solid #e5e7eb", borderRadius: 12, padding: "10px 14px",
          fontSize: 13.5, background: "#f9fafb", outline: "none", color: "#111827" }}
        onFocus={(e) => (e.target.style.borderColor = color)}
        onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")} />
      <input value={phone}
        onChange={(e) => setPhone(e.target.value.replace(/[^\d+\s-]/g, ""))}
        placeholder="WhatsApp / Teléfono" maxLength={20} type="tel"
        style={{ border: "1.5px solid #e5e7eb", borderRadius: 12, padding: "10px 14px",
          fontSize: 13.5, background: "#f9fafb", outline: "none", color: "#111827" }}
        onFocus={(e) => (e.target.style.borderColor = color)}
        onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")} />
      <div style={{ display: "flex", gap: 8 }}>
        <button type="button" onClick={onCancel} style={{
          flex: "0 0 auto", padding: "10px 14px", borderRadius: 999,
          border: "1.5px solid #e5e7eb", background: "#fff", color: "#6b7280",
          fontSize: 13, fontWeight: 500, cursor: "pointer",
        }}>Cancelar</button>
        <button type="submit" disabled={!valid} style={{
          flex: 1, padding: "10px 14px", borderRadius: 999, border: "none",
          background: valid ? gradient : "#cbd5e1", color: "#fff",
          fontSize: 13.5, fontWeight: 700, cursor: valid ? "pointer" : "not-allowed",
          boxShadow: valid ? `0 6px 18px -4px ${color}88` : "none",
          transition: "transform .15s ease",
        }}>Enviar y abrir WhatsApp →</button>
      </div>
    </form>
  );
}

// ─── Floating widget (legacy) — minimal re-export ────────────────────────────
function ChatWidget({ nicheKey }) {
  return <ChatEmbedded nicheKey={nicheKey} />;
}
export function ChatRestaurante()  { return <ChatWidget nicheKey="restaurante" />; }
export function ChatSalon()        { return <ChatWidget nicheKey="salon" />; }
export function ChatDental()       { return <ChatWidget nicheKey="dental" />; }
export function ChatGym()          { return <ChatWidget nicheKey="gym" />; }
export function ChatInmobiliaria() { return <ChatWidget nicheKey="inmobiliaria" />; }

export default ChatWidget;
