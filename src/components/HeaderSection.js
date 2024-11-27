import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const HeaderWrapper = styled.header`
  background: ${({ background }) => background || "none"};
  color: ${({ theme, background }) =>
    background ? theme.colors.neutral.white : theme.colors.primary.dark};
  text-align: ${({ align }) => align || "center"};
  padding: ${({ theme }) => theme.spacing(8)} ${({ theme }) => theme.spacing(4)};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
  position: relative;
  overflow: hidden;

  h1 {
    margin-bottom: ${({ theme }) => theme.spacing(3)};
    font-size: ${({ theme }) => theme.typography.fontSize.h1};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing(4)};
    font-size: ${({ theme }) => theme.typography.fontSize.body};
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${({ src }) => src}) center/cover no-repeat;
  z-index: -1;
  filter: brightness(0.7);
`;

export default function HeaderSection({
  title,
  subtitle,
  backgroundImage,
  align = "center",
  children,
}) {
  return (
    <HeaderWrapper align={align} background={backgroundImage && "rgba(0,0,0,0.5)"}>
      {backgroundImage && <BackgroundImage src={backgroundImage} />}
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
      {children}
    </HeaderWrapper>
  );
}

HeaderSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  backgroundImage: PropTypes.string,
  align: PropTypes.oneOf(["left", "center", "right"]),
  children: PropTypes.node,
};
