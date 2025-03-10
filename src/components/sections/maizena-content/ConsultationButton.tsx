"use client";
import * as React from "react";

interface ConsultationButtonProps {
  onClick?: () => void;
}

export const ConsultationButton: React.FC<ConsultationButtonProps> = ({
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 text-base font-bold leading-6 text-white cursor-pointer rounded-[200px] max-sm:text-center hover:bg-indigo-900 transition-colors"
    >
      Free Consultation
    </button>
  );
};
