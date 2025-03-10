import React from "react";
import { AuthorInfo } from "./AuthorInfo";

export function TestimonialCard() {
  return (
    <article className="flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
      <div className="w-full text-2xl leading-8 text-gray-400 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/40ab4f3b85e74b49be24ecd22546354c/379435a09f09b2cc305d35d1e411b156b1d3572eebe39c47010cd86b16bb831c?placeholderIfAbsent=true"
          alt="Testimonial icon"
          className="object-contain aspect-[1.14] fill-purple-800 w-[73px]"
        />
        <blockquote className="mt-4 max-md:max-w-full">
          Delivered with excellence—great communication, outstanding service,
          and a clear understanding of our needs.
        </blockquote>
      </div>
      <AuthorInfo />
    </article>
  );
}
