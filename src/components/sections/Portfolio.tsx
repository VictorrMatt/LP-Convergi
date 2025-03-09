export const Portfolio = () => {
  return (
    <div className="bg-[rgba(25,32,75,1)] z-0 flex w-full flex-col overflow-hidden items-stretch justify-center p-28 max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="flex w-full gap-8 flex-wrap max-md:max-w-full">
        <div className="flex min-w-60 flex-col justify-center flex-1 shrink basis-[76px] max-md:max-w-full">
          <div className="w-[520px] max-w-full">
            <div className="text-[#B2B3C7] text-base font-normal leading-none">
              Portfolio
            </div>
            <h2 className="text-white text-[64px] font-semibold leading-[72px] mt-6 max-md:max-w-full max-md:text-[40px] max-md:leading-[50px]">
              We Let Our Work Do the Talking
            </h2>
          </div>
        </div>
      </div>
      <div className="flex w-full items-stretch text-base text-[#B2B3C7] font-normal text-center leading-none flex-1 flex-wrap h-full mt-16 max-md:max-w-full max-md:mt-10">
        <div className="bg-[rgba(44,49,88,1)] overflow-hidden flex-1 shrink basis-[0%] p-6 border-[rgba(114,126,197,1)] border-b max-md:px-5">
          Destaques
        </div>
        <div className="bg-[rgba(84,86,117,0.16)] overflow-hidden flex-1 shrink basis-[0%] p-6 max-md:px-5">
          Apps
        </div>
        <div className="bg-[rgba(84,86,117,0.16)] overflow-hidden flex-1 shrink basis-[0%] p-6 max-md:px-5">
          Fintech
        </div>
        <div className="bg-[rgba(34,41,82,1)] overflow-hidden flex-1 shrink basis-[0%] p-6 max-md:px-5">
          Websites
        </div>
        <div className="bg-[rgba(84,86,117,0.16)] overflow-hidden flex-1 shrink basis-[0%] p-6 max-md:px-5">
          Dashboard
        </div>
        <div className="bg-[rgba(84,86,117,0.16)] overflow-hidden flex-1 shrink basis-[0%] p-6 max-md:px-5">
          Others
        </div>
      </div>
    </div>
  );
};
