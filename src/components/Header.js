import React from "react";
import styled from "styled-components";
import logoDesktop from "../assets/images/KIM_logo_large.png";
import logoMobile from "../assets/images/KIM_logo_small.png";

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.9); /* Transparenz */
  backdrop-filter: blur(10px); /* Glasmorphism */
  box-shadow: var(--box-shadow-light);
  padding: var(--spacing-16);
`;

const HeaderContent = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;

  @media (max-width: var(--breakpoint-md)) {
    height: 40px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: var(--spacing-24);

  @media (max-width: var(--breakpoint-md)) {
    display: none; /* Navigation wird im Mobile-View versteckt */
  }
`;

const NavLink = styled.a`
  font: var(--font-body);
  color: var(--neutral-6);
  text-decoration: none;
  padding: var(--spacing-8);
  transition: color 0.3s ease-in-out;

  &:hover {
    color: var(--primary-3);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--neutral-6);

  @media (max-width: var(--breakpoint-md)) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--neutral-1);
  box-shadow: var(--box-shadow-medium);
  padding: var(--spacing-16);

  &.active {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-16);
  }
`;

export default function Header() {
  const sections = [
    { id: "introduction", label: "Einführung" },
    { id: "project-overview", label: "Projektüberblick" },
    { id: "research", label: "Entdeckungsphase" },
    { id: "architecture", label: "Architektur" },
    { id: "ux-process", label: "UX-Prozess" },
    { id: "final-design", label: "Finales Design" },
    { id: "reflection", label: "Reflexion" },
  ];

  const handleScroll = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMobileMenu = () => {
    const menu = document.querySelector(".mobile-menu");
    menu.classList.toggle("active");
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo
          src={window.innerWidth >= 768 ? logoDesktop : logoMobile}
          alt="KIM Logo"
        />
        <Nav>
          {sections.map((section) => (
            <NavLink
              key={section.id}
              onClick={() => handleScroll(section.id)}
            >
              {section.label}
            </NavLink>
          ))}
        </Nav>
        <MobileMenuButton onClick={toggleMobileMenu}>☰</MobileMenuButton>
      </HeaderContent>
      <MobileMenu className="mobile-menu">
        {sections.map((section) => (
          <NavLink
            key={section.id}
            onClick={() => {
              toggleMobileMenu();
              handleScroll(section.id);
            }}
          >
            {section.label}
          </NavLink>
        ))}
      </MobileMenu>
    </HeaderContainer>
  );
}
