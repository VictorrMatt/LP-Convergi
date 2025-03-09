import { StatsCard } from "@/components/ui/StatsCard";

export const Features = () => {
  return (
    <div className="bg-[rgba(25,32,75,1)] z-0 flex w-full flex-col items-stretch justify-center p-28 max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="flex w-full gap-8 text-[64px] text-white font-semibold text-center leading-none max-md:max-w-full max-md:text-[40px]">
        <div className="flex min-w-60 w-full flex-col items-stretch justify-center flex-1 shrink basis-[0%] max-md:max-w-full max-md:text-[40px]">
          <h2 className="w-full max-md:max-w-full max-md:text-[40px]">
            Our Solutions
          </h2>
        </div>
      </div>
      <div className="flex w-full font-normal flex-wrap mt-16 max-md:max-w-full max-md:mt-10">
        <StatsCard
          value="Usability"
          label="Simple Design, User Centered, Human Behaviour"
          className="min-w-60 min-h-[400px] flex-1"
        />
        <StatsCard
          value="Web Design"
          label="Website, Ecommerce, SaaS & CRM, Landing Pages"
          className="min-w-60 min-h-[400px] flex-1"
        />
        <StatsCard
          value="Development"
          label="Front-end, Back-end, Low Code, Systems"
          className="min-w-60 min-h-[400px] flex-1"
        />
        <StatsCard
          value="AI & Automation"
          label="Agents, Multi-agent Systems, Automations"
          className="min-w-60 min-h-[400px] flex-1"
        />
      </div>
    </div>
  );
};
