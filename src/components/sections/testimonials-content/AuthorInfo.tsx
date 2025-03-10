import React from "react";

export function AuthorInfo() {
  return (
    <div className="flex gap-4 items-center self-start mt-8">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/40ab4f3b85e74b49be24ecd22546354c/acbbbb6dc560a0b9183dadfc00f7bcea293cd9e94a260bec512cfdfcb23abdd1?placeholderIfAbsent=true"
        alt="Alexandre Figura"
        className="object-contain shrink-0 self-stretch my-auto w-16 rounded-full aspect-square"
      />
      <div className="self-stretch my-auto">
        <h2 className="text-lg font-medium leading-relaxed text-white">
          Alexandre Figura
        </h2>
        <p className="mt-1.5 text-base leading-loose text-gray-400">
          CEO Mei em Foco
        </p>
      </div>
    </div>
  );
}
