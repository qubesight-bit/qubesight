import { ChatEmbedded } from "@/components/ChatbotDemo";
import NicheDemoPage from "@/pages/NicheDemoPage";

const Restaurantes = () => (
  <NicheDemoPage
    badge="🍽️ Restaurantes"
    title="Reservas y pedidos automáticos, sin perder mesas."
    subtitle="Tu asistente toma órdenes, confirma reservas y responde menús al instante, 24/7. Prueba la demo en vivo abajo."
  >
    <ChatEmbedded nicheKey="restaurante" />
  </NicheDemoPage>
);

export default Restaurantes;
