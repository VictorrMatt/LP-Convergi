
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-[#08102F]">
      <header className="absolute z-10 w-full flex items-center justify-between px-28 py-6 max-md:px-5">
        <div className="flex items-center gap-[9px]">
          <img
            src="/lovable-uploads/eb92c032-7f30-4022-a36c-f8dcfcec73c7.png"
            alt="Logo Icon"
            className="w-10 h-10"
          />
          <span className="text-white font-semibold text-xl">Convergi</span>
        </div>
        <div className="flex items-center gap-4 text-base font-bold">
          <a
            href="mailto:hello@convergi.studio"
            className="text-white border border-white px-5 py-2.5 rounded-full hover:bg-white/10 transition-colors"
          >
            hello@convergi.studio
          </a>
          <button className="bg-white text-[#08102F] px-5 py-2.5 rounded-full hover:bg-opacity-90 transition-colors">
            Free Consultation
          </button>
        </div>
      </header>

      <Hero />

      <section className="bg-[#19204B] flex flex-wrap justify-center items-center gap-8 py-6 px-8 text-[#B2B3C7] font-medium">
        <span>Intelligent Interfaces</span>
        <span>Adaptive UX</span>
        <span>AI-Driven Design</span>
        <span>Human-Centric</span>
        <span>Smart Automations</span>
        <span>Intuitive Journeys</span>
        <span>Visual Simplicity</span>
        <span>Seamless Interactions</span>
      </section>

      <Features />
      <Portfolio />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Index;
