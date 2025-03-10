
import { ServicesGrid } from "./solutions-content/ServicesGrid";


export const BeforeAndAfter = () => {
  return (
    <div className="bg-[#19204B] flex w-full h-[1200px] flex-col items-center justify-center p-28 max-md:px-5 max-md:py-16" style={{ border: '1px solid red' }}>
      <div className="w-full max-w-[1216px]">
        <h2 className="text-white text-[64px] font-semibold text-center leading-none mb-16 max-md:text-[40px] max-md:mb-10">
        From Concept to Reality: Our Design Process
        </h2>
        <div>
          <ServicesGrid />
        </div>
      </div>
    </div>
  );
};
