import React from 'react';
import styled from 'styled-components';

const StyledHighlightText = styled.span`
  color: ${(props) => props.theme.colors.secondary.main};
  font-weight: bold;
`;

export default function HighlightText({ children }) {
  return <StyledHighlightText>{children}</StyledHighlightText>;
}
