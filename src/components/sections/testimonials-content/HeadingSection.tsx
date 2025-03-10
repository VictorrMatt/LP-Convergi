import React from "react";
import { NavigationArrows } from "./NavigationArrows"; 

export function HeadingSection() {
  return (
    <div className="flex flex-col justify-center w-full max-md:mt-10 max-md:max-w-full">
      <div className="max-w-full w-[520px]">
        <h1 className="text-6xl font-semibold text-white leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
          Trusted by Clients Who Demand Excellence
        </h1>
        <p className="mt-6 text-base leading-5 text-gray-400">
          From startups to leading brands, we create solutions that drive
          results.
        </p>
      </div>
      <NavigationArrows />
    </div>
  );
}
