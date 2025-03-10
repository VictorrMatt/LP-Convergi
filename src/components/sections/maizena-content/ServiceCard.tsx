"use client";

import * as React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  className?: string;
  variant?: "default" | "featured";
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  className = "",
  variant = "default",
}) => {
  const baseStyles =
    "flex overflow-hidden flex-col justify-center items-left px-6 py-14 min-h-[196px] w-[296px] max-md:px-5";
  const variantStyles = {
    default: "",
    featured: "py-8",
  };

  return (
    <article className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      <h2 className="text-2xl font-semibold leading-8">{title}</h2>
      <p className="mt-2 text-base leading-5">{description}</p>
    </article>
  );
};
