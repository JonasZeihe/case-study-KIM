import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

// Styled Components
const StyledList = styled.ul`
  margin: ${({ theme }) => theme.spacing(4)} 0;
  padding: 0;
  display: flex;
  flex-direction: ${({ direction }) => (direction === "horizontal" ? "row" : "column")};
  gap: ${({ theme }) => theme.spacing(3)};
  list-style: ${({ showBullets }) => (showBullets ? "disc" : "none")};
  list-style-position: inside;

  ${({ direction }) =>
    direction === "horizontal" &&
    css`
      flex-wrap: wrap;
      width: 100%;
      justify-content: flex-start;
    `}
`;

const StyledListItem = styled.li`
  padding: ${({ theme }) => theme.spacing(2)};
  background: ${({ theme, variant }) =>
    variant === "highlighted"
      ? theme.colors.background.darkest
      : "transparent"};
  color: ${({ theme }) => theme.colors.neutral.white};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ variant, theme }) =>
    variant === "highlighted" ? theme.boxShadow.light : "none"};
  transition: transform 0.3s ease;

  &:hover {
    transform: ${({ variant }) => (variant === "highlighted" ? "translateY(-3px)" : "none")};
  }

  &::before {
    content: ${({ icon, numbered, index }) =>
      icon
        ? `"${icon}"`
        : numbered
        ? `"${index + 1}. "`
        : "none"};
    color: ${({ theme, numbered }) => (numbered ? theme.colors.primary.main : theme.colors.accent.main)};
    font-weight: bold;
    margin-right: ${({ theme }) => theme.spacing(2)};
  }
`;

// React Component
const ListComponent = ({
  items,
  direction = "vertical",
  variant = "standard",
  showBullets = false,
  numbered = false,
  onClick,
}) => {
  return (
    <StyledList direction={direction} showBullets={showBullets}>
      {items.map((item, index) => (
        <StyledListItem
          key={index}
          index={index}
          variant={variant}
          icon={item.icon}
          numbered={numbered}
          onClick={() => onClick && onClick(item)}
        >
          {item.content}
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
    })
  ).isRequired,
  direction: PropTypes.oneOf(["vertical", "horizontal"]),
  variant: PropTypes.oneOf(["standard", "highlighted"]),
  showBullets: PropTypes.bool,
  numbered: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ListComponent;
