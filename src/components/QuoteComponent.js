import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

// Animationen (optional)
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled Components
const QuoteWrapper = styled.blockquote`
  position: relative;
  padding: ${({ theme }) => theme.spacing(4)};
  margin: ${({ theme }) => theme.spacing(6)} 0;
  background: ${({ theme }) => theme.colors.neutral.light};
  color: ${({ theme }) => theme.colors.primary.dark};
  font-style: italic;
  border-left: 4px solid ${({ theme }) => theme.colors.accent.main};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.boxShadow.light};
  animation: ${fadeIn} 0.5s ease;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing(6)};
  }
`;

const QuoteText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  color: ${({ theme }) => theme.colors.neutral.dark};
`;

const Author = styled.div`
  margin-top: ${({ theme }) => theme.spacing(3)};
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary.main};
`;

const Role = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.caption};
  color: ${({ theme }) => theme.colors.neutral.medium};
`;

// React Component
export default function QuoteComponent({ text, author, role }) {
  return (
    <QuoteWrapper>
      <QuoteText>{`"${text}"`}</QuoteText>
      {author && <Author>{author}</Author>}
      {role && <Role>{role}</Role>}
    </QuoteWrapper>
  );
}

// PropTypes
QuoteComponent.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string,
  role: PropTypes.string,
};
