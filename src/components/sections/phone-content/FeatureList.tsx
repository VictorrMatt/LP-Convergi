import * as React from "react";
import { FeatureBox } from "./FeatureBox";

export const FeatureList: React.FC = () => {
  return (
    <section className="flex-1 shrink text-gray-400 basis-24 min-w-60 max-md:max-w-full">
      <FeatureBox
        title="Design That Inspires"
        description="Bringing ideas to life through design that speaks to users."
        opacity="bg-opacity-20"
      />
      <FeatureBox
        title="Future-Ready Technology"
        description="Building smart, adaptable systems that evolve with your company."
        opacity="bg-opacity-30"
      />
      <FeatureBox
        title="Intelligent strategies"
        description="Technology-powered solutions that align with your business goals."
        opacity="bg-opacity-50"
      />
    </section>
  );
};
