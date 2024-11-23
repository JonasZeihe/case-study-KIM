import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
    color: ${({ theme }) => theme.colors.neutral.dark};
    background: linear-gradient(
      to bottom,
      ${({ theme }) => theme.colors.background.light},
      ${({ theme }) => theme.colors.background.main}
    );
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    margin-bottom: ${({ theme }) => theme.spacing(3)};
  }

  h1 {
    font-size: ${({ theme }) => theme.typography.fontSize.h1};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    color: ${({ theme }) => theme.colors.primary.main};
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.fontSize.h2};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    color: ${({ theme }) => theme.colors.primary.dark};
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.fontSize.h3};
    font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
    color: ${({ theme }) => theme.colors.neutral.dark};
  }

  p {
    font-size: ${({ theme }) => theme.typography.fontSize.body};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
    margin-bottom: ${({ theme }) => theme.spacing(3)};
    color: ${({ theme }) => theme.colors.neutral.dark};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.accent.main};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.accent.dark};
      text-decoration: underline;
    }
  }

  blockquote {
    font-style: italic;
    margin: ${({ theme }) => theme.spacing(3)} 0;
    padding-left: ${({ theme }) => theme.spacing(4)};
    border-left: 4px solid ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.neutral.dark};
  }

  button {
    font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
    font-size: ${({ theme }) => theme.typography.fontSize.body};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    color: ${({ theme }) => theme.colors.neutral.white};
    background-color: ${({ theme }) => theme.colors.primary.main};
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(3)};
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.dark};
    }
  }

  img {
    max-width: 100%;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    box-shadow: ${({ theme }) => theme.boxShadow.light};
  }

  /* Utility Classes */
  .container {
    max-width: ${({ theme }) => theme.breakpoints.xl};
    margin: 0 auto;
    padding: ${({ theme }) => theme.spacing(4)};
  }

  .grid {
    display: grid;
    gap: ${({ theme }) => theme.spacing(4)};
  }

  .text-center {
    text-align: center;
  }

  .text-highlight {
    color: ${({ theme }) => theme.colors.secondary.main};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  }
`;

export default GlobalStyles;
