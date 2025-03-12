import React from "react";

export const SocialLinks: React.FC = () => {
  return (
    <nav className="flex gap-4 items-start mt-4 max-w-full text-xs font-semibold text-center whitespace-nowrap min-h-8 w-[264px]">
      <a
        href="https://www.instagram.com/convergistudio/"
        target="_blank"
        className="gap-2 self-stretch px-4 bg-indigo-950 min-h-8 rounded-[100px] flex items-center justify-center hover:bg-indigo-900 transition-colors"
      >
        instagram
      </a>
      <a
        href="https://www.linkedin.com/company/convergistudio/"
        target="_blank"
        className="gap-2 self-stretch px-4 bg-indigo-950 min-h-8 rounded-[100px] flex items-center justify-center hover:bg-indigo-900 transition-colors"
      >
        linkedin
      </a>
    </nav>
  );
};
