import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled Components
const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ gradient, theme }) =>
    gradient ||
    `linear-gradient(135deg, ${theme.colors.primary.main}, ${theme.colors.secondary.main})`};
  color: ${({ theme }) => theme.colors.neutral.white};
  padding: ${({ theme }) => theme.spacing(8)} ${({ theme }) => theme.spacing(4)};
  text-align: center;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
`;

const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize.h1};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

const HeroSubtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing(5)};
  max-width: 800px;
`;

const CallToAction = styled.button`
  font-size: ${({ theme }) => theme.typography.fontSize.button};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(4)};
  color: ${({ theme }) => theme.colors.primary.main};
  background: ${({ theme }) => theme.colors.neutral.white};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.neutral.light};
    box-shadow: ${({ theme }) => theme.boxShadow.light};
  }
`;

// React Component
const HeroBanner = ({ 
  title, 
  subtitle, 
  ctaText, 
  onCtaClick, 
  gradient 
}) => {
  return (
    <HeroContainer gradient={gradient}>
      {title && <HeroTitle>{title}</HeroTitle>}
      {subtitle && <HeroSubtitle>{subtitle}</HeroSubtitle>}
      {ctaText && <CallToAction onClick={onCtaClick}>{ctaText}</CallToAction>}
    </HeroContainer>
  );
};

// PropTypes for validation
HeroBanner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  ctaText: PropTypes.string,
  onCtaClick: PropTypes.func,
  gradient: PropTypes.string, // Optional custom gradient
};

// Default Props
HeroBanner.defaultProps = {
  subtitle: '',
  ctaText: null,
  onCtaClick: () => {},
  gradient: null,
};

export default HeroBanner;
