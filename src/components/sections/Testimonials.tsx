export const Testimonials = () => {
  return (
    <div className="relative z-0 flex w-full items-center gap-[40px_100px] overflow-hidden justify-between px-28 py-80 max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="self-stretch z-0 flex min-w-60 flex-col items-stretch justify-center w-[520px] my-auto max-md:max-w-full">
        <div className="max-w-full w-[520px]">
          <h2 className="text-white text-[64px] font-semibold leading-[72px] max-md:max-w-full max-md:text-[40px] max-md:leading-[50px]">
            Trusted by Clients Who Demand Excellence
          </h2>
          <p className="text-[#B2B3C7] text-base font-normal leading-5 mt-6">
            From startups to leading brands, we create solutions that drive
            results.
          </p>
        </div>
      </div>
      <div className="self-stretch z-0 flex min-w-60 flex-col items-stretch w-[488px] my-auto max-md:max-w-full">
        <div className="w-full text-2xl text-[rgba(178,179,199,1)] font-normal leading-8 max-md:max-w-full">
          <p className="mt-4 max-md:max-w-full">
            "Delivered with excellence—great communication, outstanding service,
            and a clear understanding of our needs."
          </p>
        </div>
        <div className="flex items-center gap-4 mt-8">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/40ab4f3b85e74b49be24ecd22546354c/acbbbb6dc560a0b9183dadfc00f7bcea293cd9e94a260bec512cfdfcb23abdd1?placeholderIfAbsent=true"
            alt="Client"
            className="aspect-[1] object-contain w-16 self-stretch shrink-0 my-auto rounded-[50%]"
          />
          <div className="self-stretch my-auto">
            <div className="text-white text-lg font-medium leading-[1.6]">
              Alexandre Figura
            </div>
            <div className="text-[rgba(178,179,199,1)] text-base font-normal leading-loose mt-[5px]">
              CEO Mei em Foco
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
