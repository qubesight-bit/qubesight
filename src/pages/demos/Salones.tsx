import { ChatEmbedded } from "@/components/ChatbotDemo";
import NicheDemoPage from "@/pages/NicheDemoPage";

const Salones = () => (
  <NicheDemoPage
    badge="💇 Salones de belleza"
    title="Agenda citas mientras atiendes a tus clientes."
    subtitle="Convierte cada consulta en una cita confirmada. Tu asistente muestra servicios, precios y horarios disponibles al instante."
  >
    <ChatEmbedded nicheKey="salon" />
  </NicheDemoPage>
);

export default Salones;
