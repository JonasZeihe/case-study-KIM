import React from 'react';
import styled from 'styled-components';

// Styled Components
const HeroContainer = styled.div`
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.primary.main},
    ${(props) => props.theme.colors.secondary.main}
  );
  color: ${(props) => props.theme.colors.neutral.white};
  padding: ${(props) => props.theme.spacing(8)} ${(props) => props.theme.spacing(4)};
  text-align: center;
  border-radius: ${(props) => props.theme.borderRadius.large};
`;

const HeroTitle = styled.h1`
  font: ${(props) => props.theme.typography.headline1};
  margin-bottom: ${(props) => props.theme.spacing(4)};
`;

const HeroSubtitle = styled.p`
  font: ${(props) => props.theme.typography.body};
  margin-bottom: ${(props) => props.theme.spacing(5)};
`;

const CallToAction = styled.button`
  font: ${(props) => props.theme.typography.button};
  padding: ${(props) => props.theme.spacing(3)} ${(props) => props.theme.spacing(4)};
  color: ${(props) => props.theme.colors.primary.main};
  background: ${(props) => props.theme.colors.neutral.white};
  border: none;
  border-radius: ${(props) => props.theme.borderRadius.medium};
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.colors.neutral.light};
  }
`;

// React Component
export default function HeroBanner({ title, subtitle, ctaText, onCtaClick }) {
  return (
    <HeroContainer>
      <HeroTitle>{title}</HeroTitle>
      <HeroSubtitle>{subtitle}</HeroSubtitle>
      {ctaText && <CallToAction onClick={onCtaClick}>{ctaText}</CallToAction>}
    </HeroContainer>
  );
}
