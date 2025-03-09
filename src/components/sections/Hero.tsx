
import Button from "@/components/ui/Button";

export const Hero = () => {
  return (
    <div className="relative flex w-full flex-col justify-center items-center bg-[#08102F] px-28 py-56 max-md:max-w-full max-md:px-5 max-md:py-36">
      <div className="self-center flex w-full max-w-[920px] flex-col items-center justify-center">
        <div className="flex w-full flex-col text-center">
          <h1 className="text-white text-8xl font-semibold leading-[104px] max-md:max-w-full max-md:text-[40px] max-md:leading-[48px]">
            Innovation, Design,
            <br />& Strategy
          </h1>
          <p className="text-[#BFBFBF] text-base font-normal leading-5 mt-6 max-md:max-w-full">
            Elevating Digital Experiences Beyond Expectations.
            <br />
            UX/UI design and AI-driven development to transform ideas into
            seamless interactions.
          </p>
        </div>
        <Button variant="outline" className="self-center mt-10">
          Free Consultation
        </Button>
      </div>
    </div>
  );
};
