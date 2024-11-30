import React, { useState, useEffect } from "react";
import styled, { useTheme } from "styled-components";
import SmoothScroller from "../utilities/SmoothScroller";
import logoDesktop from "../../assets/images/KIM_logo_large.png";
import logoMobile from "../../assets/images/KIM_logo_small.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const theme = useTheme();

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
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    document.getElementById("introduction")?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const renderNavItems = (isMobile) =>
    sections.map(({ id, label }) => (
      <SmoothScroller key={id} targetId={id}>
        <NavItem isMobile={isMobile} onClick={() => isMobile && setMenuOpen(false)}>
          {label}
        </NavItem>
      </SmoothScroller>
    ));

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <HeaderContent>
        <Logo
          src={menuOpen || window.innerWidth >= parseInt(theme.breakpoints.md) ? logoDesktop : logoMobile}
          alt="KIM Logo"
          onClick={handleLogoClick}
        />
        <DesktopNav>{renderNavItems(false)}</DesktopNav>
        <MobileMenuButton onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </MobileMenuButton>
      </HeaderContent>
      <MobileMenu isOpen={menuOpen}>{renderNavItems(true)}</MobileMenu>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: clamp(4rem, 10vw, 5rem);
  z-index: 1000;
  background: ${({ isScrolled, theme }) =>
    isScrolled ? theme.colors.primary.main : theme.colors.neutral.white};
  box-shadow: ${({ isScrolled, theme }) => (isScrolled ? theme.boxShadow.medium : "none")};
  transition: background 0.3s ease, box-shadow 0.3s ease;
`;

const HeaderContent = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing(3)};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.spacing(2)};
  }
`;

const Logo = styled.img`
  height: clamp(3rem, 5vw, 4rem);
  cursor: pointer;
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const NavItem = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  color: ${({ isMobile, theme }) =>
    isMobile ? theme.colors.neutral.white : theme.colors.neutral.darkest};
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -0.25rem;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.accent.main};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize.h3};
    text-align: center;
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary.dark};
    padding: ${({ theme }) => theme.spacing(1)};
  }
`;

const MobileMenu = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  position: fixed;
  top: clamp(4rem, 10vw, 5rem);
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.neutral.white};
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
  padding: ${({ theme }) => theme.spacing(4)} 0;
  gap: ${({ theme }) => theme.spacing(3)};
  text-align: center;
`;
