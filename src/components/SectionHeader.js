import React from 'react';
import styled from 'styled-components';

const StyledSectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${(props) => props.theme.spacing(6)};

  h1 {
    font: ${(props) => props.theme.typography.headline1};
    color: ${(props) => props.theme.colors.primary.main};
    margin-bottom: ${(props) => props.theme.spacing(2)};
  }

  .subtitle {
    font-size: ${(props) => props.theme.typography.fontSize.body};
    color: ${(props) => props.theme.colors.neutral.dark};
  }
`;

export default function SectionHeader({ title, subtitle }) {
  return (
    <StyledSectionHeader>
      <h1>{title}</h1>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </StyledSectionHeader>
  );
}
