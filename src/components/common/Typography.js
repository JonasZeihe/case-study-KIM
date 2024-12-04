import React from 'react';
import styled, { css } from 'styled-components';

// Styled Component für die Typografie
const StyledTypography = styled.span`
  margin: 0;
  padding: 0;

  // Farbe aus dem Theme
  color: ${({ theme, color }) => {
    if (!color) return theme.colors.primary.main; // Fallback zu Primary Main
    const [colorKey, shade] = color.split('.');
    const themeColor = theme.colors[colorKey]?.[shade];
    if (!themeColor) {
      console.warn(
        `Farbe "${color}" wurde nicht im Theme gefunden. Fallback auf "primary.main".`
      );
    }
    return themeColor || theme.colors.primary.main;
  }};

  text-align: ${({ align }) => align || 'left'};
  line-height: ${({ theme, lineHeight }) =>
    lineHeight || theme.typography.lineHeight.normal};

  ${({ variant, theme }) => {
    const variantStyles = {
      h1: css`
        font-size: ${theme.typography.fontSize.h1};
        font-weight: ${theme.typography.fontWeight.bold};
        line-height: ${theme.typography.lineHeight.tight};
        margin-bottom: ${theme.spacing(6)};
      `,
      h2: css`
        font-size: ${theme.typography.fontSize.h2};
        font-weight: ${theme.typography.fontWeight.bold};
        line-height: ${theme.typography.lineHeight.tight};
        margin-bottom: ${theme.spacing(5)};
      `,
      h3: css`
        font-size: ${theme.typography.fontSize.h3};
        font-weight: ${theme.typography.fontWeight.medium};
        line-height: ${theme.typography.lineHeight.normal};
        margin-bottom: ${theme.spacing(4)};
      `,
      caption: css`
        font-size: ${theme.typography.fontSize.small};
        font-weight: ${theme.typography.fontWeight.light};
        line-height: ${theme.typography.lineHeight.tight};
        color: ${theme.colors.neutral.medium};
      `,
      body: css`
        font-size: ${theme.typography.fontSize.body};
        font-weight: ${theme.typography.fontWeight.regular};
        line-height: ${theme.typography.lineHeight.normal};
        margin-bottom: ${theme.spacing(3)};
      `,
    };

    if (!variantStyles[variant]) {
      console.warn(
        `Variant "${variant}" ist nicht definiert. Fallback auf "body".`
      );
    }

    return variantStyles[variant] || variantStyles.body;
  }}
`;

// Funktionale Typography-Komponente
function Typography({
  variant = 'body',
  color = 'neutral.dark',
  align = 'left',
  lineHeight,
  children,
}) {
  // Tag-Mapping
  const tagMap = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    caption: 'span',
    body: 'p',
  };

  const asTag = tagMap[variant] || 'p';

  return (
    <StyledTypography
      as={asTag}
      variant={variant}
      color={color}
      align={align}
      lineHeight={lineHeight}
    >
      {children}
    </StyledTypography>
  );
}

export default Typography;
