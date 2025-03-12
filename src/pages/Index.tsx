"use client"

import type React from "react"

import { SolutionsSection } from "@/components/sections/Solutions"
import { Portfolio } from "@/components/sections/Portfolio"
import Testimonials from "@/components/sections/Testimonials"
import Footer from "@/components/sections/Footer"
import PhoneSection from "@/components/sections/phone-content/PhoneSection"
import { useEffect, useRef, useState } from "react"
import { HeroSection } from "@/components/sections/main-content/HeroSection"
import Header from "@/components/header"
import FeaturesBanner from "@/components/banner"
import MaizenaSection from "@/components/sections/maizena-content"
import { SliderSection } from "@/components/sections/Slider"
import LinesSection from "@/components/sections/Lines"

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  // Initial position (center of the screen)
  const initialPosition = { x: window?.innerWidth / 2 || 0, y: window?.innerHeight / 2 || 0 }

  useEffect(() => {
    // Update initial position once the window is available
    if (typeof window !== "undefined") {
      setPosition({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      })
    }

    // Show the gradient after a delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 750)

    return () => clearTimeout(timer)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Set the position directly to the mouse coordinates
    setPosition({ x: e.clientX, y: e.clientY })
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    // Return to initial position (center of screen)
    if (typeof window !== "undefined") {
      setPosition({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header")
      if (header) {
        if (window.scrollY > 0) {
          header.classList.add("header-scrolled")
        } else {
          header.classList.remove("header-scrolled")
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <main
      className="min-h-screen relative w-full overflow-hidden select-none bg-[#08102F]"
      ref={containerRef}
      style={{ WebkitTapHighlightColor: "rgba(0,0,0,0)" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Efeito de luz que segue o mouse */}
      <div
        className="fixed pointer-events-none"
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          opacity: isVisible ? 0.7 : 0,
          transition: "opacity 750ms ease-out",
        }}
      >
        <div
          className="absolute"
          style={{
            top: isHovering ? position.y : initialPosition.y,
            left: isHovering ? position.x : initialPosition.x,
            width: "800px",
            height: "800px",
            transform: "translate(-50%, -50%)",
            transition: "top 150ms ease-out, left 150ms ease-out",
            background:
              "radial-gradient(circle at center, rgba(99, 102, 241, 0.3) 0%, rgba(8, 16, 47, 0) 70%, rgba(8, 16, 47, 0) 100%)",
            willChange: "top, left",
          }}
        />
      </div>

      <Header />

      <div className="debug-border w-full max-w-[1440px] mx-auto flex flex-col items-center relative z-10">
        <HeroSection />
        <PhoneSection />
        <FeaturesBanner />
        <MaizenaSection />
        <SolutionsSection />
        <SliderSection />
        <LinesSection />
        <Portfolio />
        <Testimonials />
        <Footer />
      </div>
    </main>
  )
}

export default Index

