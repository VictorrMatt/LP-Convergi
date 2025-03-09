import React from "react";

interface ServiceCircleProps {
  svg: string;
  title: string;
  subtitle: string;
}

export const ServiceCircle: React.FC<ServiceCircleProps> = ({
  svg,
  title,
  subtitle,
}) => {
  return (
    <div className="w-60 h-60 max-sm:w-[180px] max-sm:h-[180px]">
      <div dangerouslySetInnerHTML={{ __html: svg }} />
    </div>
  );
};