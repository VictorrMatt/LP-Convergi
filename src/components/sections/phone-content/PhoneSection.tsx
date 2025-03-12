"use client";
import * as React from "react";
import { MainContent } from "./MainContent";
import { FeatureList } from "./FeatureList";

interface HeroSectionProps {
  className?: string;
}

const PhoneSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <div className="p-16 w-full">
      <main className="w-full h-[732px] justify-between flex overflow-hidden flex-wrap rounded-3xl bg-[#0E1543] ">
          <MainContent />
          <FeatureList />
      </main>
    </div>
  );
};

export default PhoneSection;