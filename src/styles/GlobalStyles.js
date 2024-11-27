import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Reset */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px; /* Basis für responsive Typografie */
    scroll-behavior: smooth;
  }

  body {
    width: 100%;
    height: 100%;
    font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
    font-size: ${({ theme }) => theme.typography.fontSize.body};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
    color: ${({ theme }) => theme.colors.neutral.dark};
    background: ${({ theme }) => theme.colors.background.light};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyles;
