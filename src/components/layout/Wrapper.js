import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const WrapperContainer = styled.div`
  /* Grundlegendes Layout */
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(6)} ${({ theme }) => theme.spacing(4)};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
  align-items: ${({ textAlign }) =>
    textAlign === "left" ? "flex-start" : textAlign === "right" ? "flex-end" : "center"};
  justify-content: ${({ justify }) => justify || "center"};

  /* Farbgebung & Hintergrund */
  background: ${({ background, theme }) =>
    background
      ? background.includes("url")
        ? `${background} center/cover no-repeat`
        : background
      : theme.colors.background.light};
  color: ${({ theme, textColor }) => textColor || theme.colors.neutral.dark};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.boxShadow.medium};

  /* Dynamisches Padding für spezielle Varianten */
  ${({ variant, theme }) =>
    variant === "hero" &&
    `
    padding: ${theme.spacing(8)} ${theme.spacing(4)};
    text-align: center;
  `}

  ${({ variant, theme }) =>
    variant === "header" &&
    `
    padding: ${theme.spacing(10)} ${theme.spacing(6)};
  `}

  /* Responsive Anpassungen */
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing(4)};
    gap: ${({ theme }) => theme.spacing(4)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing(3)};
    gap: ${({ theme }) => theme.spacing(3)};
  }
`;

const Overlay = styled.div`
  background: ${({ overlayColor }) => overlayColor || "rgba(0, 0, 0, 0.5)"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  border-radius: ${({ theme }) => theme.borderRadius.large};
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: ${({ theme }) => theme.breakpoints.lg};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: ${({ textAlign }) =>
    textAlign === "left" ? "flex-start" : textAlign === "right" ? "flex-end" : "center"};
  gap: ${({ theme }) => theme.spacing(3)};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize.h1};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.h3};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  max-width: 800px;
  text-align: ${({ textAlign }) => textAlign || "center"};
`;

const Wrapper = ({
  children,
  title,
  subtitle,
  background,
  overlayColor,
  textAlign = "center",
  variant = "default",
  justify = "center",
}) => {
  return (
    <WrapperContainer
      background={background}
      textAlign={textAlign}
      variant={variant}
      justify={justify}
    >
      {overlayColor && <Overlay overlayColor={overlayColor} />}
      <ContentWrapper textAlign={textAlign}>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle textAlign={textAlign}>{subtitle}</Subtitle>}
        {children}
      </ContentWrapper>
    </WrapperContainer>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  background: PropTypes.string,
  overlayColor: PropTypes.string,
  textAlign: PropTypes.oneOf(["left", "center", "right"]),
  variant: PropTypes.oneOf(["default", "hero", "header"]),
  justify: PropTypes.oneOf(["flex-start", "center", "flex-end"]),
};

export default Wrapper;
