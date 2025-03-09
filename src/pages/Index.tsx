import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/sections/Footer";
import Convergi from "@/components/icons";
import PhoneSection from "@/components/sections/phone-content/PhoneSection";
import { useEffect } from 'react';
import Maizena from "@/components/effects/maizena";
import { HeroSection } from "@/components/sections/main-content/HeroSection";
import Header from "@/components/header";

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header');
      if (header) {
        if (window.scrollY > 0) {
          header.classList.add('header-scrolled');
        } else {
          header.classList.remove('header-scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="min-h-screen relative justify-center bg-[#08102F]">
        <Header/>
      <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center">
        <HeroSection />
        <PhoneSection />

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

<Maizena/>

        <Features />
        <Portfolio />
        <Testimonials />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
