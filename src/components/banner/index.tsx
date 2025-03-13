"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"
import { PurpleShine } from "../icons"

const FeaturesBanner: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null)
  const [duplicateCount, setDuplicateCount] = useState(2)

  // Calculate how many duplicates we need based on screen width
  useEffect(() => {
    const calculateDuplicates = () => {
      const screenWidth = window.innerWidth
      // For wider screens, we need more duplicates to ensure smooth looping
      const newCount = screenWidth > 1200 ? 3 : 2
      setDuplicateCount(newCount)
    }

    calculateDuplicates()
    window.addEventListener("resize", calculateDuplicates)
    return () => window.removeEventListener("resize", calculateDuplicates)
  }, [])

  const navigationItems = [
    "Intelligent Interfaces",
    "Adaptive UX",
    "AI-Driven Design",
    "Human-Centric",
    "Smart Automations",
    "Intuitive Journeys",
    "Visual Simplicity",
    "Seamless Interactions",
    "Intelligent Interfaces",
    "Adaptive UX",
    "AI-Driven Design",
    "Human-Centric",
    "Smart Automations",
    "Intuitive Journeys",
    "Visual Simplicity",
    "Seamless Interactions",
  ]

  // Create duplicated arrays based on calculated count
  const duplicatedItems = Array(duplicateCount).fill(navigationItems).flat()

  return (
    <div className="features-banner-container">
      <style>{`
        .features-banner-container {
          width: 100vw;
          overflow-x: visible;
          margin: 0;
          padding: 0;
        }
        
        .features-banner {
          background: #19204B;
          overflow: visible;
          position: relative;
          width: 100%;
          padding: 1.5rem 0;
          box-sizing: border-box;
        }
        
        .slide-track {
          display: flex;
          width: fit-content;
        }
        
        .slide {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-right: 1.5rem;
          white-space: nowrap;
          color: #B2B3C7;
          font-weight: 500;
        }
        
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / ${duplicateCount})); }
        }
        
        .animate {
          animation: scroll 40s linear infinite;
        }
        
        .features-banner::before,
        .features-banner::after {
          content: "";
          height: 100%;
          position: absolute;
          width: 100px;
          z-index: 2;
          top: 0;
        }
        
        .features-banner::before {
          left: 0;
          background: linear-gradient(to right, #19204B 0%, rgba(25, 32, 75, 0) 100%);
        }
        
        .features-banner::after {
          right: 0;
          background: linear-gradient(to left, #19204B 0%, rgba(25, 32, 75, 0) 100%);
        }
      `}</style>
      <section className="features-banner">
        <div ref={trackRef} className="slide-track animate">
          {duplicatedItems.map((item, index) => (
            <div className="slide" key={`${item}-${index}`}>
              <span>{item}</span>
              <PurpleShine />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default FeaturesBanner

