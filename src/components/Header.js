import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SmoothScroller from "../components/SmoothScroller"; // SmoothScroller importieren
import logoDesktop from "../assets/images/KIM_logo_large.png";
import logoMobile from "../assets/images/KIM_logo_small.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const sections = [
    { id: "introduction", label: "Einführung" },
    { id: "project-overview", label: "Projektüberblick" },
    { id: "research", label: "Entdeckungsphase" },
    { id: "architecture", label: "Architektur" },
    { id: "ux-process", label: "UX-Prozess" },
    { id: "final-design", label: "Finales Design" },
    { id: "reflection", label: "Reflexion" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <HeaderContent>
        <Logo
          src={window.innerWidth >= 768 ? logoDesktop : logoMobile}
          alt="KIM Logo"
        />
        <DesktopNav>
          {sections.map(({ id, label }) => (
            <SmoothScroller key={id} targetId={id}>
              <NavItem>{label}</NavItem>
            </SmoothScroller>
          ))}
        </DesktopNav>
        <MobileMenuButton onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </MobileMenuButton>
      </HeaderContent>
      {menuOpen && (
        <MobileMenu>
          {sections.map(({ id, label }) => (
            <SmoothScroller key={id} targetId={id}>
              <NavItem onClick={() => setMenuOpen(false)}>{label}</NavItem>
            </SmoothScroller>
          ))}
        </MobileMenu>
      )}
    </HeaderContainer>
  );
}

// Styled Components
const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: ${({ isScrolled, theme }) =>
    isScrolled ? theme.colors.primary.main : theme.colors.neutral.white};
  color: ${({ isScrolled, theme }) =>
    isScrolled ? theme.colors.neutral.white : theme.colors.primary.dark};
  box-shadow: ${({ isScrolled, theme }) =>
    isScrolled ? theme.boxShadow.medium : "none"};
  transition: background 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
`;

const HeaderContent = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(3)};
`;

const Logo = styled.img`
  height: 50px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 40px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const NavItem = styled.button`
  background: none;
  border: none;
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  color: ${({ theme }) => theme.colors.primary.dark};
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent.main};
  }
`;

const MobileMenuButton = styled.button`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary.dark};
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.neutral.white};
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
  padding: ${({ theme }) => theme.spacing(4)};
  gap: ${({ theme }) => theme.spacing(3)};
`;
