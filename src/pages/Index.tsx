import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/sections/Footer";
import PhoneSection from "@/components/sections/phone-content/PhoneSection";
import { useEffect } from 'react';
import Maizena from "@/components/effects/maizena";
import { HeroSection } from "@/components/sections/main-content/HeroSection";
import Header from "@/components/header";
import FeaturesBanner from "@/components/banner";

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
      <div className="debug-border w-full max-w-[1440px] mx-auto flex flex-col items-center">
        <HeroSection />
        <PhoneSection />
        <FeaturesBanner/>
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
