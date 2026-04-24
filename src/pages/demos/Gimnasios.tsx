import { ChatEmbedded } from "@/components/ChatbotDemo";
import NicheDemoPage from "@/pages/NicheDemoPage";

const Gimnasios = () => (
  <NicheDemoPage
    badge="💪 Gimnasios"
    title="Convierte consultas en suscripciones al instante."
    subtitle="Planes, horarios de clases y tours guiados automáticos. Tu asistente cierra membresías mientras entrenas."
  >
    <ChatEmbedded nicheKey="gym" />
  </NicheDemoPage>
);

export default Gimnasios;
