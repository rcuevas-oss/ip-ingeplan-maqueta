import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Marquee } from "@/components/sections/Marquee";
import { Numbers } from "@/components/sections/Numbers";
import { Services } from "@/components/sections/Services";
import { Specialties } from "@/components/sections/Specialties";
import { Showcase } from "@/components/sections/Showcase";
import { WhyUs } from "@/components/sections/WhyUs";
import { Methodology } from "@/components/sections/Methodology";
import { About } from "@/components/sections/About";
import { Insights } from "@/components/sections/Insights";
import { Accreditation } from "@/components/sections/Accreditation";
import { FAQ } from "@/components/sections/FAQ";
import { CtaBand } from "@/components/sections/CtaBand";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Chatbot } from "@/components/Chatbot";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <Marquee />
        <Numbers />
        <Services />
        <Specialties />
        <Showcase />
        <WhyUs />
        <Methodology />
        <About />
        <Insights />
        <Accreditation />
        <FAQ />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
