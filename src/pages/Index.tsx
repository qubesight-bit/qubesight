import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Problem from "@/components/sections/Problem";
import Assistant from "@/components/sections/Assistant";
import VoiceBot from "@/components/sections/VoiceBot";
import PropIA from "@/components/sections/PropIA";
import Industries from "@/components/sections/Industries";
import DemoNiches from "@/components/sections/DemoNiches";
import Testimonials from "@/components/sections/Testimonials";
import GuaranteeStrip from "@/components/sections/GuaranteeStrip";
import Pricing from "@/components/sections/Pricing";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import UrgencyBanner from "@/components/UrgencyBanner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <UrgencyBanner />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Problem />
        <Assistant />
        <VoiceBot />
        <PropIA />
        <Industries />
        <DemoNiches />
        <Testimonials />
        <GuaranteeStrip />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
