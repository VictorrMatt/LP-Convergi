import React from "react";
import { PurpleShine } from "../icons";

// Estilos CSS
const styles = `
.features-banner-container {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}

.features-banner {
  background: #19204B;
  overflow: hidden;
  position: relative;
  width: 100%;
  padding: 1.5rem 2rem;
  box-sizing: border-box;
}

.slide-track {
  animation: scroll 40s linear infinite;
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
  100% { transform: translateX(calc(-100% / 2)); }
}

/* Gradientes para criar efeito de fade nos lados */
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
`;

const navigationItems = [
  "Intelligent Interfaces",
  "Adaptive UX",
  "AI-Driven Design",
  "Human-Centric",
  "Smart Automations",
  "Intuitive Journeys",
  "Visual Simplicity",
  "Seamless Interactions",
];

const FeaturesBanner: React.FC = () => {
  return (
    <>
      <style>{styles}</style>
      <div className="features-banner-container">
        <section className="features-banner">
          <div className="slide-track">
            {/* Duplicamos os itens para criar o efeito de loop infinito */}
            {[...navigationItems, ...navigationItems].map((item, index) => (
              <div className="slide" key={`${item}-${index}`}>
                <span>{item}</span>
                <PurpleShine />
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default FeaturesBanner;