"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  maxHeight?: number
  showSlider?: boolean
  mobileImages?: {
    before: string
    after: string
  }
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  maxHeight = 800,
  showSlider = false,
  mobileImages,
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const viewBeforeRef = useRef<HTMLDivElement>(null)
  const afterImageRef = useRef<HTMLImageElement>(null)
  const [isClient, setIsClient] = useState(false)
  const [isMouseOver, setIsMouseOver] = useState(false)
  const [containerWidth, setContainerWidth] = useState(0)
  const [containerHeight, setContainerHeight] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Determine which images to use based on screen size
  const currentBeforeImage = isMobile && mobileImages ? mobileImages.before : beforeImage
  const currentAfterImage = isMobile && mobileImages ? mobileImages.after : afterImage

  // Função para calcular e definir a altura do container
  const updateContainerDimensions = () => {
    if (containerRef.current && afterImageRef.current && afterImageRef.current.complete) {
      const newWidth = containerRef.current.offsetWidth

      // Check if we're on mobile
      const newIsMobile = window.innerWidth < 640 // sm breakpoint in Tailwind
      setIsMobile(newIsMobile)

      // For mobile with specific dimensions
      if (newIsMobile) {
        // Use fixed dimensions for mobile (392 x 852)
        if (window.innerWidth <= 392) {
          setContainerWidth(window.innerWidth)
          setContainerHeight(Math.min((window.innerWidth * 852) / 392, 852))
        } else {
          setContainerWidth(392)
          setContainerHeight(852)
        }
        setImagesLoaded(true)
        return
      }

      // For larger screens, maintain aspect ratio
      const imgWidth = afterImageRef.current.naturalWidth
      const imgHeight = afterImageRef.current.naturalHeight

      if (imgWidth > 0 && imgHeight > 0) {
        // Calcular altura mantendo a proporção, mas não ultrapassando maxHeight
        const calculatedHeight = Math.min((newWidth * imgHeight) / imgWidth, maxHeight)
        setContainerHeight(calculatedHeight)
        setContainerWidth(newWidth)
        setImagesLoaded(true)
      }
    }
  }

  useEffect(() => {
    setIsClient(true)

    // Check initial mobile state
    setIsMobile(window.innerWidth < 640)

    // Inicializar após as imagens carregarem
    const afterImg = new Image()
    afterImg.src = currentAfterImage
    afterImg.onload = updateContainerDimensions

    // Posicionar o slider inicialmente no meio
    if (containerRef.current) {
      if (isMobile) {
        // Vertical slider for mobile - position in the middle vertically
        const initialPosition = containerRef.current.offsetHeight / 2
        if (sliderRef.current && viewBeforeRef.current) {
          gsap.set(sliderRef.current, { top: initialPosition })
          updateClipPath(initialPosition)
        }
      } else {
        // Horizontal slider for desktop - position in the middle horizontally
        const initialPosition = containerRef.current.offsetWidth / 2
        if (sliderRef.current && viewBeforeRef.current) {
          gsap.set(sliderRef.current, { left: initialPosition })
          updateClipPath(initialPosition)
        }
      }
    }

    // Adicionar listener para redimensionamento
    const handleResize = () => {
      const wasMobile = isMobile
      updateContainerDimensions()
      const isMobileNow = window.innerWidth < 640

      // If switching between mobile and desktop, reset the slider position
      if (wasMobile !== isMobileNow) {
        if (containerRef.current && sliderRef.current && viewBeforeRef.current) {
          if (isMobileNow) {
            // Switching to mobile - vertical slider
            const initialPosition = containerRef.current.offsetHeight / 2
            gsap.set(sliderRef.current, { left: 0, top: initialPosition })
            updateClipPath(initialPosition)
          } else {
            // Switching to desktop - horizontal slider
            const initialPosition = containerRef.current.offsetWidth / 2
            gsap.set(sliderRef.current, { top: 0, left: initialPosition })
            updateClipPath(initialPosition)
          }
        }
      } else {
        // Same device type, just resizing
        if (sliderRef.current && viewBeforeRef.current && containerRef.current) {
          if (isMobile) {
            // Mobile - maintain vertical position percentage
            if (containerHeight > 0) {
              const currentPercentage = sliderRef.current.offsetTop / containerHeight
              const newPosition = currentPercentage * containerRef.current.offsetHeight
              gsap.set(sliderRef.current, { top: newPosition })
              updateClipPath(newPosition)
            }
          } else {
            // Desktop - maintain horizontal position percentage
            if (containerWidth > 0) {
              const currentPercentage = sliderRef.current.offsetLeft / containerWidth
              const newPosition = currentPercentage * containerRef.current.offsetWidth
              gsap.set(sliderRef.current, { left: newPosition })
              updateClipPath(newPosition)
            }
          }
        }
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [currentAfterImage, containerWidth, containerHeight, isMobile, maxHeight])

  // Atualizar clip-path com base na posição do slider
  const updateClipPath = (position: number) => {
    if (viewBeforeRef.current && containerRef.current) {
      if (isMobile) {
        // Vertical slider for mobile
        const height = containerRef.current.offsetHeight
        const percentage = (position / height) * 100
        viewBeforeRef.current.style.clipPath = `inset(0 0 ${100 - percentage}% 0)`
      } else {
        // Horizontal slider for desktop
        const width = containerRef.current.offsetWidth
        const percentage = (position / width) * 100
        viewBeforeRef.current.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`
      }
    }
  }

  const animateTo = (percentage: number) => {
    if (sliderRef.current && viewBeforeRef.current && containerRef.current) {
      if (isMobile) {
        // Vertical animation for mobile
        const height = containerRef.current.offsetHeight
        const position = height * percentage

        gsap.to(sliderRef.current, {
          top: position,
          duration: 0.2,
          onUpdate: () => {
            if (sliderRef.current) {
              updateClipPath(sliderRef.current.offsetTop)
            }
          },
        })
      } else {
        // Horizontal animation for desktop
        const width = containerRef.current.offsetWidth
        const position = width * percentage

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
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current && isMouseOver) {
      const rect = containerRef.current.getBoundingClientRect()

      if (isMobile) {
        // Vertical slider for mobile
        const position = e.clientY - rect.top
        const boundedPosition = Math.max(0, Math.min(position, rect.height))

        if (sliderRef.current) {
          gsap.set(sliderRef.current, { top: boundedPosition })
        }
        updateClipPath(boundedPosition)
      } else {
        // Horizontal slider for desktop
        const position = e.clientX - rect.left
        const boundedPosition = Math.max(0, Math.min(position, rect.width))

        if (sliderRef.current) {
          gsap.set(sliderRef.current, { left: boundedPosition })
        }
        updateClipPath(boundedPosition)
      }
    }
  }

  const handleTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()

      if (isMobile) {
        // Vertical slider for mobile
        const touchPosition = e.touches[0].clientY - rect.top
        const boundedPosition = Math.max(0, Math.min(touchPosition, rect.height))

        if (sliderRef.current) {
          gsap.set(sliderRef.current, { top: boundedPosition })
        }
        updateClipPath(boundedPosition)
      } else {
        // Horizontal slider for desktop
        const touchPosition = e.touches[0].clientX - rect.left
        const boundedPosition = Math.max(0, Math.min(touchPosition, rect.width))

        if (sliderRef.current) {
          gsap.set(sliderRef.current, { left: boundedPosition })
        }
        updateClipPath(boundedPosition)
      }
    }
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()

      if (isMobile) {
        // Vertical slider for mobile
        const clickPosition = e.clientY - rect.top
        const boundedPosition = Math.max(0, Math.min(clickPosition, rect.height))

        if (sliderRef.current) {
          gsap.set(sliderRef.current, { top: boundedPosition })
        }
        updateClipPath(boundedPosition)
      } else {
        // Horizontal slider for desktop
        const clickPosition = e.clientX - rect.left
        const boundedPosition = Math.max(0, Math.min(clickPosition, rect.width))

        if (sliderRef.current) {
          gsap.set(sliderRef.current, { left: boundedPosition })
        }
        updateClipPath(boundedPosition)
      }
    }
  }

  if (!isClient) {
    return null
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div
        ref={containerRef}
        className="relative overflow-hidden cursor-col-resize w-full max-sm:w-[392px] max-sm:mx-auto max-sm:cursor-row-resize"
        style={{
          height: imagesLoaded ? `${containerHeight}px` : "auto",
          maxHeight: isMobile ? "852px" : undefined,
          transition: "height 0.3s ease",
        }}
        onClick={handleClick}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouch}
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        {/* After image (background) */}
        <div className="absolute top-0 left-0 w-full h-full z-10">
          <img
            ref={afterImageRef}
            src={currentAfterImage || "/placeholder.svg"}
            alt="After"
            className="h-full w-full object-contain"
            onLoad={updateContainerDimensions}
          />
        </div>

        {/* Before image (foreground with clip) */}
        <div
          ref={viewBeforeRef}
          className="absolute top-0 left-0 w-full h-full overflow-hidden z-20"
          style={{
            clipPath: isMobile
              ? "inset(0 0 50% 0)" // Initial vertical clip-path for mobile
              : "inset(0 50% 0 0)", // Initial horizontal clip-path for desktop
          }}
        >
          <img
            src={currentBeforeImage || "/placeholder.svg"}
            alt="Before"
            className="h-full w-full object-contain"
            onLoad={updateContainerDimensions}
          />
        </div>

        {/* Slider handle - can be invisible */}
        <div
          ref={sliderRef}
          className={`absolute z-30 ${
            showSlider
              ? isMobile
                ? "h-1 w-full bg-white" // Horizontal line for vertical slider on mobile
                : "w-1 h-full bg-white" // Vertical line for horizontal slider on desktop
              : isMobile
                ? "h-0 w-full"
                : "w-0 h-full"
          }`}
          style={{
            boxShadow: showSlider ? "0 0 2px rgba(0,0,0,0.6)" : "none",
            left: isMobile ? 0 : undefined, // For mobile, fix left position
            top: !isMobile ? 0 : undefined, // For desktop, fix top position
          }}
        />
      </div>
    </div>
  )
}

