import React from 'react';
import styled from 'styled-components';

const WrapperContainer = styled.div`
  /* Hintergrundfarbe oder Gradient */
  background: ${({ theme, gradient, backgroundColor }) => {
    if (gradient) return theme.gradients[gradient];
    if (backgroundColor) {
      const [color, shade] = backgroundColor.split('.');
      return theme.colors[color]?.[shade] || theme.colors.background.light;
    }
    return theme.colors.background.light;
  }};

  /* Standard-Styling */
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme, elevated }) =>
    elevated ? theme.boxShadow.medium : 'none'};
  padding: ${({ theme }) => theme.spacing(4)};
  margin: ${({ theme }) => theme.spacing(4)} auto; /* Standard Margin für äußere Abstände */
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.xl};

  /* Abstände zwischen mehreren Wrappern */
  & + & {
    margin-top: ${({ theme }) => theme.spacing(6)};
  }

  /* Medienanfragen für kleinere Bildschirme */
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing(3)};
    & + & {
      margin-top: ${({ theme }) => theme.spacing(5)};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing(3)};
    & + & {
      margin-top: ${({ theme }) => theme.spacing(4)};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing(2)};
    & + & {
      margin-top: ${({ theme }) => theme.spacing(3)};
    }
  }
`;

function Wrapper({ children, gradient, backgroundColor, elevated }) {
  return (
    <WrapperContainer
      gradient={gradient}
      backgroundColor={backgroundColor}
      elevated={elevated}
    >
      {children}
    </WrapperContainer>
  );
}

export default Wrapper;
