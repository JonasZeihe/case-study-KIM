import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

// Styled Components
const StyledText = styled.span`
  margin: 0;
  padding: 0;
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  color: ${({ color, theme }) => color || theme.colors.neutral.dark};

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
      case "caption":
        return css`
          font-size: ${theme.typography.fontSize.caption};
          font-weight: ${theme.typography.fontWeight.light};
          line-height: ${theme.typography.lineHeight.relaxed};
        `;
      default:
        return css`
          font-size: ${theme.typography.fontSize.body};
          font-weight: ${theme.typography.fontWeight.regular};
        `;
    }
  }}
`;

// Typography Component
const Typography = ({ variant = "body", color, children, ...rest }) => {
  return (
    <StyledText as={variant} variant={variant} color={color} {...rest}>
      {children}
    </StyledText>
  );
};

// Prop Types
Typography.propTypes = {
  variant: PropTypes.oneOf(["h1", "h2", "h3", "body", "caption"]),
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Typography;
