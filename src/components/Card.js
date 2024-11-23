import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// Styled Components
const CardContainer = styled.div`
  background: ${(props) => props.theme.colors.neutral.white};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  box-shadow: ${(props) => props.theme.boxShadow.light};
  padding: ${(props) => props.theme.spacing(5)};
  margin-bottom: ${(props) => props.theme.spacing(4)};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${(props) => props.theme.boxShadow.medium};
  }
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: ${(props) => props.theme.borderRadius.medium};
  margin-bottom: ${(props) => props.theme.spacing(3)};
  box-shadow: ${(props) => props.theme.boxShadow.light};
`;

const CardTitle = styled.h2`
  font: ${(props) => props.theme.typography.headline2};
  color: ${(props) => props.theme.colors.primary.dark};
  margin-bottom: ${(props) => props.theme.spacing(3)};
`;

const CardContent = styled.div`
  font-size: ${(props) => props.theme.typography.fontSize.body};
  color: ${(props) => props.theme.colors.neutral.dark};
  line-height: ${(props) => props.theme.typography.lineHeight};
`;

const CardActions = styled.div`
  margin-top: ${(props) => props.theme.spacing(4)};
  display: flex;
  gap: ${(props) => props.theme.spacing(3)};
  justify-content: ${(props) => (props.align === "right" ? "flex-end" : "flex-start")};
`;

// Card Component
const Card = ({ imgSrc, imgAlt, title, children, actions, actionsAlign = "right" }) => {
  return (
    <CardContainer>
      {imgSrc && <CardImage src={imgSrc} alt={imgAlt} />}
      {title && <CardTitle>{title}</CardTitle>}
      <CardContent>{children}</CardContent>
      {actions && <CardActions align={actionsAlign}>{actions}</CardActions>}
    </CardContainer>
  );
};

// Prop Types
Card.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  actions: PropTypes.node,
  actionsAlign: PropTypes.oneOf(["left", "right"]),
};

export default Card;
