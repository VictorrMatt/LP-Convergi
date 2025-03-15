"use client";

import * as React from "react";
import { ServiceCard } from "./ServiceCard";

export const ServicesGrid: React.FC = () => {
  return (
    <section className="flex flex-col text-gray-400 max-w-[592px] max-sm:mt-10 max-sm:w-full">
      <div className="flex flex-wrap items-end w-full">
        <div className="flex flex-col grow shrink justify-center min-w-60 w-[296px] max-sm:w-full">
          <ServiceCard
            title="UI & UX Design"
            description="Captivating and seamless user experiences."
            className="bg-[#242A52] max-sm:w-full"
          />
          <ServiceCard
            title="App & Web Development"
            description="Fast and scalable solutions."
          />
        </div>
        <ServiceCard
          title="AI Automation"
          description="Smart AI-powered agents for sales and support"
          className="flex grow shrink bg-[#242A52]"
        />
      </div>
      <div className="self-end">
        <ServiceCard
          title="Future-Ready Digital Experiences"
          description="Technology that keeps you ahead in an ever-changing digital world."
          variant="featured"
          className=" max-sm:w-full"
        />
      </div>
    </section>
  );
};

export default ServicesGrid;
