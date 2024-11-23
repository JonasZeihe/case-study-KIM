import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// Styled Components
const CardContainer = styled.div`
  background: ${(props) => props.theme.colors.neutral.white};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  box-shadow: ${(props) => props.theme.boxShadow.light};
  padding: ${(props) => props.theme.spacing(5)};
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${(props) => props.theme.boxShadow.medium};
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: ${(props) => props.theme.colors.primary.main};
  margin-bottom: ${(props) => props.theme.spacing(3)};
`;

const Title = styled.h3`
  font: ${(props) => props.theme.typography.headline2};
  color: ${(props) => props.theme.colors.primary.dark};
  margin-bottom: ${(props) => props.theme.spacing(2)};
`;

const Description = styled.p`
  font-size: ${(props) => props.theme.typography.fontSize.body};
  color: ${(props) => props.theme.colors.neutral.dark};
  margin-bottom: ${(props) => props.theme.spacing(4)};
`;

const Button = styled.button`
  font: ${(props) => props.theme.typography.button};
  padding: ${(props) => props.theme.spacing(2)} ${(props) => props.theme.spacing(4)};
  color: ${(props) => props.theme.colors.neutral.white};
  background: ${(props) => props.theme.colors.primary.main};
  border: none;
  border-radius: ${(props) => props.theme.borderRadius.small};
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.colors.primary.dark};
  }
`;

// FeatureCard Component
const FeatureCard = ({ icon, title, description, buttonLabel, onButtonClick }) => (
  <CardContainer>
    {icon && <IconWrapper>{icon}</IconWrapper>}
    {title && <Title>{title}</Title>}
    {description && <Description>{description}</Description>}
    {buttonLabel && <Button onClick={onButtonClick}>{buttonLabel}</Button>}
  </CardContainer>
);

// Prop Types
FeatureCard.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string,
  onButtonClick: PropTypes.func,
};

export default FeatureCard;
