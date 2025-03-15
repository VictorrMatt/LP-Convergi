"use client"

import { useState, useEffect } from "react"

export function useMobile(breakpoint = 768) {
  // Inicializa como true para garantir que o efeito não seja renderizado durante o SSR
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    // Função para verificar se o dispositivo é móvel
    const checkMobile = () => {
      // Verifica a largura da tela (método mais confiável)
      const isMobileByWidth = window.innerWidth < breakpoint

      // Verifica se é um dispositivo de toque
      const isTouchDevice =
        "ontouchstart" in window || navigator.maxTouchPoints > 0 || (navigator as any).msMaxTouchPoints > 0

      // Verifica o user agent para dispositivos móveis
      const isMobileByAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

      // Considera móvel se qualquer uma das condições for verdadeira
      setIsMobile(isMobileByWidth || isTouchDevice || isMobileByAgent)
    }

    // Verifica inicialmente
    checkMobile()

    // Adiciona listener para redimensionamento
    window.addEventListener("resize", checkMobile)

    // Remove listener ao desmontar
    return () => window.removeEventListener("resize", checkMobile)
  }, [breakpoint])

  return isMobile
}

