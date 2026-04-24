import { ChatEmbedded } from "@/components/ChatbotDemo";
import NicheDemoPage from "@/pages/NicheDemoPage";

const Inmobiliarias = () => (
  <NicheDemoPage
    badge="🏠 Inmobiliarias"
    title="Califica leads y agenda visitas automáticamente."
    subtitle="Muestra propiedades, filtra interesados serios y agenda visitas mientras cierras otras ventas."
  >
    <ChatEmbedded nicheKey="inmobiliaria" />
  </NicheDemoPage>
);

export default Inmobiliarias;
