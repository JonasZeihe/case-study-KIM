import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const StyledHighlightText = styled.span`
  color: ${({ theme, color }) => color || theme.colors.secondary.main};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  background: ${({ theme, highlightBackground }) => highlightBackground || 'transparent'};
  padding: ${({ theme, highlightBackground }) => (highlightBackground ? theme.spacing(1) : '0')};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  transition: color 0.3s ease, background 0.3s ease;

  ${({ isInteractive, theme }) =>
    isInteractive &&
    css`
      cursor: pointer;
      &:hover {
        color: ${theme.colors.accent.main};
        background: ${theme.colors.secondary.lightest};
      }
    `}
`;

/**
 * HighlightText Component
 * Props:
 * - `children` (node): The content to be highlighted.
 * - `color` (string, optional): Custom text color.
 * - `highlightBackground` (string, optional): Background color for the highlighted text.
 * - `isInteractive` (bool, optional): Makes the text interactive (hover effect).
 */
const HighlightText = ({ children, color, highlightBackground, isInteractive }) => (
  <StyledHighlightText
    color={color}
    highlightBackground={highlightBackground}
    isInteractive={isInteractive}
  >
    {children}
  </StyledHighlightText>
);

HighlightText.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  highlightBackground: PropTypes.string,
  isInteractive: PropTypes.bool,
};

export default HighlightText;
