import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

// Styled Components
const StyledButton = styled.button`
  font-family: ${({ theme }) => theme.typography.fontFamily.button};
  font-size: ${({ size, theme }) => {
    const sizes = {
      small: theme.typography.fontSize.caption,
      medium: theme.typography.fontSize.body,
      large: theme.typography.fontSize.h3,
    };
    return sizes[size] || sizes.medium;
  }};
  padding: ${({ size, theme }) => {
    const paddings = {
      small: `${theme.spacing(2)} ${theme.spacing(3)}`,
      medium: `${theme.spacing(3)} ${theme.spacing(5)}`,
      large: `${theme.spacing(4)} ${theme.spacing(6)}`,
    };
    return paddings[size] || paddings.medium;
  }};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  ${({ $variant, theme }) => {
    switch ($variant) {
      case "secondary":
        return css`
          background: ${theme.colors.secondary.main};
          color: ${theme.colors.neutral.white};
          &:hover {
            background: ${theme.colors.secondary.dark};
            box-shadow: ${theme.boxShadow.medium};
          }
        `;
      case "icon":
        return css`
          background: transparent;
          color: ${theme.colors.primary.main};
          padding: ${theme.spacing(2)};
          border-radius: 50%;
          &:hover {
            background: ${theme.colors.neutral.light};
          }
        `;
      default:
        return css`
          background: ${theme.colors.primary.main};
          color: ${theme.colors.neutral.white};
          &:hover {
            background: ${theme.colors.primary.dark};
            box-shadow: ${theme.boxShadow.medium};
          }
        `;
    }
  }}

  ${({ disabled, theme }) =>
    disabled &&
    css`
      background: ${theme.colors.neutral.medium};
      color: ${theme.colors.neutral.dark};
      cursor: not-allowed;
      &:hover {
        background: ${theme.colors.neutral.medium};
        box-shadow: none;
      }
    `}
`;

// Icon Wrapper
const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

// Button Component
const Button = ({ variant = "primary", size = "medium", disabled, icon, children, onClick }) => {
  return (
    <StyledButton $variant={variant} size={size} disabled={disabled} onClick={onClick}>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      {children}
    </StyledButton>
  );
};

// Prop Types
Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "icon"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;
