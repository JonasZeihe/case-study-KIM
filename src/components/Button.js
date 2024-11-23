import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

// Styled Components
const StyledButton = styled.button`
  font-family: ${(props) => props.theme?.typography?.fontFamily?.button || "'Arial', sans-serif"};
  font-size: ${(props) =>
    props.size === "small"
      ? props.theme?.typography?.fontSize?.small || "0.875rem" // Fallback: 14px
      : props.size === "large"
      ? props.theme?.typography?.fontSize?.large || "1.25rem" // Fallback: 20px
      : props.theme?.typography?.fontSize?.body || "1rem"}; // Fallback: 16px
  padding: ${(props) =>
    props.size === "small"
      ? `${props.theme?.spacing?.(2) || "0.5rem"} ${props.theme?.spacing?.(3) || "0.75rem"}`
      : props.size === "large"
      ? `${props.theme?.spacing?.(4) || "1rem"} ${props.theme?.spacing?.(6) || "1.5rem"}`
      : `${props.theme?.spacing?.(3) || "0.75rem"} ${props.theme?.spacing?.(5) || "1.25rem"}`};
  border-radius: ${(props) => props.theme?.borderRadius?.medium || "0.5rem"}; // Fallback: 8px
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme?.spacing?.(2) || "0.5rem"}; // Fallback: 8px
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  /* Button Variants */
  ${({ $variant, theme }) => {
    switch ($variant) {
      case "secondary":
        return css`
          background: ${theme?.colors?.secondary?.main || "#FD7A26"};
          color: ${theme?.colors?.neutral?.white || "#FFFFFF"};
          &:hover {
            background: ${theme?.colors?.secondary?.dark || "#D35D10"};
            box-shadow: ${theme?.boxShadow?.medium || "0px 4px 8px rgba(0, 0, 0, 0.2)"};
          }
        `;
      case "icon":
        return css`
          background: transparent;
          color: ${theme?.colors?.primary?.main || "#3441F9"};
          padding: ${theme?.spacing?.(2) || "0.5rem"};
          border-radius: 50%;
          &:hover {
            background: ${theme?.colors?.neutral?.light || "#E0E0E0"};
          }
        `;
      default: // Primary is the default
        return css`
          background: ${theme?.colors?.primary?.main || "#3441F9"};
          color: ${theme?.colors?.neutral?.white || "#FFFFFF"};
          &:hover {
            background: ${theme?.colors?.primary?.dark || "#1F2CCB"};
            box-shadow: ${theme?.boxShadow?.medium || "0px 4px 8px rgba(0, 0, 0, 0.2)"};
          }
        `;
    }
  }}

  /* Disabled State */
  ${(props) =>
    props.disabled &&
    css`
      background: ${props.theme?.colors?.neutral?.medium || "#B3B3B3"};
      color: ${props.theme?.colors?.neutral?.dark || "#808080"};
      cursor: not-allowed;
      &:hover {
        background: ${props.theme?.colors?.neutral?.medium || "#B3B3B3"};
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
