import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

// Styled Components
const StyledText = styled.span`
  margin: 0;
  padding: 0;
  color: ${({ color, theme }) => color || theme.colors.neutral.white};
  text-align: ${({ align }) => align || "left"};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};

  ${({ variant, theme }) => {
    switch (variant) {
      case "h1":
        return css`
          font-size: ${theme.typography.fontSize.h1};
          font-weight: ${theme.typography.fontWeight.bold};
          line-height: ${theme.typography.lineHeight.tight};
          margin-bottom: ${theme.spacing(6)};
        `;
      case "h2":
        return css`
          font-size: ${theme.typography.fontSize.h2};
          font-weight: ${theme.typography.fontWeight.bold};
          margin-bottom: ${theme.spacing(5)};
        `;
      case "h3":
        return css`
          font-size: ${theme.typography.fontSize.h3};
          font-weight: ${theme.typography.fontWeight.medium};
          margin-bottom: ${theme.spacing(4)};
        `;
      case "lead":
        return css`
          font-size: ${theme.typography.fontSize.body};
          font-weight: ${theme.typography.fontWeight.medium};
          color: ${theme.colors.primary.dark};
          margin-bottom: ${theme.spacing(3)};
        `;
      case "caption":
        return css`
          font-size: ${theme.typography.fontSize.small};
          font-weight: ${theme.typography.fontWeight.light};
          line-height: ${theme.typography.lineHeight.relaxed};
          color: ${theme.colors.neutral.medium};
        `;
      case "muted":
        return css`
          font-size: ${theme.typography.fontSize.body};
          color: ${theme.colors.neutral.medium};
        `;
      default:
        return css`
          font-size: ${theme.typography.fontSize.body};
          font-weight: ${theme.typography.fontWeight.regular};
        `;
    }
  }}

  /* Responsive Typografie */
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    ${({ variant, theme }) =>
      variant === "h1" &&
      css`
        font-size: calc(${theme.typography.fontSize.h1} * 0.8);
      `}
    ${({ variant, theme }) =>
      variant === "h2" &&
      css`
        font-size: calc(${theme.typography.fontSize.h2} * 0.85);
      `}
    ${({ variant, theme }) =>
      variant === "h3" &&
      css`
        font-size: calc(${theme.typography.fontSize.h3} * 0.9);
      `}
  }
`;

// React Component
const Typography = ({ variant = "body", color, align, children, ...rest }) => {
  const tagMap = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    lead: "p",
    caption: "span",
    muted: "span",
    body: "p",
  };
  const asTag = tagMap[variant] || "p";

  return (
    <StyledText as={asTag} variant={variant} color={color} align={align} {...rest}>
      {children}
    </StyledText>
  );
};

// Prop Types
Typography.propTypes = {
  variant: PropTypes.oneOf(["h1", "h2", "h3", "body", "caption", "lead", "muted"]),
  color: PropTypes.string,
  align: PropTypes.oneOf(["left", "center", "right"]),
  children: PropTypes.node.isRequired,
};

export default Typography;
