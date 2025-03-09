import { Body } from "@/components/typography/Body";
import React from "react";

export const ScrollIndicator = ({className}: {className?: string}) => {
  return (
    <div className={`absolute flex flex-col items-center gap-2 left-0 bottom-[129px] max-sm:hidden ${className}`}>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html: `<svg id="32:25829" layer-name="Arrows, Diagrams/Arrow, Forward" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="scroll-arrow" style="width: 24px; height: 24px;"> <path d="M8 13.5L12 17.5L16 13.5" stroke="#888BA8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7 6.5L12 11.5L17 6.5" stroke="#888BA8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`,
          }}
        />
      </div>
      <div className="rotate-90 translate-y-8 text-[#B2B3C7]">
        <Body>Scroll down</Body>
      </div>
    </div>
  );
};
