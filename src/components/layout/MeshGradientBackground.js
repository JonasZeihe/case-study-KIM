import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Parallax Background Component
const MeshGradientBackground = () => {
  const [offsetY, setOffsetY] = useState(0);

  // Scroll Event Handler
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BackgroundContainer>
      <GradientLayer offsetY={offsetY} />
    </BackgroundContainer>
  );
};

// Styled Components
const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
`;

const GradientLayer = styled.div`
  position: absolute;
  width: 300%;
  height: 300%;
  background: 
    radial-gradient(
      circle at 20% 30%,
      ${({ theme }) => theme.colors.primary.main} 0%,
      ${({ theme }) => theme.colors.primary.lightest} 40%,
      transparent 80%
    ),
    radial-gradient(
      circle at 70% 60%,
      ${({ theme }) => theme.colors.accent.main} 0%,
      ${({ theme }) => theme.colors.accent.dark} 50%,
      transparent 90%
    ),
    radial-gradient(
      circle at 40% 70%,
      ${({ theme }) => theme.colors.secondary.main} 0%,
      ${({ theme }) => theme.colors.secondary.light} 50%,
      transparent 100%
    ),
    radial-gradient(
      circle at 90% 20%,
      ${({ theme }) => theme.colors.background.main} 0%,
      ${({ theme }) => theme.colors.background.dark} 60%,
      transparent 100%
    );
  filter: blur(80px);
  transform: translate(${({ offsetY }) => offsetY * 0.05}px, ${({ offsetY }) => offsetY * 0.05}px);
  animation: subtleMovement 15s infinite alternate ease-in-out;

  @keyframes subtleMovement {
    0% {
      transform: translate(-10%, -10%);
    }
    50% {
      transform: translate(10%, 5%);
    }
    100% {
      transform: translate(-10%, -5%);
    }
  }
`;

export default MeshGradientBackground;
