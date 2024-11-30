import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
  width: 100%;
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing(6)} ${({ theme }) => theme.spacing(3)};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
  }
`;

const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize.h1};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  max-width: 90%;
  word-wrap: break-word;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize.h2};
    margin-bottom: ${({ theme }) => theme.spacing(4)};
  }
`;

const HeroSubtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing(5)};
  max-width: 800px;
  color: ${({ theme }) => theme.colors.neutral.light};
  word-wrap: break-word;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize.detail};
    margin-bottom: ${({ theme }) => theme.spacing(4)};
  }
`;

const CallToAction = styled.button`
  font-size: ${({ theme }) => theme.typography.fontSize.button};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(4)};
  color: ${({ theme }) => theme.colors.neutral.white};
  background: ${({ theme }) => theme.colors.accent.main};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accent.dark};
    box-shadow: ${({ theme }) => theme.boxShadow.light};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize.body};
    padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(3)};
  }
`;

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

HeroBanner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  ctaText: PropTypes.string,
  onCtaClick: PropTypes.func,
  gradient: PropTypes.string,
};

HeroBanner.defaultProps = {
  subtitle: '',
  ctaText: null,
  onCtaClick: () => {},
  gradient: null,
};

export default HeroBanner;
