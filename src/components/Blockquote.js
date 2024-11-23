import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledBlockquote = styled.blockquote`
  font-style: italic;
  color: ${(props) => props.theme.colors.neutral.medium};
  padding: ${(props) => props.theme.spacing(4)} ${(props) => props.theme.spacing(6)};
  margin: ${(props) => props.theme.spacing(4)} 0;
  border-left: 4px solid ${(props) => props.theme.colors.primary.main};
  background: ${(props) => props.theme.colors.neutral.light};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  box-shadow: ${(props) => props.theme.boxShadow.light};

  & strong {
    color: ${(props) => props.theme.colors.primary.dark};
    font-weight: ${(props) => props.theme.typography.fontWeight.bold};
  }
`;

const Blockquote = ({ children }) => {
  return <StyledBlockquote>{children}</StyledBlockquote>;
};

Blockquote.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Blockquote;
