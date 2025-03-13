"use client"

import { useEffect, useRef } from "react"

interface EmbersBackgroundProps {
  emberCount?: number
  maxSize?: number
  minSize?: number
  maxSpeed?: number
  minSpeed?: number
  color?: string
  className?: string
}

export default function EmbersBackground({
  emberCount = 200,
  maxSize = 4,
  minSize = 1,
  maxSpeed = 7,
  minSpeed = 0.5,
  color = "rgba(212, 102, 255, 1)",
  className = "",
}: EmbersBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    updateCanvasSize()

    // Ember particle class
    class Ember {
      x: number
      y: number
      size: number
      speed: number
      opacity: number
      fadeRate: number
      emberColor: string

      constructor() {
        this.reset()
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = canvas.height + Math.random() * 100
        this.size = minSize + Math.random() * (maxSize - minSize)
        this.speed = minSpeed + Math.random() * (maxSpeed - minSpeed)
        this.opacity = 1
        this.fadeRate = Math.random() * 0.02 + 0.005
        this.emberColor = color
      }

      update() {
        this.y -= this.speed
        this.opacity -= this.fadeRate
        if (this.opacity <= 0) {
          this.reset()
        }
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.emberColor.replace("0.7", this.opacity.toFixed(2))
        ctx.fill()
      }
    }

    // Create initial embers
    const embers: Ember[] = []
    for (let i = 0; i < emberCount; i++) {
      embers.push(new Ember())
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      embers.forEach((ember) => {
        ember.update()
        ember.draw()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    // Handle window resize
    window.addEventListener("resize", updateCanvasSize)

    // Start animation
    animate()

    // Cleanup function
    return () => {
      window.removeEventListener("resize", updateCanvasSize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [emberCount, maxSize, minSize, maxSpeed, minSpeed, color])

  return <canvas ref={canvasRef} className={`absolute bottom-0 ${className}`} />
}

