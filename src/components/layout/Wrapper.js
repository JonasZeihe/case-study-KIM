import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const WrapperContainer = styled.section`
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
  padding: ${({ padding, theme }) => padding || theme.spacing(6)};
  display: flex;
  flex-direction: column;
  gap: ${({ gap, theme }) => gap || theme.spacing(4)};
  align-items: ${({ textAlign }) =>
    textAlign === "left"
      ? "flex-start"
      : textAlign === "right"
      ? "flex-end"
      : "center"};
  justify-content: ${({ justify }) => justify || "center"};

  /* Hintergrund und Farben */
  background: ${({ gradient, theme, background }) =>
    gradient
      ? theme.gradients[gradient] || theme.colors.background.light
      : background || theme.colors.background.light};
  color: ${({ textColor, theme }) => textColor || theme.colors.neutral.main};

  /* Schatten und Border */
  box-shadow: ${({ shadow, theme }) => shadow || "none"};
  border-radius: ${({ borderRadius, theme }) =>
    borderRadius || theme.borderRadius.medium};

  /* Trennung von Abschnitten */
  ${({ theme }) => `
    &:not(:last-of-type) {
      margin-bottom: ${theme.spacing(6)};
      border-bottom: 1px solid ${theme.colors.neutral.light};
    }
  `}

  /* Optionales Overlay */
  ${({ overlayColor }) =>
    overlayColor &&
    `
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${overlayColor};
      opacity: 0.4;
      z-index: 0;
    }
  `}

  /* Varianten */
  ${({ variant, theme }) =>
    variant === "hero" &&
    `
    padding: ${theme.spacing(8)};
    background: ${theme.gradients.primaryToSecondary};
    color: ${theme.colors.neutral.white};
    text-align: center;
  `}

  ${({ variant, theme }) =>
    variant === "header" &&
    `
    padding: ${theme.spacing(6)};
    background: ${theme.gradients.subtlePrimary};
    color: ${theme.colors.primary.dark};
  `}

  ${({ variant, theme }) =>
    variant === "section" &&
    `
    padding: ${theme.spacing(6)};
    background: ${theme.colors.background.dark};
    border-radius: ${theme.borderRadius.medium};
  `}

  /* Responsive Anpassungen */
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing(4)};
    gap: ${({ theme }) => theme.spacing(3)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing(3)};
    gap: ${({ theme }) => theme.spacing(2)};
    align-items: center;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: ${({ theme }) => theme.breakpoints.lg};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: ${({ textAlign }) =>
    textAlign === "left"
      ? "flex-start"
      : textAlign === "right"
      ? "flex-end"
      : "center"};
  gap: ${({ theme }) => theme.spacing(3)};
`;

const Wrapper = ({
  children,
  title,
  subtitle,
  variant = "default",
  gradient,
  background,
  textAlign = "center",
  textColor,
  padding,
  gap,
  overlayColor,
  shadow = "none",
  borderRadius,
  justify = "center",
}) => {
  if (!children) {
    console.error("Wrapper: Kein Inhalt übergeben.");
    return null;
  }

  return (
    <WrapperContainer
      variant={variant}
      gradient={gradient}
      background={background}
      textAlign={textAlign}
      textColor={textColor}
      padding={padding}
      gap={gap}
      overlayColor={overlayColor}
      shadow={shadow}
      borderRadius={borderRadius}
      justify={justify}
    >
      <ContentWrapper textAlign={textAlign}>
        {title && <h1>{title}</h1>}
        {subtitle && <p>{subtitle}</p>}
        {children}
      </ContentWrapper>
    </WrapperContainer>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  variant: PropTypes.oneOf(["default", "hero", "header", "section"]),
  gradient: PropTypes.string,
  background: PropTypes.string,
  textAlign: PropTypes.oneOf(["left", "center", "right"]),
  textColor: PropTypes.string,
  padding: PropTypes.string,
  gap: PropTypes.string,
  overlayColor: PropTypes.string,
  shadow: PropTypes.string,
  borderRadius: PropTypes.string,
  justify: PropTypes.string,
};

export default Wrapper;
