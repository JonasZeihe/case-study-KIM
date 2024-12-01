import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import SmoothScroller from '../utilities/SmoothScroller';
import logoDesktop from '../../assets/images/KIM_logo_large.png';
import logoMobile from '../../assets/images/KIM_logo_small.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useTheme();

  const sections = [
    { id: 'introduction', label: 'Einführung' },
    { id: 'project-overview', label: 'Projektüberblick' },
    { id: 'research', label: 'Entdeckungsphase' },
    { id: 'architecture', label: 'Architektur' },
    { id: 'ux-process', label: 'UX-Prozess' },
    { id: 'final-design', label: 'Finales Design' },
    { id: 'reflection', label: 'Reflexion' },
  ];

  const handleLogoClick = () => {
    document
      .getElementById('introduction')
      ?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const renderNavItems = (isMobile) =>
    sections.map(({ id, label }) => (
      <SmoothScroller key={id} targetId={id}>
        <NavItem
          isMobile={isMobile}
          onClick={() => isMobile && setMenuOpen(false)}
        >
          {label}
        </NavItem>
      </SmoothScroller>
    ));

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo
          src={
            menuOpen || window.innerWidth >= parseInt(theme.breakpoints.md, 10)
              ? logoDesktop
              : logoMobile
          }
          alt="KIM Logo"
          onClick={handleLogoClick}
        />
        <DesktopNav>{renderNavItems(false)}</DesktopNav>
        <MobileMenuButton onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </MobileMenuButton>
      </HeaderContent>
      {menuOpen && <MobileMenu>{renderNavItems(true)}</MobileMenu>}
    </HeaderContainer>
  );
}

// **Styles**
const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: ${({ theme }) => theme.colors.primary.main};
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
`;

const HeaderContent = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing(4)};

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
    isMobile ? theme.colors.neutral.white : theme.colors.neutral.white};
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;

  &::after {
    content: '';
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
    color: ${({ theme }) => theme.colors.neutral.white};
    padding: ${({ theme }) => theme.spacing(1)};
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.primary.dark};
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(4)} 0;
  gap: ${({ theme }) => theme.spacing(3)};
  z-index: 999;
`;
