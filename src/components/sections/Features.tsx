
import { StatsCard } from "@/components/ui/StatsCard";

export const Features = () => {
  return (
    <div className="bg-[#19204B] flex w-full flex-col items-center justify-center px-28 py-24 max-md:px-5 max-md:py-16" style={{ border: '1px solid red' }}>
      <div className="w-full max-w-[1200px]">
        <h2 className="text-white text-[64px] font-semibold text-center leading-none mb-16 max-md:text-[40px] max-md:mb-10">
          Our Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            value="Usability"
            label="Simple Design, User Centered, Human Behaviour"
          />
          <StatsCard
            value="Web Design"
            label="Website, Ecommerce, SaaS & CRM, Landing Pages"
          />
          <StatsCard
            value="Development"
            label="Front-end, Back-end, Low Code, Systems"
          />
          <StatsCard
            value="AI & Automation"
            label="Agents, Multi-agent Systems, Automations"
          />
        </div>
      </div>
    </div>
  );
};
