"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  maxHeight?: number; // Altura máxima opcional, não fixa
  showSlider?: boolean;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  maxHeight = 800, // Altura máxima, não fixa
  showSlider = false,
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const viewBeforeRef = useRef<HTMLDivElement>(null);
  const afterImageRef = useRef<HTMLImageElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Função para calcular e definir a altura do container
  const updateContainerDimensions = () => {
    if (
      containerRef.current &&
      afterImageRef.current &&
      afterImageRef.current.complete
    ) {
      const newWidth = containerRef.current.offsetWidth;

      // Definir altura com base na proporção da imagem
      const imgWidth = afterImageRef.current.naturalWidth;
      const imgHeight = afterImageRef.current.naturalHeight;

      if (imgWidth > 0 && imgHeight > 0) {
        // Calcular altura mantendo a proporção, mas não ultrapassando maxHeight
        const calculatedHeight = Math.min(
          (newWidth * imgHeight) / imgWidth,
          maxHeight
        );
        setContainerHeight(calculatedHeight);
        setContainerWidth(newWidth);
        setImagesLoaded(true);
      }
    }
  };

  useEffect(() => {
    setIsClient(true);

    // Inicializar após as imagens carregarem
    const afterImg = new Image();
    afterImg.src = afterImage;
    afterImg.onload = updateContainerDimensions;

    // Posicionar o slider inicialmente no meio
    if (containerRef.current) {
      const initialPosition = containerRef.current.offsetWidth / 2;
      if (sliderRef.current && viewBeforeRef.current) {
        gsap.set(sliderRef.current, { left: initialPosition });
        updateClipPath(initialPosition);
      }
    }

    // Adicionar listener para redimensionamento
    const handleResize = () => {
      updateContainerDimensions();

      // Manter a mesma posição percentual ao redimensionar
      if (sliderRef.current && viewBeforeRef.current && containerWidth > 0) {
        const currentPercentage = sliderRef.current.offsetLeft / containerWidth;
        const newPosition =
          currentPercentage * containerRef.current!.offsetWidth;
        gsap.set(sliderRef.current, { left: newPosition });
        updateClipPath(newPosition);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [afterImage, containerWidth, maxHeight]);

  // Atualizar clip-path com base na posição do slider
  const updateClipPath = (position: number) => {
    if (viewBeforeRef.current && containerRef.current) {
      const width = containerRef.current.offsetWidth;
      const percentage = (position / width) * 100;
      viewBeforeRef.current.style.clipPath = `inset(0 ${
        100 - percentage
      }% 0 0)`;
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
        },
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current && isMouseOver) {
      const rect = containerRef.current.getBoundingClientRect();
      const position = e.clientX - rect.left;

      // Garantir que a posição esteja dentro dos limites
      const boundedPosition = Math.max(0, Math.min(position, rect.width));

      // Atualizar posição do slider e clip path diretamente para resposta imediata
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

      // Atualizar posição do slider e clip path
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
      {/* Botões de comparação (comentados no original) */}
      {/* <ul className="flex justify-center gap-8 my-4">
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
      </ul> */}

      <div
        ref={containerRef}
        className="relative overflow-hidden cursor-col-resize w-full"
        style={{
          height: imagesLoaded ? `${containerHeight}px` : "auto",
          transition: "height 0.3s ease",
        }}
        onClick={handleClick}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        {/* After image (background) */}
        <div className="absolute top-0 left-0 w-full h-full z-10">
          <img
            ref={afterImageRef}
            src={afterImage || "/placeholder.svg"}
            alt="After"
            className="h-full w-full object-contain"
            onLoad={updateContainerDimensions}
          />
        </div>

        {/* Before image (foreground with clip) */}
        <div
          ref={viewBeforeRef}
          className="absolute top-0 left-0 w-full h-full overflow-hidden z-20"
          style={{ clipPath: "inset(0 50% 0 0)" }} // Initial clip-path
        >
          <img
            src={beforeImage || "/placeholder.svg"}
            alt="Before"
            className="h-full w-full object-contain"
            onLoad={updateContainerDimensions}
          />
        </div>

        {/* Slider handle - can be invisible */}
        <div
          ref={sliderRef}
          className={`absolute top-0 h-full z-30 ${
            showSlider ? "w-1 bg-white" : "w-0"
          }`}
          style={{
            boxShadow: showSlider ? "0 0 2px rgba(0,0,0,0.6)" : "none",
          }}
        />
      </div>
    </div>
  );
}
