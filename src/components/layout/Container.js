import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: ${({ maxWidth, theme }) => maxWidth || theme.breakpoints.lg};
  margin: 0 auto;
  padding: ${({ padding, theme }) => padding || theme.spacing(4)};
  background: ${({ bg, theme }) => bg || "transparent"};
  border-radius: ${({ borderRadius, theme }) => borderRadius || theme.borderRadius.medium};
  box-shadow: ${({ shadow, theme }) => shadow || "none"};

  /* Optional: Vollbildmodus bei fluid */
  ${({ fluid }) =>
    fluid &&
    `
    max-width: 100%;
    padding-left: 0;
    padding-right: 0;
  `}

  /* Optionales Notch-Design */
  ${({ notch, theme }) =>
    notch &&
    `
    clip-path: polygon(0 0, 100% 0, 100% 100%, calc(100% - 30px) 100%, 100% calc(100% - 30px), 30px 100%, 0 calc(100% - 30px));
    background: ${theme.colors.background.main};
  `}
`;

export default Container;
