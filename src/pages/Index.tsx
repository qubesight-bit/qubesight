import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Assistant from "@/components/sections/Assistant";
import PropIA from "@/components/sections/PropIA";
import Industries from "@/components/sections/Industries";
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
        <PropIA />
        <Industries />
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
