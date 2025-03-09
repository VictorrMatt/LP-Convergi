
export const Testimonials = () => {
  return (
    <div className="bg-[#08102F] flex w-full items-center justify-center px-28 py-32 max-md:px-5 max-md:py-20">
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row justify-between gap-16">
        <div className="max-w-[520px]">
          <h2 className="text-white text-[64px] font-semibold leading-[72px] max-md:text-[40px] max-md:leading-[50px]">
            Trusted by Clients Who Demand Excellence
          </h2>
          <p className="text-[#B2B3C7] text-base font-normal leading-5 mt-6">
            From startups to leading brands, we create solutions that drive
            results.
          </p>
        </div>
        <div className="max-w-[488px]">
          <div className="text-2xl text-[#B2B3C7] font-normal leading-8">
            <p>"Delivered with excellence—great communication, outstanding service,
            and a clear understanding of our needs."</p>
          </div>
          <div className="flex items-center gap-4 mt-8">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/40ab4f3b85e74b49be24ecd22546354c/acbbbb6dc560a0b9183dadfc00f7bcea293cd9e94a260bec512cfdfcb23abdd1?placeholderIfAbsent=true"
              alt="Client"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <div className="text-white text-lg font-medium">
                Alexandre Figura
              </div>
              <div className="text-[#B2B3C7] text-base font-normal">
                CEO Mei em Foco
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
