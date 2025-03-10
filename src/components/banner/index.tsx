import React from "react";
import { PurpleShine } from "@/components/icons"

const navigationItems = [
  "Intelligent Interfaces",
  "Adaptive UX",
  "AI - Driven Design",
  "Human-Centric",
  "Smart Automations",
  "Intuitive Journeys",
  "Visual Simplicity",
  "Seamless Interactions",
];

const FeaturesBanner: React.FC = () => {
  return (
    <section className="bg-[#19204B] visible w-max flex flex-wrap justify-center items-center gap-8 py-6 px-8 text-[#B2B3C7] font-medium">
      {navigationItems.map((item) => (
        <>
          <span key={item}>{item}</span>
          <PurpleShine />
        </>
      ))}
    </section>
  );
};

export default FeaturesBanner;
