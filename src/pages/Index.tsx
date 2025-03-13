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
import ExtendSection from "@/components/extend/ExtendSection"

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroSectionRef = useRef<HTMLDivElement>(null)
  const phoneSectionRef = useRef<HTMLDivElement>(null)
  const solutionsSectionRef = useRef<HTMLDivElement>(null)
  const lightRef = useRef<HTMLDivElement>(null)

  const [isVisible, setIsVisible] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [lastMousePosition, setLastMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isInActiveSection, setIsInActiveSection] = useState(false)
  const [transitionType, setTransitionType] = useState("none") // "none", "appear", "disappear", "follow"
  const [isFirstMove, setIsFirstMove] = useState(true) // Rastreia se é o primeiro movimento em uma seção ativa
  const [transitionComplete, setTransitionComplete] = useState(false)

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

    // Velocidades de transição (em milissegundos)
    appearSpeed: 800, // Velocidade quando a luz aparece (mais lenta)
    disappearSpeed: 1200, // Velocidade quando a luz desaparece (ainda mais lenta)
    followSpeed: 0, // Velocidade quando a luz segue o mouse (instantânea)
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

    // Se estamos entrando em uma seção ativa
    if (inActiveSection && !isInActiveSection) {
      setTransitionType("appear")
      setPosition(lastMousePosition)
      setIsInActiveSection(true)
      setIsFirstMove(true) // Marca como primeiro movimento na seção ativa
      setTransitionComplete(false)
    }
    // Se estamos saindo de uma seção ativa
    else if (!inActiveSection && isInActiveSection) {
      setTransitionType("disappear")
      setPosition(calculateInitialPosition())
      setIsInActiveSection(false)
      setIsFirstMove(true) // Reseta para o próximo movimento
      setTransitionComplete(false)
    }
    // Se continuamos em uma seção ativa
    else if (inActiveSection) {
      if (isFirstMove && !transitionComplete) {
        // No primeiro movimento, mantém a transição suave
        setTransitionType("appear")
        setPosition(lastMousePosition) // Atualiza para a posição exata do mouse
      } else {
        // Após o primeiro movimento, segue instantaneamente
        setTransitionType("follow")
        setPosition(lastMousePosition)
      }
    }
  }

  // Função para lidar com o fim da transição de aparecimento
  const handleTransitionEnd = (e: React.TransitionEvent) => {
    // Só nos importamos com as transições de top/left
    if (e.propertyName === "top" || e.propertyName === "left") {
      // Se estamos em uma seção ativa e acabamos de completar a primeira transição
      if (isInActiveSection && isFirstMove && transitionType === "appear") {
        // Garante que a posição final seja exatamente a posição do mouse
        setPosition(lastMousePosition)

        // Marca a transição como completa
        setTransitionComplete(true)

        // Pequeno timeout para garantir que a posição seja atualizada antes de mudar o modo
        setTimeout(() => {
          setIsFirstMove(false) // Não é mais o primeiro movimento
          setTransitionType("follow") // Muda para seguimento instantâneo
        }, 50)
      }
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

    // Verifica se estamos em uma seção ativa
    const inActiveSection = checkIfInActiveSection(e.clientX, e.clientY)

    // Se estamos entrando em uma seção ativa
    if (inActiveSection && !isInActiveSection) {
      setTransitionType("appear")
      setPosition({ x: e.clientX, y: e.clientY })
      setIsInActiveSection(true)
      setIsFirstMove(true) // Marca como primeiro movimento na seção ativa
      setTransitionComplete(false)
    }
    // Se estamos saindo de uma seção ativa
    else if (!inActiveSection && isInActiveSection) {
      setTransitionType("disappear")
      setPosition(calculateInitialPosition())
      setIsInActiveSection(false)
      setIsFirstMove(true) // Reseta para o próximo movimento
      setTransitionComplete(false)
    }
    // Se continuamos em uma seção ativa
    else if (inActiveSection) {
      if (isFirstMove && !transitionComplete) {
        // Durante a transição inicial, atualizamos a posição alvo para a posição atual do mouse
        setPosition({ x: e.clientX, y: e.clientY })
      } else {
        // Após a transição inicial, seguimos instantaneamente
        setTransitionType("follow")
        setPosition({ x: e.clientX, y: e.clientY })
      }
    }
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    setTransitionType("disappear")
    setIsInActiveSection(false)
    setIsFirstMove(true) // Reseta para o próximo movimento
    setTransitionComplete(false)
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
  }, [lastMousePosition, isInActiveSection, isFirstMove, transitionComplete]) // Dependências atualizadas

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
  }, [isHovering, isInActiveSection, lastMousePosition, isFirstMove, transitionComplete])

  // Determina a velocidade de transição com base no tipo de transição
  const getTransitionSpeed = () => {
    switch (transitionType) {
      case "appear":
        return lightConfig.appearSpeed
      case "disappear":
        return lightConfig.disappearSpeed
      case "follow":
        return lightConfig.followSpeed
      default:
        return 0
    }
  }

  // Determina a função de easing com base no tipo de transição
  const getTransitionEasing = () => {
    switch (transitionType) {
      case "appear":
        return "cubic-bezier(0.34, 1.56, 0.64, 1)" // Efeito de "bounce" suave
      case "disappear":
        return "cubic-bezier(0.4, 0.0, 0.2, 1)" // Desaceleração suave
      case "follow":
        return "linear" // Linear para seguir o mouse (embora com velocidade 0, isso não importa)
      default:
        return "ease-out"
    }
  }

  // Determina se deve usar transição ou não
  const shouldUseTransition = transitionType !== "follow"

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
          ref={lightRef}
          className="absolute"
          style={{
            top: isHovering && isInActiveSection ? position.y : initialPosition.y,
            left: isHovering && isInActiveSection ? position.x : initialPosition.x,
            width: `${lightConfig.size}px`,
            height: `${lightConfig.size}px`,
            transform: "translate(-50%, -50%)",
            transition: shouldUseTransition
              ? `top ${getTransitionSpeed()}ms ${getTransitionEasing()}, left ${getTransitionSpeed()}ms ${getTransitionEasing()}`
              : "none", // Sem transição quando estiver seguindo o mouse
            background: `radial-gradient(circle at center, ${lightConfig.color} 0%, rgba(8, 16, 47, 0) 70%, rgba(8, 16, 47, 0) 100%)`,
            filter: `blur(${lightConfig.blur}px)`,
            willChange: "top, left",
          }}
          onTransitionEnd={handleTransitionEnd}
        />
      </div>

      <Header />

      <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center relative z-10">
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

