"use client";
import React from "react";

export function NavigationArrows() {
  const handlePrevClick = () => {
    // Handle previous slide
  };

  const handleNextClick = () => {
    // Handle next slide
  };

  return (
    <nav
      className="flex gap-6 items-start self-start mt-10"
      aria-label="Testimonial navigation"
    >
      <button
        onClick={handlePrevClick}
        className="flex gap-2.5 items-center p-3 w-12 h-12 border border-solid border-[color:var(--Wireframe-700,#45465F)] rounded-[200px]"
        aria-label="Previous testimonial"
      >
        <div className="flex self-stretch my-auto w-6 min-h-6" />
      </button>
      <button
        onClick={handleNextClick}
        className="flex gap-2.5 items-center p-3 w-12 h-12 border border-solid border-[color:var(--Wireframe-700,#45465F)] rounded-[200px]"
        aria-label="Next testimonial"
      >
        <div className="flex self-stretch my-auto w-6 min-h-6" />
      </button>
    </nav>
  );
}
