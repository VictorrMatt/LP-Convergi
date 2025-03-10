"use client";

import * as React from "react";
import { ServiceCard } from "./ServiceCard";

export const ServicesGrid: React.FC = () => {
  return (
    <section className="flex flex-col text-gray-400 max-w-[592px]">
      <div className="flex flex-wrap items-end w-full max-md:max-w-full">
        <div className="flex flex-col grow shrink justify-center min-w-60 w-[237px]">
          <ServiceCard
            title="UI & UX Design"
            description="Captivating and seamless user experiences."
            className="bg-blue-950"
          />
          <ServiceCard
            title="App & Web Development"
            description="Fast and scalable solutions."
          />
        </div>
        <ServiceCard
          title="AI Automation"
          description="Smart AI-powered agents for sales and support"
          className="flex grow shrink bg-blue-950 min-w-60 w-[237px]"
        />
      </div>
      <div className="self-end">
        <ServiceCard
          title="Future-Ready Digital Experiences"
          description="Technology that keeps you ahead in an ever-changing digital world."
          variant="featured"
        />
      </div>
    </section>
  );
};

export default ServicesGrid;
