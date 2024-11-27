import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// Styled Components
const CardWrapper = styled.div`
  background: ${({ bgColor, theme }) => bgColor || theme.colors.neutral.white};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
  padding: ${({ theme }) => theme.spacing(5)};
  margin-bottom: ${({ theme }) => theme.spacing(6)};
  display: flex;
  flex-direction: ${({ layout }) => (layout === "horizontal" ? "row" : "column")};
  gap: ${({ theme }) => theme.spacing(4)};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.boxShadow.heavy};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

const CardImage = styled.img`
  width: ${({ layout }) => (layout === "horizontal" ? "40%" : "100%")};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  object-fit: cover;
  box-shadow: ${({ theme }) => theme.boxShadow.light};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
  color: ${({ theme }) => theme.colors.neutral.dark};
`;

const CardTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.h2};
  color: ${({ theme }) => theme.colors.primary.dark};
`;

const CardText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;

const CardActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
  margin-top: ${({ theme }) => theme.spacing(2)};
  justify-content: ${({ align }) => align || "flex-start"};
`;

// React Component
const Card = ({ 
  imgSrc, 
  imgAlt, 
  title, 
  children, 
  actions, 
  actionsAlign = "left", 
  layout = "vertical", 
  bgColor 
}) => {
  return (
    <CardWrapper layout={layout} bgColor={bgColor}>
      {imgSrc && <CardImage src={imgSrc} alt={imgAlt} layout={layout} />}
      <CardContent>
        {title && <CardTitle>{title}</CardTitle>}
        {children && <CardText>{children}</CardText>}
        {actions && <CardActions align={actionsAlign}>{actions}</CardActions>}
      </CardContent>
    </CardWrapper>
  );
};

// Prop Types
Card.propTypes = {
  imgSrc: PropTypes.string, // Bild-URL
  imgAlt: PropTypes.string, // Bild-Alt-Text
  title: PropTypes.string, // Titel
  children: PropTypes.node.isRequired, // Inhalt
  actions: PropTypes.node, // Aktionen (Buttons oder Links)
  actionsAlign: PropTypes.oneOf(["left", "right", "center"]), // Ausrichtung der Aktionen
  layout: PropTypes.oneOf(["vertical", "horizontal"]), // Layout der Karte
  bgColor: PropTypes.string, // Hintergrundfarbe
};

export default Card;
