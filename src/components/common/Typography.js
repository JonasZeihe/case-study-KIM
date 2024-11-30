import React from 'react';
import styled, { css } from 'styled-components';

// Styled Components
const StyledTypography = styled.span`
  margin: 0;
  padding: 0;
  color: ${({ theme, color }) =>
    theme.colors[color]?.main || theme.colors.neutral.white};
  text-align: ${({ align }) => align || 'left'};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};

  ${({ variant, theme }) => {
    switch (variant) {
      case 'h1':
        return css`
          font-size: clamp(
            ${theme.typography.fontSize.h1Small},
            5vw,
            ${theme.typography.fontSize.h1}
          );
          font-weight: ${theme.typography.fontWeight.bold};
          margin-bottom: ${theme.spacing(6)};
        `;
      case 'h2':
        return css`
          font-size: clamp(
            ${theme.typography.fontSize.h2Small},
            4vw,
            ${theme.typography.fontSize.h2}
          );
          font-weight: ${theme.typography.fontWeight.bold};
          margin-bottom: ${theme.spacing(5)};
        `;
      case 'h3':
        return css`
          font-size: clamp(
            ${theme.typography.fontSize.h3Small},
            3.5vw,
            ${theme.typography.fontSize.h3}
          );
          font-weight: ${theme.typography.fontWeight.medium};
          margin-bottom: ${theme.spacing(4)};
        `;
      case 'caption':
        return css`
          font-size: ${theme.typography.fontSize.small};
          font-weight: ${theme.typography.fontWeight.light};
          color: ${theme.colors.neutral.medium};
        `;
      default:
        return css`
          font-size: ${theme.typography.fontSize.body};
          font-weight: ${theme.typography.fontWeight.regular};
        `;
    }
  }}
`;

function Typography({
  variant = 'body',
  color = 'neutral',
  align = 'left',
  children,
}) {
  const tagMap = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    caption: 'span',
    body: 'p',
  };
  const asTag = tagMap[variant] || 'p';

  return (
    <StyledTypography as={asTag} variant={variant} color={color} align={align}>
      {children}
    </StyledTypography>
  );
}

export default Typography;
