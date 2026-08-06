import { useEffect } from "react";
import Hero from "@/components/hero/Hero";
import Solutions from "@/components/sections/Solutions";
import Benefits from "@/components/sections/Benefits";
import HowItWorks from "@/components/sections/HowItWorks";
import Terminals from "@/components/sections/Terminals";
import Integrations from "@/components/sections/Integrations";
import WhyUs from "@/components/sections/WhyUs";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import FinalCta from "@/components/sections/FinalCta";
import Footer from "@/components/sections/Footer";

export default function Home() {
  useEffect(() => {
    document.title = "VisionGate — Control acces prin recunoaștere facială Hikvision";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Instalăm și configurăm terminale Hikvision Face Recognition, sisteme de pontaj, integrare HikCentral, yale electromagnetice, turnicheți și bariere.");
  }, []);

  return (
    <main>
      <Hero />
      <Solutions />
      <Benefits />
      <HowItWorks />
      <Terminals />
      <Integrations />
      <WhyUs />
      <Faq />
      <FinalCta />
      <Contact />
      <Footer />
    </main>
  );
}