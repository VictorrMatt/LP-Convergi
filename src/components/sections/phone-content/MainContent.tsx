import * as React from "react";

export const MainContent: React.FC = () => {
  return (
    <section className="flex overflow-hidden gap-2.5 items-center px-12 py-44 my-auto min-h-[640px] min-w-60 w-[832px] max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col justify-center self-stretch my-auto w-96 min-w-60">
        <div className="w-full">
          <h1 className="text-6xl font-semibold text-white leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
            Your Vision, Our Expertise
          </h1>
          <p className="mt-6 text-base leading-5 text-gray-400">
            Transform your ideas into powerful solutions with innovation,
            design, and strategy.
          </p>
        </div>
        <button className="gap-2.5 self-start px-6 py-3 mt-10 text-base font-bold text-white rounded-[200px] max-md:px-5 bg-gradient-to-r from-[#3078FF] to-[#7601AB]">
          Free Consultation
        </button>
      </div>
    </section>
  );
};
