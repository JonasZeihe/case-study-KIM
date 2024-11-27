import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
    height: 100%;
    background: ${({ theme }) => theme.gradients.pageBackground};
    overflow-x: hidden;
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
    font-size: ${({ theme }) => theme.typography.fontSize.body};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
    color: ${({ theme }) => theme.colors.neutral.dark};
    background: ${({ theme }) => theme.gradients.pageBackground};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    min-height: 100%;
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.main};
    transition: color 0.3s ease;

    &:hover, &:focus {
      color: ${({ theme }) => theme.colors.primary.dark};
    }
  }

  button {
    font-family: ${({ theme }) => theme.typography.fontFamily.button};
    font-size: ${({ theme }) => theme.typography.fontSize.body};
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;

    &:focus {
      outline: 2px solid ${({ theme }) => theme.colors.accent.main};
      outline-offset: 2px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    html {
      font-size: 14px;
    }

    body {
      padding: 0 ${({ theme }) => theme.spacing(2)};
    }
  }
`;

export default GlobalStyles;
