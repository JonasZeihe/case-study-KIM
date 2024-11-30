import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const WrapperContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(6)};
  background-color: ${({ theme, background }) =>
    background
      ? theme.colors[background]?.main || theme.colors.background.light
      : theme.colors.background.light};
  border-radius: ${({ theme }) => theme.borderRadius.medium};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing(4)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing(3)};
  }

  ${({ gradient, theme }) =>
    gradient &&
    css`
      background: ${theme.gradients[gradient] || gradient};
      color: ${theme.colors.neutral
        .white}; /* Default Textfarbe für Gradients */
      border-radius: ${theme.borderRadius.large};
      text-align: center;
      padding: ${theme.spacing(8)} ${theme.spacing(6)};
    `}
`;

function Wrapper({ children, background, gradient }) {
  return (
    <WrapperContainer background={background} gradient={gradient}>
      {children}
    </WrapperContainer>
  );
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.string,
  gradient: PropTypes.string, // Name des Gradients oder benutzerdefinierte CSS-Gradient-Angabe
};

Wrapper.defaultProps = {
  background: null,
  gradient: null,
};

export default Wrapper;
