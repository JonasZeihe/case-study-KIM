import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const CardWrapper = styled.div`
  background: ${({ theme }) => theme.colors.neutral.white};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
  padding: ${({ theme }) => theme.spacing(4)};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.boxShadow.heavy};
  }
`;

const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.h2};
  color: ${({ theme }) => theme.colors.primary.dark};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

const CardText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  color: ${({ theme }) => theme.colors.neutral.dark};
`;

const CardContainer = ({ title, text, children }) => (
  <CardWrapper>
    <CardTitle>{title}</CardTitle>
    <CardText>{text}</CardText>
    {children}
  </CardWrapper>
);

CardContainer.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default CardContainer;
