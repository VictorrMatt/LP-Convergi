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
      className={`flex overflow-hidden flex-col flex-1 justify-center p-6 w-full bg-slate-600 ${opacity} max-md:px-5 max-md:max-w-full`}
    >
      <h2 className="text-3xl font-semibold leading-10 text-gray-400">
        {title}
      </h2>
      <p className="mt-2 text-base leading-5 text-gray-400">{description}</p>
    </article>
  );
};
