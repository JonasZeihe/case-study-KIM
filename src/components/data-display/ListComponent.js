import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

// Styled Components
const StyledList = styled.ul`
  margin: ${({ theme }) => theme.spacing(4)} 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: ${({ direction }) => (direction === "horizontal" ? "row" : "column")};
  gap: ${({ theme }) => theme.spacing(3)};

  ${({ direction }) =>
    direction === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}
`;

const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
  padding: ${({ theme }) => theme.spacing(3)};
  background: ${({ theme, variant }) =>
    variant === "highlighted"
      ? theme.colors.secondaryAccent.lightest
      : theme.colors.neutral.light};
  color: ${({ theme }) => theme.colors.neutral.dark};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.boxShadow.light};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.boxShadow.medium};
    background: ${({ theme, variant }) =>
      variant === "highlighted"
        ? theme.colors.secondaryAccent.main
        : theme.colors.primary.light};
    color: ${({ theme }) => theme.colors.neutral.white};
  }

  &::before {
    content: "${({ icon }) => icon || "•"}";
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.accent.main};

    ${({ numbered, index, theme }) =>
      numbered &&
      css`
        content: "${index + 1}.";
        font-weight: bold;
        color: ${theme.colors.primary.main};
      `}
  }
`;

const StyledButton = styled.button`
  background: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.neutral.white};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.dark};
  }
`;

// React Component
const ListComponent = ({
  items,
  direction = "vertical",
  variant = "standard",
  numbered = false,
  onClick,
}) => {
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
          <span>{item.content}</span>
          {item.buttonLabel && (
            <StyledButton onClick={() => onClick && onClick(item)}>
              {item.buttonLabel}
            </StyledButton>
          )}
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
