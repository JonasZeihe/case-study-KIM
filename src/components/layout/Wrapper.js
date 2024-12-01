import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const WrapperContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(6)};

  /* Background Handling */
  background: ${({ theme, gradient, backgroundColor }) => {
    if (gradient) {
      return theme.gradients[gradient]; // Gradient hat Vorrang
    }
    if (backgroundColor) {
      const [color, shade] = backgroundColor.split('.');
      return theme.colors[color]?.[shade] || theme.colors.background.light;
    }
    return theme.colors.background.light; // Standard-Background
  }};

  border-radius: ${({ theme }) => theme.borderRadius.medium};

  /* Box Shadow for Elevated Wrapper */
  box-shadow: ${({ theme, elevated }) =>
    elevated ? theme.boxShadow.medium : 'none'};

  /* Add Spacing Between Nested Wrappers */
  & + & {
    margin-top: ${({ theme }) => theme.spacing(6)}; /* Default spacing */
  }

  /* Responsive Padding */
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing(4)};
    & + & {
      margin-top: ${({ theme }) => theme.spacing(4)};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing(3)};
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

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  gradient: PropTypes.string, // Gradient-Name aus Theme, z.B. "primaryToSecondary"
  backgroundColor: PropTypes.string, // Theme-Farbe z.B. "primary.main"
  elevated: PropTypes.bool, // Option für Box Shadow
};

Wrapper.defaultProps = {
  gradient: null,
  backgroundColor: null,
  elevated: false,
};

export default Wrapper;
