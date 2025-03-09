export const Footer = () => {
  return (
    <footer className="items-stretch border-t-[color:var(--secundaria-950,#071641)] bg-[#07102F] z-0 flex w-full flex-col overflow-hidden text-white pt-28 px-[67px] border-t border-solid max-md:max-w-full max-md:pt-[100px] max-md:px-5">
      <div className="flex w-full items-center gap-8 max-md:max-w-full">
        <div className="self-stretch min-w-60 w-full flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
          <div className="flex w-full items-center gap-4 text-2xl font-medium leading-none flex-wrap max-md:max-w-full">
            <h2 className="text-white text-[32px] font-semibold leading-10 self-stretch flex-1 shrink basis-4 my-auto max-md:max-w-full">
              Transform your ideas into
              <br />
              impactful results
            </h2>
            <a
              href="mailto:hello@convergi.studio"
              className="self-stretch flex min-w-60 min-h-16 items-center gap-2 whitespace-nowrap my-auto px-2 py-4 hover:text-opacity-80"
            >
              hello@convergi.studio
            </a>
            <a
              href="tel:+61413321164"
              className="self-stretch flex min-h-16 items-center gap-2 my-auto px-2 py-4 hover:text-opacity-80"
            >
              +61 413 321 164
            </a>
          </div>
          <div className="flex min-h-8 w-[264px] max-w-full gap-4 text-xs font-semibold whitespace-nowrap text-center mt-4">
            <a
              href="#"
              className="self-stretch bg-[rgba(10,23,67,1)] min-h-8 px-4 py-2 rounded-[100px] hover:bg-opacity-80"
            >
              instagram
            </a>
            <a
              href="#"
              className="self-stretch bg-[rgba(10,23,67,1)] min-h-8 px-4 py-2 rounded-[100px] hover:bg-opacity-80"
            >
              linkedin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
