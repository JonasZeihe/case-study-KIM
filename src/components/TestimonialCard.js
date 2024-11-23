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
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${(props) => props.theme.boxShadow.medium};
  }
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: ${(props) => props.theme.spacing(3)};
  box-shadow: ${(props) => props.theme.boxShadow.light};
`;

const Quote = styled.blockquote`
  font-style: italic;
  font-size: ${(props) => props.theme.typography.fontSize.body};
  color: ${(props) => props.theme.colors.neutral.dark};
  margin-bottom: ${(props) => props.theme.spacing(3)};
  padding-left: ${(props) => props.theme.spacing(3)};
  border-left: 4px solid ${(props) => props.theme.colors.primary.main};
`;

const Author = styled.div`
  font: ${(props) => props.theme.typography.detail};
  color: ${(props) => props.theme.colors.neutral.medium};
  margin-top: ${(props) => props.theme.spacing(2)};
`;

const Role = styled.div`
  font-size: ${(props) => props.theme.typography.fontSize.caption};
  color: ${(props) => props.theme.colors.neutral.light};
`;

// TestimonialCard Component
const TestimonialCard = ({ avatar, quote, author, role }) => (
  <CardContainer>
    {avatar && <Avatar src={avatar} alt={`${author}'s avatar`} />}
    <Quote>{quote}</Quote>
    {author && <Author>{author}</Author>}
    {role && <Role>{role}</Role>}
  </CardContainer>
);

// Prop Types
TestimonialCard.propTypes = {
  avatar: PropTypes.string,
  quote: PropTypes.string.isRequired,
  author: PropTypes.string,
  role: PropTypes.string,
};

export default TestimonialCard;
