import React, { useState, useEffect } from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background: var(--secondary-3);
  color: var(--neutral-1);
  padding: var(--spacing-32) var(--spacing-16);
  text-align: center;
  border-radius: var(--border-radius-large);
  box-shadow: var(--box-shadow-light);
  margin-top: var(--spacing-40);
  position: relative;

  @media (max-width: var(--breakpoint-md)) {
    position: sticky;
    bottom: 0;
    z-index: 1000;
  }
`;

const FooterGrid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-24);
  max-width: var(--max-width);
  margin: 0 auto;

  @media (max-width: var(--breakpoint-md)) {
    flex-direction: column;
    gap: var(--spacing-16);
  }
`;

const FooterSection = styled.div`
  flex: 1;

  & h3 {
    font: var(--font-headline-2);
    margin-bottom: var(--spacing-16);
  }

  & p, & a {
    font: var(--font-detail);
    color: var(--neutral-1);
    text-decoration: none;
    line-height: 1.6;
    transition: color 0.3s ease-in-out;
  }

  & a:hover {
    color: var(--primary-3);
  }
`;

const ScrollToTopButton = styled.button`
  position: absolute;
  right: var(--spacing-32);
  bottom: var(--spacing-32);
  width: 50px;
  height: 50px;
  background: var(--primary-3);
  color: var(--neutral-1);
  border: none;
  border-radius: 50%;
  box-shadow: var(--box-shadow-medium);
  cursor: pointer;
  opacity: ${(props) => (props.visible ? "1" : "0")};
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    background: var(--primary-4);
    box-shadow: var(--box-shadow-heavy);
    transform: translateY(-3px);
  }

  @media (max-width: var(--breakpoint-md)) {
    width: 40px;
    height: 40px;
  }
`;

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 300); // Button sichtbar nach 300px Scroll
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <FooterContainer>
      <FooterGrid>
        <FooterSection>
          <h3>About</h3>
          <p>
            I am Jonas Zeihe, a Full Stack Developer and Designer who focuses on
            crafting pristine and stunning user experiences.
          </p>
        </FooterSection>
        <FooterSection>
          <h3>Contact</h3>
          <p>
            Email: <a href="mailto:JonasZeihe@gmail.com">JonasZeihe@gmail.com</a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/jonaszeihe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/jonaszeihe
            </a>
          </p>
        </FooterSection>
        <FooterSection>
          <h3>Imprint</h3>
          <p>This is a placeholder for legal information.</p>
        </FooterSection>
      </FooterGrid>
      <ScrollToTopButton
        onClick={scrollToTop}
        visible={isVisible}
        aria-label="Scroll to top"
      >
        ↑
      </ScrollToTopButton>
    </FooterContainer>
  );
}
