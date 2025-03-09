
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative z-0 flex w-full flex-col justify-center px-28 py-[360px] max-md:max-w-full max-md:px-5 max-md:py-[100px]" style={{ border: '1px solid red' }}>
      <div className="self-center z-0 flex w-[1007px] max-w-full flex-col items-stretch justify-center">
        <div className="flex w-full flex-col text-center max-md:max-w-full">
          <h1 className="text-white text-8xl font-semibold leading-[104px] max-md:max-w-full max-md:text-[40px] max-md:leading-[48px]">
            Innovation, Desig
            <br />
            & Strategy
          </h1>
          <p className="text-[#BFBFBF] text-base font-normal leading-5 mt-6 max-md:max-w-full">
            Elevating Digital Experiences Beyond Expectations.
            <br />
            UX/UI design and AI-driven development to transform ideas into
            seamless interactions.
          </p>
        </div>
        <Button>
          Free Consultation
        </Button>
      </div>
    </div>
  );
};
