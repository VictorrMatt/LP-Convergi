interface StatsCardProps {
  icon?: React.ReactNode;
  value: string;
  label: string;
  className?: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({
  icon,
  value,
  label,
  className,
}) => {
  return (
    <div
      className={`bg-[rgba(19,24,57,1)] flex gap-2.5 grow shrink p-5 rounded-[7px] ${className}`}
    >
      {icon && (
        <div className="w-[39px] rounded-[0px_0px_0px_0px]">
          <div className="bg-[rgba(23,29,69,1)] flex w-[39px] shrink-0 h-[39px] rounded-[26px]">
            {icon}
          </div>
        </div>
      )}
      <div className="flex gap-[40px_75px] text-[rgba(65,71,124,1)] flex-1 shrink basis-[0%]">
        <div className="w-full flex-1 shrink basis-[0%]">
          <div className="text-xl font-bold leading-none">{value}</div>
          <div className="text-xs font-normal leading-loose">{label}</div>
        </div>
      </div>
    </div>
  );
};
