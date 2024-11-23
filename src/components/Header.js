import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logoDesktop from '../assets/images/KIM_logo_large.png';
import logoMobile from '../assets/images/KIM_logo_small.png';
import Button from './Button'; // Button aus der Komponentenbibliothek

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const sections = [
    { id: 'introduction', label: 'Einführung' },
    { id: 'project-overview', label: 'Projektüberblick' },
    { id: 'research', label: 'Entdeckungsphase' },
    { id: 'architecture', label: 'Architektur' },
    { id: 'ux-process', label: 'UX-Prozess' },
    { id: 'final-design', label: 'Finales Design' },
    { id: 'reflection', label: 'Reflexion' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <HeaderContent>
        <Logo
          src={window.innerWidth >= 768 ? logoDesktop : logoMobile}
          alt="KIM Logo"
        />
        <Nav>
          {sections.map((section) => (
            <StyledNavLink
              key={section.id}
              onClick={() => handleScrollToSection(section.id)}
            >
              {section.label}
            </StyledNavLink>
          ))}
        </Nav>
        <MobileMenuButton onClick={toggleMenu}>
          {menuOpen ? '✕' : '☰'}
        </MobileMenuButton>
      </HeaderContent>
      {menuOpen && (
        <MobileMenu>
          {sections.map((section) => (
            <StyledNavLink
              key={section.id}
              onClick={() => handleScrollToSection(section.id)}
            >
              {section.label}
            </StyledNavLink>
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
  backdrop-filter: blur(10px);
  box-shadow: ${({ isScrolled, theme }) =>
    isScrolled ? theme.boxShadow.medium : theme.boxShadow.light};
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(4)};
  transition: background 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;
`;

const HeaderContent = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 40px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing(5)};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const StyledNavLink = styled(Button).attrs({
  variant: 'text', // Wir nutzen die Textvariante der Button-Komponente
})`
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  color: ${({ theme }) => theme.colors.primary.dark};
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
    color: ${({ theme }) => theme.colors.neutral.white};
  }
`;

const MobileMenuButton = styled(Button).attrs({
  variant: 'icon',
})`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary.dark};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
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

