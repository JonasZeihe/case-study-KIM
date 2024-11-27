import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const QuoteWrapper = styled.blockquote`
  position: relative;
  margin: ${({ theme }) => theme.spacing(6)} 0;
  padding: ${({ theme }) => theme.spacing(5)};
  background: ${({ theme, highlight }) =>
    highlight ? theme.colors.accent.lightest : theme.colors.neutral.light};
  color: ${({ theme }) => theme.colors.primary.dark};
  font-style: italic;
  border-left: 4px solid ${({ theme }) => theme.colors.accent.main};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.boxShadow.light};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing(4)};
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

export default function QuoteComponent({ text, author, role, highlight = false }) {
  return (
    <QuoteWrapper highlight={highlight}>
      <QuoteText>{`"${text}"`}</QuoteText>
      {author && <Author>{author}</Author>}
      {role && <Role>{role}</Role>}
    </QuoteWrapper>
  );
}

QuoteComponent.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string,
  role: PropTypes.string,
  highlight: PropTypes.bool,
};
