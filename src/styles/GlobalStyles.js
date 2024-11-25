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
    background: ${({ theme }) => theme.colors.background.light};
    color: ${({ theme }) => theme.colors.neutral.dark};
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
    font-size: ${({ theme }) => theme.typography.fontSize.body};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: linear-gradient(
      to bottom right,
      ${({ theme }) => theme.colors.background.light},
      ${({ theme }) => theme.colors.background.main}
    );
  }

  /* Headers */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    margin-bottom: ${({ theme }) => theme.spacing(3)};
    line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  }

  h1 {
    font-size: ${({ theme }) => theme.typography.fontSize.h1};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primary.main},
      ${({ theme }) => theme.colors.secondary.main}
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.fontSize.h2};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    color: ${({ theme }) => theme.colors.primary.dark};
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.fontSize.h3};
    font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
    color: ${({ theme }) => theme.colors.neutral.darkest};
  }

  /* Subtitles */
  h4, h5, h6 {
    font-size: ${({ theme }) => theme.typography.fontSize.body};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    color: ${({ theme }) => theme.colors.neutral.medium};
  }

  h4.subtitle {
    color: ${({ theme }) => theme.colors.primary.main};
    font-size: 1.125rem; /* 18px */
    font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
    opacity: 0.9;
  }

  /* Paragraphs */
  p {
    font-size: ${({ theme }) => theme.typography.fontSize.body};
    line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
    margin-bottom: ${({ theme }) => theme.spacing(3)};
    color: ${({ theme }) => theme.colors.neutral.dark};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.accent.main};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    transition: color 0.3s ease, text-decoration 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.accent.dark};
      text-decoration: underline;
    }
  }

  /* Blockquote */
  blockquote {
    font-style: italic;
    margin: ${({ theme }) => theme.spacing(4)} 0;
    padding: ${({ theme }) => theme.spacing(4)};
    border-left: 4px solid ${({ theme }) => theme.colors.primary.main};
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.neutral.light},
      ${({ theme }) => theme.colors.accent.light}
    );
    color: ${({ theme }) => theme.colors.neutral.darkest};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    box-shadow: ${({ theme }) => theme.boxShadow.light};
  }

  /* Buttons */
  button {
    font-family: ${({ theme }) => theme.typography.fontFamily.button};
    font-size: ${({ theme }) => theme.typography.fontSize.button};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    color: ${({ theme }) => theme.colors.neutral.white};
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primary.main} 0%,
      ${({ theme }) => theme.colors.secondary.main} 100%
    );
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(3)};
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.boxShadow.medium};
    transition: background 0.3s ease, transform 0.2s ease;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.darkest};
      transform: translateY(-3px);
    }
  }

  /* Images */
  img {
    max-width: 100%;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    box-shadow: ${({ theme }) => theme.boxShadow.light};
  }

  /* Sections */
  section {
    padding: ${({ theme }) => theme.spacing(8)} ${({ theme }) => theme.spacing(4)};
    background: ${({ theme }) => theme.colors.background.light};
    &:nth-child(odd) {
      background: linear-gradient(
        to bottom right,
        ${({ theme }) => theme.colors.primary.lightest},
        ${({ theme }) => theme.colors.primary.darkest}
      );
      color: ${({ theme }) => theme.colors.neutral.white};
    }
    &:nth-child(even) {
      background: ${({ theme }) => theme.colors.background.main};
      color: ${({ theme }) => theme.colors.neutral.dark};
    }
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

  .gradient-text {
    background: linear-gradient(90deg, 
      ${({ theme }) => theme.colors.primary.main}, 
      ${({ theme }) => theme.colors.secondary.main}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .highlight {
    color: ${({ theme }) => theme.colors.secondary.main};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  }
`;

export default GlobalStyles;
