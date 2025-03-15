import BeforeAfterSlider from "./before-content/BeforeAndAfter";

export const SliderSection = () => {
  return (
    <div className="flex w-full h-[1200px] max-sm:h-[1356px] flex-col items-center justify-center p-28 max-sm:p-[24px] max-sm:py-[112px] max-sm:px-[24px]">
      <div className="w-full gap-16 max-w-[1216px]">
        <h2 className="text-white text-[64px] font-semibold text-center leading-none mb-16">
          From Concept to Reality: Our Design Process
        </h2>
        <div>
          <BeforeAfterSlider
            beforeImage="/png/wireframe.png"
            afterImage="/png/high-fidelity.png"
            mobileImages={{
              before: "/png/wireframe-mobile.png",
              after: "/png/high-fidelity-mobile.png",
            }}
            showSlider={false}
          />
        </div>
      </div>
    </div>
  );
};
