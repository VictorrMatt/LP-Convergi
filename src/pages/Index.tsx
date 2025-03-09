import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-[#08102F]">
      <header className="absolute z-10 flex min-h-24 w-full items-center justify-between h-24 px-28 py-6 max-md:px-5">
        <div className="flex items-center gap-[9px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/40ab4f3b85e74b49be24ecd22546354c/7b42850118360292adfea3c96d5249d1a902d92f7156662d028b1988bb554748?placeholderIfAbsent=true"
            alt="Logo Icon"
            className="aspect-[1] object-contain w-10"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/40ab4f3b85e74b49be24ecd22546354c/18cd610d6dfaac22128aab8b5080a950734f8ed078950f41103f2f86e0cd01b9?placeholderIfAbsent=true"
            alt="Logo Text"
            className="aspect-[3.94] object-contain w-[71px]"
          />
        </div>
        <div className="flex items-center gap-2 text-base text-white font-bold">
          <a
            href="mailto:hello@convergi.studio"
            className="border gap-2.5 whitespace-nowrap px-6 py-3 rounded-[200px] border-white border-solid hover:bg-white hover:bg-opacity-10 max-md:px-5"
          >
            hello@convergi.studio
          </a>
          <button className="gap-2.5 px-6 py-3 rounded-[200px] bg-white text-[#08102F] hover:bg-opacity-90 max-md:px-5">
            Free Consultation
          </button>
        </div>
      </header>

      <Hero />

      <section className="bg-[rgba(25,32,75,1)] z-0 flex w-full items-center gap-6 text-lg text-[#B2B3C7] font-medium leading-none justify-center py-6 max-md:max-w-full">
        <span>Intelligent Interfaces</span>
        <span>Adaptive UX</span>
        <span>AI - Driven Design</span>
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
