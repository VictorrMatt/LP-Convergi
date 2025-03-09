"use client";
import * as React from "react";
import { MainContent } from "./MainContent";
import { FeatureList } from "./FeatureList";

interface HeroSectionProps {
  className?: string;
}

const PhoneSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
      <main className="max-w-[1440px] m-16 h-[732px] flex overflow-hidden flex-wrap rounded-3xl bg-indigo-950">
          <MainContent />
          <FeatureList />
      </main>
  );
};

export default PhoneSection;
