"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  width?: number
  height?: number
  showSlider?: boolean
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  width = 600,
  height = 500,
  showSlider = false, // Default to invisible slider
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const viewBeforeRef = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false)
  const [isMouseOver, setIsMouseOver] = useState(false)

  useEffect(() => {
    setIsClient(true)

    // Initialize at the middle position
    if (containerRef.current && sliderRef.current && viewBeforeRef.current) {
      const initialPosition = width / 2
      gsap.set(sliderRef.current, { left: initialPosition })
      updateClipPath(initialPosition)
    }
  }, [width])

  // Function to update the clip-path based on slider position
  const updateClipPath = (position: number) => {
    if (viewBeforeRef.current && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth
      const percentage = (position / containerWidth) * 100
      viewBeforeRef.current.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`
    }
  }

  const animateTo = (position: number) => {
    if (sliderRef.current && viewBeforeRef.current) {
      gsap.to(sliderRef.current, {
        left: position,
        duration: 0.2,
        onUpdate: () => {
          if (sliderRef.current) {
            updateClipPath(sliderRef.current.offsetLeft)
          }
        },
      })
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current && isMouseOver) {
      const rect = containerRef.current.getBoundingClientRect()
      const position = e.clientX - rect.left

      // Ensure position is within bounds
      const boundedPosition = Math.max(0, Math.min(position, width))

      // Update slider position and clip path directly for immediate response
      if (sliderRef.current) {
        gsap.set(sliderRef.current, { left: boundedPosition })
      }
      updateClipPath(boundedPosition)
    }
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const clickPosition = e.clientX - rect.left
      animateTo(clickPosition)
    }
  }

  if (!isClient) {
    return null
  }

  return (
    <div className="flex flex-col items-center gap-4">
 {/*      <ul className="flex justify-center gap-8 my-4">
        <li className="cursor-pointer hover:text-primary transition-colors" onClick={() => animateTo(0)}>
          Before
        </li>
        <li className="cursor-pointer hover:text-primary transition-colors" onClick={() => animateTo(width / 2)}>
          Compare
        </li>
        <li className="cursor-pointer hover:text-primary transition-colors" onClick={() => animateTo(width)}>
          After
        </li>
      </ul> */}

      <div
        ref={containerRef}
        className="relative overflow-hidden cursor-col-resize"
        style={{ width: `${width}px`, height: `${height}px` }}
        onClick={handleClick}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        {/* After image (background) */}
        <div className="absolute top-0 left-0 w-full h-full z-10">
          <img src={afterImage || "/placeholder.svg"} alt="After" className="h-full w-full object-cover" />
        </div>

        {/* Before image (foreground with clip) */}
        <div
          ref={viewBeforeRef}
          className="absolute top-0 left-0 w-full h-full overflow-hidden z-20"
          style={{ clipPath: "inset(0 50% 0 0)" }} // Initial clip-path
        >
          <img src={beforeImage || "/placeholder.svg"} alt="Before" className="h-full w-full object-cover" />
        </div>

        {/* Slider handle - can be invisible */}
        <div
          ref={sliderRef}
          className={`absolute top-0 h-full z-30 ${showSlider ? "w-1 bg-white" : "w-0"}`}
          style={{
            boxShadow: showSlider ? "0 0 2px rgba(0,0,0,0.6)" : "none",
          }}
        />
      </div>
    </div>
  )
}

