import React from "react";

export interface ServiceLink {
  text: string;
}

export interface ServiceCardProps {
  icon: string;
  title: string;
  links: ServiceLink[];
  className?: string;
  borderPosition?: "top" | "bottom";
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  links,
  className = "",
  borderPosition = "bottom",
}) => {
  return (
    <article
      className={`
        flex h-[400px] flex-col justify-between items-start flex-1 relative
        pt-12 pb-6 px-6
        ${borderPosition === "top" ? "border-t-[#727EC5] border-t" : "border-b-[#727EC5] border-b"} 
        border-solid
        max-md:flex-[0_0_50%] max-sm:flex-[0_0_100%]
        ${className}
      `}
    >
      <div
        className="icon-container"
        dangerouslySetInnerHTML={{ __html: icon }}
      />

      <div className="flex flex-col items-start gap-4 self-stretch">
        <h2 className="text-white text-2xl font-normal leading-8 self-stretch">
          {title}
        </h2>
        <nav className="flex flex-col items-start gap-3 self-stretch">
          {links.map((link, index) => (
            <a
              key={index}
              href="#"
              className="text-[#B2B3C7] text-lg font-normal leading-[22px] self-stretch hover:text-white transition-colors"
            >
              {link.text}
            </a>
          ))}
        </nav>
      </div>
    </article>
  );
};