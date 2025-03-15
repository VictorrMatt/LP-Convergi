
import { ServicesGrid } from "./solutions-content/ServicesGrid";


export const SolutionsSection = () => {
  return (
    <div className="bg-transparent flex w-full h-[1080px] max-sm:h-auto flex-col items-center justify-center max-sm:justify-normal p-28 max-sm:px-6 max-sm:py-28" >
      <div className="w-full max-w-[1216px]">
        <h2 className="text-white text-[64px] font-semibold text-center leading-none mb-16">
          Our Solutions
        </h2>
        <div>
          <ServicesGrid />
        </div>
      </div>
    </div>
  );
};
