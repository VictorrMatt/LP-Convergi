"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"

export default function Test() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  // Initial position (center)
  const initialPosition = { x: 0, y: 0 }

  useEffect(() => {
    // Show the gradient after a delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 750)

    return () => clearTimeout(timer)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()

    // Calculate position relative to the center
    const x = ((e.clientX - rect.left) / rect.width) * 100 - 50
    const y = ((e.clientY - rect.top) / rect.height) * 100 - 50

    setPosition({ x, y })
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    // Return to initial position
    setPosition(initialPosition)
  }

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-[#F76B1C] cursor-all-scroll select-none"
      style={{ WebkitTapHighlightColor: "rgba(0,0,0,0)" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute flex items-center justify-center pointer-events-none"
        style={{
          top: "calc(50% - 30vh)",
          left: "calc(50% - 20vw)",
          width: "40vw",
          height: "60vh",
          zIndex: 0,
          opacity: isVisible ? 1 : 0,
          transform: `translate(${isHovering ? position.x : initialPosition.x}vw, ${isHovering ? position.y : initialPosition.y}vh)`,
          transition: "transform 150ms ease-out",
          willChange: "transform, opacity",
        }}
      >
        <div
          className="flex-none"
          style={{
            width: "80vw",
            height: "80vw",
            minWidth: "500px",
            minHeight: "500px",
            background:
              "radial-gradient(ellipse at center, rgba(250,217,97,1) 0%, rgba(247,107,28,0) 70%, rgba(247,107,28,0) 100%)",
          }}
        />
      </div>

      {/* Content overlaid on top of the effect */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white p-4">
        <h1 className="text-5xl font-bold mb-6">Efeito de Luz Interativo</h1>
        <p className="text-xl max-w-md text-center">
          Mova o mouse pela tela para ver o efeito de luz seguindo o cursor. Quando o mouse sair da área, a luz voltará
          para a posição inicial.
        </p>
      </div>
    </div>
  )
}

