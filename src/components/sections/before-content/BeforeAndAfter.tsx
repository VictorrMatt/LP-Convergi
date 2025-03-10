'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  height?: number;
  showSlider?: boolean;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  height = 768, // Fixed height of 768px
  showSlider = false,
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const viewBeforeRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    setIsClient(true);
    
    // Get initial container width
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
      
      // Initialize at the middle position
      const initialPosition = containerRef.current.offsetWidth / 2;
      if (sliderRef.current && viewBeforeRef.current) {
        gsap.set(sliderRef.current, { left: initialPosition });
        updateClipPath(initialPosition);
      }
    }
    
    // Add resize listener to update container width
    const handleResize = () => {
      if (containerRef.current) {
        const newWidth = containerRef.current.offsetWidth;
        setContainerWidth(newWidth);
        
        // Maintain the same percentage position when resizing
        if (sliderRef.current && viewBeforeRef.current) {
          const currentPercentage = sliderRef.current.offsetLeft / containerWidth;
          const newPosition = currentPercentage * newWidth;
          gsap.set(sliderRef.current, { left: newPosition });
          updateClipPath(newPosition);
        }
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [containerWidth]);

  // Function to update the clip-path based on slider position
  const updateClipPath = (position: number) => {
    if (viewBeforeRef.current && containerRef.current) {
      const width = containerRef.current.offsetWidth;
      const percentage = (position / width) * 100;
      viewBeforeRef.current.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
    }
  };

  const animateTo = (percentage: number) => {
    if (sliderRef.current && viewBeforeRef.current && containerRef.current) {
      const width = containerRef.current.offsetWidth;
      const position = width * percentage;
      
      gsap.to(sliderRef.current, {
        left: position,
        duration: 0.2,
        onUpdate: () => {
          if (sliderRef.current) {
            updateClipPath(sliderRef.current.offsetLeft);
          }
        }
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current && isMouseOver) {
      const rect = containerRef.current.getBoundingClientRect();
      const position = e.clientX - rect.left;
      
      // Ensure position is within bounds
      const boundedPosition = Math.max(0, Math.min(position, rect.width));
      
      // Update slider position and clip path directly for immediate response
      if (sliderRef.current) {
        gsap.set(sliderRef.current, { left: boundedPosition });
      }
      updateClipPath(boundedPosition);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const clickPosition = e.clientX - rect.left;
      
      // Update slider position and clip path
      if (sliderRef.current) {
        gsap.set(sliderRef.current, { left: clickPosition });
      }
      updateClipPath(clickPosition);
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <ul className="flex justify-center gap-8 my-4">
        <li 
          className="cursor-pointer hover:text-primary transition-colors" 
          onClick={() => animateTo(0)}
        >
          Before
        </li>
        <li 
          className="cursor-pointer hover:text-primary transition-colors" 
          onClick={() => animateTo(0.5)}
        >
          Compare
        </li>
        <li 
          className="cursor-pointer hover:text-primary transition-colors" 
          onClick={() => animateTo(1)}
        >
          After
        </li>
      </ul>
      
      <div 
        ref={containerRef}
        className="relative overflow-hidden cursor-col-resize w-full"
        style={{ height: `${height}px` }}
        onClick={handleClick}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        {/* After image (background) */}
        <div className="absolute top-0 left-0 w-full h-full z-10">
          <img 
            src={afterImage || "/placeholder.svg"} 
            alt="After" 
            className="h-full w-full object-contain"
          />
        </div>

        {/* Before image (foreground with clip) */}
        <div
          ref={viewBeforeRef}
          className="absolute top-0 left-0 w-full h-full overflow-hidden z-20"
          style={{ clipPath: 'inset(0 50% 0 0)' }} // Initial clip-path
        >
          <img
            src={beforeImage || "/placeholder.svg"}
            alt="Before"
            className="h-full w-full object-contain"
          />
        </div>
        
        {/* Slider handle - can be invisible */}
        <div 
          ref={sliderRef}
          className={`absolute top-0 h-full z-30 ${showSlider ? 'w-1 bg-white' : 'w-0'}`}
          style={{ 
            boxShadow: showSlider ? '0 0 2px rgba(0,0,0,0.6)' : 'none'
          }}
        />
      </div>
    </div>
  );
}
