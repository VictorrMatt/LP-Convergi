import { Body } from "@/components/typography/Body";
import { Button } from "@/components/ui/button";
import * as React from "react";

export const MainContent: React.FC = () => {
  return (
    <section className=" flex overflow-hidden gap-2.5 items-center px-12 py-44 my-auto min-h-[640px] min-w-60 max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className=" flex flex-col justify-center self-stretch my-auto w-96 min-w-60">
        <div className="">
          <h1 className="text-[64px] w-[453px] h-[144px]  font-semibold text-white leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
            Your Vision,<br/> Our Expertise
          </h1>
          <Body className=" mt-6 font-inter text-base leading-5 text-[#B2B3C7]">
          Transform your ideas into powerful solutions with innovation,
          design, and strategy.
          </Body>
        </div>
        <Button className=" w-min mt-10 max-md:px-5">
          Free Consultation
        </Button>
      </div>
    </section>
  );
};
