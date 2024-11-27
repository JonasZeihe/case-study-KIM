import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

// Styled Components
const StyledList = styled.ul`
  margin: ${(props) => props.theme.spacing(4)} 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: ${(props) => (props.direction === "horizontal" ? "row" : "column")};
  gap: ${(props) => props.theme.spacing(3)};
  ${(props) =>
    props.direction === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}
`;

const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing(3)};
  padding: ${(props) => props.theme.spacing(3)};
  background: ${(props) =>
    props.variant === "highlighted"
      ? props.theme.colors.accent.lightest
      : props.theme.colors.neutral.light};
  color: ${(props) => props.theme.colors.neutral.dark};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  box-shadow: ${(props) => props.theme.boxShadow.light};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${(props) => props.theme.boxShadow.medium};
    background: ${(props) => props.theme.colors.primary.light};
    color: ${(props) => props.theme.colors.neutral.white};
  }

  &::before {
    content: "${(props) => props.icon || "•"}";
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.accent.main};
    ${(props) =>
      props.numbered &&
      css`
        content: "${props.index + 1}.";
        font-weight: bold;
        color: ${(props) => props.theme.colors.primary.main};
      `}
  }
`;

const StyledButton = styled.button`
  background: ${(props) => props.theme.colors.primary.main};
  color: ${(props) => props.theme.colors.neutral.white};
  border: none;
  border-radius: ${(props) => props.theme.borderRadius.small};
  padding: ${(props) => props.theme.spacing(2)} ${(props) => props.theme.spacing(4)};
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.colors.primary.dark};
  }
`;

// ListComponent
const ListComponent = ({ items, direction = "vertical", variant = "standard", numbered, onClick }) => {
  return (
    <StyledList direction={direction}>
      {items.map((item, index) => (
        <StyledListItem
          key={index}
          index={index}
          variant={variant}
          numbered={numbered}
          icon={item.icon}
        >
          {item.content}
          {item.buttonLabel && <StyledButton onClick={() => onClick(item)}>{item.buttonLabel}</StyledButton>}
        </StyledListItem>
      ))}
    </StyledList>
  );
};

// Prop Types
ListComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.node.isRequired,
      icon: PropTypes.string,
      buttonLabel: PropTypes.string,
    })
  ).isRequired,
  direction: PropTypes.oneOf(["vertical", "horizontal"]),
  variant: PropTypes.oneOf(["standard", "highlighted"]),
  numbered: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ListComponent;
