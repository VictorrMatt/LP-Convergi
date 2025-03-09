
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
      className={`bg-[#131839] flex flex-col p-8 rounded-[8px] h-full ${className}`}
    >
      {icon && (
        <div className="mb-4">
          <div className="bg-[#171D45] flex w-10 h-10 items-center justify-center rounded-full">
            {icon}
          </div>
        </div>
      )}
      <div className="text-white">
        <div className="text-2xl font-bold mb-2">{value}</div>
        <div className="text-[#B2B3C7] text-sm font-normal">{label}</div>
      </div>
    </div>
  );
};
