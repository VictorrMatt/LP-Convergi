import * as React from "react";

export function SocialLinks() {
  return (
    <nav
      className="flex gap-4 items-start h-8 w-[264px] max-sm:justify-start max-sm:w-full"
      aria-label="Social media links"
    >
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="gap-2 px-4 h-8 text-xs font-semibold leading-5 text-center text-white bg-[#0A1743] rounded-[100px] flex items-center hover:bg-indigo-900 transition-colors"
      >
        instagram
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="gap-2 px-4 h-8 text-xs font-semibold leading-5 text-center text-white bg-[#0A1743] rounded-[100px] flex items-center hover:bg-indigo-900 transition-colors"
      >
        linkedin
      </a>
    </nav>
  );
}
