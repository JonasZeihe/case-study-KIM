import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  width: 100%;
  border-radius: ${(props) => props.theme.borderRadius.medium};
  box-shadow: ${(props) => props.theme.boxShadow.light};
  margin-top: ${(props) => props.theme.spacing(3)};
`;

export default function ImageContainer({ src, alt }) {
  return <StyledImage src={src} alt={alt} />;
}
