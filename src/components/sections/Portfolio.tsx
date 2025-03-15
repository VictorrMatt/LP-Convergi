import { ConvergiBadge } from "../icons";
import { NavigationArrows } from "./testimonials-content/NavigationArrows";

export const Portfolio = () => {
  return (
    <div className="w-screen flex items-center justify-center bg-[#19204B]">
      <div className="bg-[#19204B] flex w-full flex-col items-center px-28 max-sm:px-6 py-24 max-sm:py-28">
        <div className="w-full max-w-[1200px]">
          <div className="flex flex-row justify-between mb-12 max-md:mb-8">
            <div>
              <div className="text-[#B2B3C7] text-base font-normal">
                Portfolio
              </div>
              <h2 className="text-white text-[64px] font-semibold leading-[72px] mt-6">
                We Let Our Work
                <br className="max-sm:hidden" />
                {""} Do the Talking
              </h2>
            </div>

<div className="max-sm:hidden flex items-center">

            <ConvergiBadge />
</div>
          </div>
          <div className="grid max-sm:hidden grid-cols-2 md:grid-cols-3 mb-16 lg:grid-cols-6 w-full text-center cursor-pointer">
            <div className="bg-[#2C3158] py-4 px-6 border-b-2 border-[#727EC5]">
              <span className="text-[#B2B3C7]">Destaques</span>
            </div>
            <div className="bg-[rgba(84,86,117,0.16)] py-4 px-6 cursor-not-allowed">
              <span className="text-[#B2B3C7]">Apps</span>
            </div>
            <div className="bg-[rgba(84,86,117,0.16)] py-4 px-6 cursor-not-allowed">
              <span className="text-[#B2B3C7]">Fintech</span>
            </div>
            <div className="bg-[#222952] py-4 px-6 cursor-not-allowed">
              <span className="text-[#B2B3C7]">Websites</span>
            </div>
            <div className="bg-[rgba(84,86,117,0.16)] py-4 px-6 cursor-not-allowed">
              <span className="text-[#B2B3C7]">Dashboard</span>
            </div>
            <div className="bg-[rgba(84,86,117,0.16)] py-4 px-6 cursor-not-allowed">
              <span className="text-[#B2B3C7]">Others</span>
            </div>
          </div>

          {/* ONLY MOBILE */}
          <div className="max-sm:visible sm:hidden mb-16">
            <h3 className="font-inter font-normal text-base text-[#C5C8DC] leading-5">See what happens when great ideas meet expert execution.</h3>

            <NavigationArrows/>
          </div>
          <div className="flex flex-row w-full max-sm:w-[865px] max-sm:h-[480px] max-sm:gap-8">
            <a
              className="w-1/3"
              href="
            "
            >
              <img src="/png/project-1.png" className="max-sm:w-full max-sm:h-[100%] max-sm:object-cover" />
            </a>

            <a className="w-1/3" href="">
              <img src="/png/project-2.png" className="max-sm:w-full max-sm:h-[100%] max-sm:object-cover" />
            </a>

            <a className="w-1/3" href="">
              <img src="/png/project-3.png" className="max-sm:w-full max-sm:h-[100%] max-sm:object-cover" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
