import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const StyledHighlightText = styled.span`
  color: ${({ theme, color }) => color || theme.colors.secondary.main};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`;

const HighlightText = ({ children, color }) => (
  <StyledHighlightText
    color={color}
  >
    {children}
  </StyledHighlightText>
);

HighlightText.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

export default HighlightText;
