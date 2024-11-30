import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const QuoteWrapper = styled.blockquote`
  position: relative;
  margin: ${({ theme }) => theme.spacing(6)} 0;
  padding: ${({ theme }) => theme.spacing(5)};
  background: ${({ theme }) => theme.colors.background.dark};
  color: ${({ theme }) => theme.colors.neutral.white};
  font-style: italic;
  border-left: 4px solid ${({ theme }) => theme.colors.primary.main};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.boxShadow.light};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing(4)};
  }
`;

const QuoteText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin: 0;
  text-align: center;
`;

export default function QuoteComponent({ text }) {
  return (
    <QuoteWrapper>
      <QuoteText>{`"${text}"`}</QuoteText>
    </QuoteWrapper>
  );
}

QuoteComponent.propTypes = {
  text: PropTypes.string.isRequired,
};
