import React from "react";
import styled from "styled-components";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa";
import logoLarge from "../../assets/images/KIM_logo_large.png";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <FooterWrapper>
      <FooterContent>
        <FooterTop>
          <Logo src={logoLarge} alt="KIM Logo" />
          <FooterDescription>
            Die App für echte Verbindungen – für authentische Freundschaften und
            nachhaltige Begegnungen.
          </FooterDescription>
        </FooterTop>
        <FooterGrid>
          <FooterColumn>
            <FooterTitle>Kontakt</FooterTitle>
            <FooterLinks>
              <FooterLink href="mailto:contact@kim-app.com">
                contact@kim-app.com
              </FooterLink>
              <FooterLink href="tel:+49123456789">+49 123 456 789</FooterLink>
            </FooterLinks>
          </FooterColumn>
          <FooterColumn>
            <FooterTitle>Folge uns</FooterTitle>
            <SocialIcons>
              <IconLink href="https://facebook.com" aria-label="Facebook">
                <FaFacebook />
              </IconLink>
              <IconLink href="https://twitter.com" aria-label="Twitter">
                <FaTwitter />
              </IconLink>
              <IconLink href="https://instagram.com" aria-label="Instagram">
                <FaInstagram />
              </IconLink>
              <IconLink href="https://linkedin.com" aria-label="LinkedIn">
                <FaLinkedin />
              </IconLink>
            </SocialIcons>
          </FooterColumn>
        </FooterGrid>
      </FooterContent>
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
  background: ${({ theme }) => theme.colors.primary.dark};
  color: ${({ theme }) => theme.colors.neutral.white};
  padding: ${({ theme }) => theme.spacing(8)};
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
  color: ${({ theme }) => theme.colors.neutral.light};
`;

const FooterGrid = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(10)};
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h4`
  font-size: ${({ theme }) => theme.typography.fontSize.h3};
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.neutral.white};
  &:hover {
    color: ${({ theme }) => theme.colors.accent.main};
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
`;

const IconLink = styled.a`
  color: ${({ theme }) => theme.colors.neutral.white};
  &:hover {
    color: ${({ theme }) => theme.colors.accent.main};
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ScrollToTopButton = styled.button`
  color: ${({ theme }) => theme.colors.neutral.white};
  &:hover {
    color: ${({ theme }) => theme.colors.accent.main};
  }
`;

const Copyright = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.detail};
`;
