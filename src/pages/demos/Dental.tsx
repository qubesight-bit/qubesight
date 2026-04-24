import { ChatDental } from "@/components/ChatbotDemo";
import NicheDemoPage from "@/pages/NicheDemoPage";

const Dental = () => (
  <NicheDemoPage
    badge="🦷 Clínicas dentales"
    title="Pacientes atendidos al instante, día y noche."
    subtitle="Gestión de citas, tratamientos y consultas frecuentes sin saturar a tu recepción. Prueba la demo en vivo."
    ChatComponent={ChatDental}
  />
);

export default Dental;
