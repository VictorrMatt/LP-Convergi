import { ConvergiBadge }from "../icons";

export const Portfolio = () => {
  return (
    <div className="bg-[#19204B] flex w-full flex-col items-center px-28 py-24 max-md:px-5 max-md:py-16" >
      <div className="w-full max-w-[1200px]">
        <div className="flex flex-row justify-between mb-12 max-md:mb-8">
          <div>
          <div className="text-[#B2B3C7] text-base font-normal">
            Portfolio
          </div>
          <h2 className="text-white text-[64px] font-semibold leading-[72px] mt-6 max-md:text-[40px] max-md:leading-[50px]">
            We Let Our Work<br />Do the Talking
          </h2>
          </div>

          <ConvergiBadge className="rotate "/>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 mb-16 lg:grid-cols-6 w-full text-center cursor-pointer">
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
        <div className="flex flex-row w-full">
          <img className="w-1/3" src="/png/project-1.png"/>
          <img className="w-1/3" src="/png/project-2.png"/>
          <img className="w-1/3" src="/png/project-3.png"/>
        </div>
      </div>
    </div>
  );
};
