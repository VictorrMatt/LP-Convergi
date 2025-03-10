import React from "react";
import { Arrow } from "./Arrow"; 

interface ContactItemProps {
  text: string;
}

export const ContactItem: React.FC<ContactItemProps> = ({ text }) => {
  return (
    <div className="flex gap-2 items-center self-stretch px-2 py-4 my-auto whitespace-nowrap min-h-16">
      <Arrow />
      <p className="self-stretch my-auto">{text}</p>
    </div>
  );
};
