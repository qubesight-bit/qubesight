import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import WhatWeDo from "@/components/sections/WhatWeDo";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import WhyUs from "@/components/sections/WhyUs";
import Portfolio from "@/components/sections/Portfolio";
import UseCases from "@/components/sections/UseCases";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackgroundMusic from "@/components/BackgroundMusic";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <Services />
        <Process />
        <WhyUs />
        <Portfolio />
        <UseCases />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackgroundMusic />
    </div>
  );
};

export default Index;
