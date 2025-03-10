import { Body } from "@/components/typography/Body";
import * as React from "react";

interface FeatureBoxProps {
  title: string;
  description: string;
  opacity: string;
}

export const FeatureBox: React.FC<FeatureBoxProps> = ({
  title,
  description,
  opacity,
}) => {
  return (
    <article
      className={`flex overflow-hidden flex-col flex-1 justify-center p-6 w-full h-1/3 bg-[#545675] ${opacity} max-md:px-5 max-md:max-w-full`}
    >
      <div className="w-[248px]">
      <h2 className="text-3xl font-semibold leading-10 text-[#B2B3C7]">
        {title}
      </h2>
      <Body className="mt-2 text-base leading-5 text-[#B2B3C7]">
      {description}
      </Body>
      </div>
    </article>
  );
};
