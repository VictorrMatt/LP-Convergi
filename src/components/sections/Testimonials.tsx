"use client";
import { HeadingSection } from "./testimonials-content/HeadingSection";
import { TestimonialCard } from "./testimonials-content/TestimonialCard";

const Testimonials = () => {
  return (
    <main className="w-full h-[1080px] bg-[url('/png/lines-2.png')] debug-border flex items-center justify-center relative flex-col gap-10 p-28 max-md:px-10 max-md:py-16 max-sm:px-5 max-sm:py-10">
      <section>
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-6/12 max-md:ml-0 max-md:w-full">
            <HeadingSection />
          </div>
          <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <TestimonialCard />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Testimonials;
