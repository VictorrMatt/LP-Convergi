"use client";
import { HeadingSection } from "./testimonials-content/HeadingSection";
import { TestimonialCard } from "./testimonials-content/TestimonialCard";

const Testimonials = () => {
  return (
    <div className="w-screen flex items-center justify-center bg-[#08102F]">
      <main className="w-[1440px] max-sm:w-[440px] h-[1080px] bg-[url('/png/frame-1-lines.png')] bg-opacity-10 flex items-center max-sm:items-baseline justify-center relative flex-col gap-10 p-28 max-sm:px-[24px] max-sm:py-[112px]">
        <section>
          <div className="flex gap-5 max-sm:gap-[112px] max-md:flex-col">
            <div className="w-6/12 max-md:ml-0 max-md:w-full">
              <HeadingSection />
            </div>
            <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <TestimonialCard />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Testimonials;
