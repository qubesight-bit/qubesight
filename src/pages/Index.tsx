import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Assistant from "@/components/sections/Assistant";
import VoiceBot from "@/components/sections/VoiceBot";
import PropIA from "@/components/sections/PropIA";
import Industries from "@/components/sections/Industries";
import DemoNiches from "@/components/sections/DemoNiches";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Assistant />
        <VoiceBot />
        <PropIA />
        <Industries />
        <DemoNiches />
        <Testimonials />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
