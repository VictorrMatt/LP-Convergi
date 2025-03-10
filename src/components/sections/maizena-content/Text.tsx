"use client";
import * as React from "react";

interface TextProps {
  children: React.ReactNode;
  alignment?: "left" | "right";
  className?: string;
}

export const Text: React.FC<TextProps> = ({
  children,
  alignment = "left",
  className = "",
}) => {
  return (
    <p
      className={`text-base leading-5 text-gray-400 max-w-[280px] max-sm:max-w-full ${alignment === "right" ? "text-right" : ""} ${className}`}
    >
      {children}
    </p>
  );
};
