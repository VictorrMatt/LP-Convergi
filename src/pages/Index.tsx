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
  const heroSectionRef = useRef<HTMLDivElement>(null)
  const phoneSectionRef = useRef<HTMLDivElement>(null)
  const solutionsSectionRef = useRef<HTMLDivElement>(null)

  const [isVisible, setIsVisible] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [lastMousePosition, setLastMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isInActiveSection, setIsInActiveSection] = useState(false)

  // Configurações do efeito de luz
  const lightConfig = {
    // Tamanho da luz (largura e altura em pixels)
    size: 1600,

    // Intensidade da luz (opacidade de 0 a 1)
    intensity: 1,

    // Cor da luz (formato rgba)
    color: "rgba(118, 1, 171, 1)",

    // Quantidade de blur (em pixels)
    blur: 880,

    // Posição inicial (em porcentagem da tela)
    initialX: 0, // 0% = esquerda
    initialY: 120, // 120% = abaixo da tela

    // Velocidade da transição (em milissegundos)
    transitionSpeed: 0,
  }

  // Calcula a posição inicial baseada nas porcentagens definidas
  const calculateInitialPosition = () => {
    if (typeof window === "undefined") return { x: 0, y: 0 }

    return {
      x: (window.innerWidth * lightConfig.initialX) / 100,
      y: (window.innerHeight * lightConfig.initialY) / 100,
    }
  }

  // Posição inicial calculada
  const initialPosition = calculateInitialPosition()

  // Verifica se uma coordenada está em uma das seções ativas
  const checkIfInActiveSection = (x: number, y: number) => {
    const heroRect = heroSectionRef.current?.getBoundingClientRect()
    const phoneRect = phoneSectionRef.current?.getBoundingClientRect()
    const solutionsRect = solutionsSectionRef.current?.getBoundingClientRect()

    if (!heroRect || !phoneRect || !solutionsRect) return false

    // Verifica se a coordenada está dentro de alguma das seções ativas
    const isInHero = y >= heroRect.top && y <= heroRect.bottom
    const isInPhone = y >= phoneRect.top && y <= phoneRect.bottom
    const isInSolutions = y >= solutionsRect.top && y <= solutionsRect.bottom

    return isInHero || isInPhone || isInSolutions
  }

  // Atualiza a posição da luz com base na posição atual do mouse e na seção
  const updateLightPosition = () => {
    const inActiveSection = checkIfInActiveSection(lastMousePosition.x, lastMousePosition.y)
    setIsInActiveSection(inActiveSection)

    if (inActiveSection) {
      setPosition(lastMousePosition)
    } else {
      setPosition(calculateInitialPosition())
    }
  }

  useEffect(() => {
    // Atualiza a posição inicial quando a janela estiver disponível
    setPosition(calculateInitialPosition())

    // Define a posição inicial do mouse no centro da tela
    if (typeof window !== "undefined") {
      setLastMousePosition({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      })
    }

    // Mostra o gradiente após um delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 750)

    return () => clearTimeout(timer)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Armazena a última posição conhecida do mouse
    setLastMousePosition({ x: e.clientX, y: e.clientY })

    // Atualiza a posição da luz
    const inActiveSection = checkIfInActiveSection(e.clientX, e.clientY)
    setIsInActiveSection(inActiveSection)

    if (inActiveSection) {
      setPosition({ x: e.clientX, y: e.clientY })
    } else {
      setPosition(calculateInitialPosition())
    }
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    setIsInActiveSection(false)
    // Retorna para a posição inicial
    setPosition(calculateInitialPosition())
  }

  // Adiciona um listener de scroll para atualizar a posição da luz durante o scroll
  useEffect(() => {
    const handleScroll = () => {
      // Atualiza a posição da luz com base na última posição conhecida do mouse
      updateLightPosition()

      // Também atualiza o header
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
  }, [lastMousePosition]) // Dependência para o lastMousePosition

  // Recalcula a posição inicial se a janela for redimensionada
  useEffect(() => {
    const handleResize = () => {
      if (!isHovering || !isInActiveSection) {
        setPosition(calculateInitialPosition())
      }

      // Também atualiza a posição da luz com base na última posição do mouse
      updateLightPosition()
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [isHovering, isInActiveSection, lastMousePosition])

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
          opacity: isVisible ? 1 : 0,
          transition: "opacity 750ms ease-out",
        }}
      >
        <div
          className="absolute"
          style={{
            top: isHovering && isInActiveSection ? position.y : initialPosition.y,
            left: isHovering && isInActiveSection ? position.x : initialPosition.x,
            width: `${lightConfig.size}px`,
            height: `${lightConfig.size}px`,
            transform: "translate(-50%, -50%)",
            transition: `top ${lightConfig.transitionSpeed}ms ease-out, left ${lightConfig.transitionSpeed}ms ease-out`,
            background: `radial-gradient(circle at center, ${lightConfig.color} 0%, rgba(8, 16, 47, 0) 70%, rgba(8, 16, 47, 0) 100%)`,
            filter: `blur(${lightConfig.blur}px)`,
            willChange: "top, left",
          }}
        />
      </div>

      <Header />

      <div className=" w-full max-w-[1440px] mx-auto flex flex-col items-center relative z-10">
        {/* Seções onde a luz segue o mouse */}
        <div className="w-full" ref={heroSectionRef}>
          <HeroSection />
        </div>

        <div className="w-full" ref={phoneSectionRef}>
          <PhoneSection />
        </div>

        {/* Seções onde a luz fica na posição inicial */}
        <FeaturesBanner />
        <MaizenaSection />

        <div className="w-full" ref={solutionsSectionRef}>
          <SolutionsSection />
        </div>

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

