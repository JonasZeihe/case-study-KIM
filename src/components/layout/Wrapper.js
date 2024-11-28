import React from "react";
import styled from "styled-components"; // Styled Components importieren
import PropTypes from "prop-types"; // PropTypes importieren


const WrapperContainer = styled.div`
 
/* Grundlegendes Layout */
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
  padding: ${({ padding, theme }) => padding || theme.spacing(6)};
  display: flex;
  flex-direction: column;
  gap: ${({ gap, theme }) => gap || theme.spacing(6)};
  align-items: ${({ textAlign }) =>
    textAlign === "left"
      ? "flex-start"
      : textAlign === "right"
      ? "flex-end"
      : "center"};
  justify-content: ${({ justify }) => justify || "center"};

  /* Dynamischer Hintergrund */
  background: ${({ gradient, theme, background }) =>
    gradient
      ? theme.gradients[gradient] || theme.colors.background.lightest
      : background || theme.colors.background.light};
  color: ${({ textColor, theme }) => textColor || theme.colors.neutral.darkest};

  /* Schatten und Border */
  box-shadow: ${({ shadow, theme }) => shadow || theme.boxShadow.medium};
  border-radius: ${({ borderRadius, theme }) =>
    borderRadius || theme.borderRadius.large};

  /* Optional Overlay */
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
      opacity: 0.5;
      z-index: 1;
    }
  `}

  /* Varianten-Styling */
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

  /* Responsive Anpassungen */
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing(4)};
    gap: ${({ theme }) => theme.spacing(4)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing(3)};
    gap: ${({ theme }) => theme.spacing(3)};
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
  shadow,
  borderRadius,
  justify = "center",
}) => {
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
