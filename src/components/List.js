import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledList = styled.ul`
  margin: ${(props) => props.theme.spacing(4)} 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing(2)};
`;

const StyledListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${(props) => props.theme.spacing(3)};
  padding: ${(props) => props.theme.spacing(2)};
  border-radius: ${(props) => props.theme.borderRadius.small};
  background: ${(props) => props.theme.colors.neutral.light};
  font-size: ${(props) => props.theme.typography.fontSize.body};
  color: ${(props) => props.theme.colors.neutral.dark};
  box-shadow: ${(props) => props.theme.boxShadow.light};

  strong {
    font-weight: bold;
    color: ${(props) => props.theme.colors.primary.dark};
  }

  &::before {
    content: "•"; /* Optional: Replace with any icon or symbol */
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.accent.main};
    display: inline-block;
    margin-right: ${(props) => props.theme.spacing(2)};
  }
`;

const List = ({ items }) => {
  return (
    <StyledList>
      {items.map((item, index) => (
        <StyledListItem key={index}>{item}</StyledListItem>
      ))}
    </StyledList>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default List;
