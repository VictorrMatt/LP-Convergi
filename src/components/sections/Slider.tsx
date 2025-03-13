import BeforeAfterSlider from "./before-content/BeforeAndAfter";

export const SliderSection = () => {
  return (
    <div
      className="flex w-full h-[1200px] flex-col items-center justify-center p-28 max-md:px-5 max-md:py-16"
    >
      <div className="w-full gap-16 max-w-[1216px]">
        <h2 className="text-white text-[64px] font-semibold text-center leading-none mb-16 max-md:text-[40px] max-md:mb-10">
          From Concept to Reality: Our Design Process
        </h2>
        <div>
          <BeforeAfterSlider
            beforeImage="/png/wireframe.png"
            afterImage="/png/high-fidelity.png"
            showSlider={false}
          />
        </div>
      </div>
    </div>
  );
};
