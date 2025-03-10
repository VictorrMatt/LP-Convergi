import * as React from "react";
import { FeatureBox } from "./FeatureBox";

export const FeatureList: React.FC = () => {
  return (
    <section className="flex-1 shrink text-gray-400 basis-24 max-w-[480px] max-md:max-w-full">
      <FeatureBox
        title="Design That Inspires"
        description="Bringing ideas to life through design that speaks to users."
        opacity="bg-opacity-[16%]"
      />
      <FeatureBox
        title="Future-Ready Technology"
        description="Building smart, adaptable systems that evolve with your company."
        opacity="bg-opacity-[32%]"
      />
      <FeatureBox
        title="Intelligent strategies"
        description="Technology-powered solutions that align with your business goals."
        opacity="bg-opacity-[48%]"
      />
    </section>
  );
};
