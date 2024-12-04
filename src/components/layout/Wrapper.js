import React from 'react';
import styled from 'styled-components';

const WrapperContainer = styled.div`
  background: ${({ theme, gradient, backgroundColor }) => {
    if (gradient) return theme.gradients[gradient];
    if (backgroundColor) {
      const [color, shade] = backgroundColor.split('.');
      return theme.colors[color]?.[shade] || theme.colors.background.light;
    }
    return theme.colors.background.light;
  }};

  border-radius: ${({ theme }) => theme.borderRadius.medium};

  box-shadow: ${({ theme, elevated }) =>
    elevated ? theme.boxShadow.medium : 'none'};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing(3)};
    & + & {
      margin-top: ${({ theme }) => theme.spacing(3)};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing(3)};
    & + & {
      margin-top: ${({ theme }) => theme.spacing(3)};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing(3)};
    & + & {
      margin-top: ${({ theme }) => theme.spacing(2)};
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
