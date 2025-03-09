"use client";
import * as React from "react";
import { MainContent } from "./MainContent";
import { FeatureList } from "./FeatureList";
import { twMerge } from "tailwind-merge";

interface HeroSectionProps {
  className?: string;
}

const PhoneSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <section className="flex p-16">
      <main
        className={twMerge(
          `${
            className || ""
          } w-[1312px] h-[732px] flex overflow-hidden flex-wrap rounded-3xl bg-indigo-950`
        )}
      >
        <MainContent />
        <FeatureList />
      </main>
    </section>
  );
};

export default PhoneSection;
