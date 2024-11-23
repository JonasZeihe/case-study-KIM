import React from 'react';
import styled from 'styled-components';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaArrowUp,
} from 'react-icons/fa';
import logoLarge from '../assets/images/KIM_logo_large.png';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FooterWrapper>
      <FooterContent>
        {/* Logo und Beschreibung */}
        <FooterTop>
          <Logo src={logoLarge} alt="KIM Logo" />
          <FooterDescription>
            Die App für echte Verbindungen. Entwickelt mit dem Ziel, Freundschaften
            zu fördern, die auf Persönlichkeit und Authentizität basieren.
          </FooterDescription>
        </FooterTop>

        <FooterGrid>
          {/* Quick Links */}
          <FooterColumn>
            <FooterTitle>Schnellzugriff</FooterTitle>
            <FooterLinks>
              {['Einführung', 'Projektüberblick', 'Entdeckungsphase', 'Reflexion'].map(
                (item, index) => (
                  <FooterLink
                    key={index}
                    href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                  >
                    {item}
                  </FooterLink>
                )
              )}
            </FooterLinks>
          </FooterColumn>

          {/* Kontakt */}
          <FooterColumn>
            <FooterTitle>Kontakt</FooterTitle>
            <FooterLinks>
              <FooterLink href="mailto:contact@kim-app.com">
                contact@kim-app.com
              </FooterLink>
              <FooterLink href="tel:+49123456789">+49 123 456 789</FooterLink>
            </FooterLinks>
            <SocialIcons>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </SocialIcons>
          </FooterColumn>

          {/* Rechtliches */}
          <FooterColumn>
            <FooterTitle>Rechtliches</FooterTitle>
            <FooterLinks>
              <FooterLink href="#impressum">Impressum</FooterLink>
              <FooterLink href="#datenschutz">Datenschutz</FooterLink>
            </FooterLinks>
          </FooterColumn>
        </FooterGrid>
      </FooterContent>

      {/* Copyright & Scroll-to-Top */}
      <FooterBottom>
        <Copyright>
          © {new Date().getFullYear()} KIM App. Alle Rechte vorbehalten.
        </Copyright>
        <ScrollToTopButton onClick={scrollToTop}>
          <FaArrowUp />
        </ScrollToTopButton>
      </FooterBottom>
    </FooterWrapper>
  );
}

// Styled Components
const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.neutral.darkest};
  color: ${({ theme }) => theme.colors.neutral.light};
  padding: ${({ theme }) => theme.spacing(6)} ${({ theme }) => theme.spacing(4)};
`;

const FooterContent = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
`;

const FooterTop = styled.div`
  text-align: center;
`;

const Logo = styled.img`
  height: 60px;
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;

const FooterDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  color: ${({ theme }) => theme.colors.neutral.medium};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing(5)};
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
`;

const FooterTitle = styled.h4`
  font-size: ${({ theme }) => theme.typography.fontSize.h3};
  color: ${({ theme }) => theme.colors.accent.main};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const FooterLink = styled.a`
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  color: ${({ theme }) => theme.colors.neutral.light};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent.main};
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};

  a {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.neutral.light};
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.accent.main};
    }
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.neutral.medium};
  padding-top: ${({ theme }) => theme.spacing(3)};
`;

const Copyright = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.detail};
  color: ${({ theme }) => theme.colors.neutral.medium};
`;

const ScrollToTopButton = styled.button`
  background: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.neutral.white};
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.dark};
    transform: translateY(-5px);
  }
`;
