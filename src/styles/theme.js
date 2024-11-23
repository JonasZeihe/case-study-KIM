const baseFontSize = 16; // Basis-Schriftgröße in px

const theme = {
  colors: {
    primary: {
      lightest: '#CCD1FF',
      light: '#8A95FD',
      main: '#3441F9',
      dark: '#1F2CCB',
      darkest: '#0F197A',
    },
    secondary: {
      lightest: '#FFC3A1',
      light: '#FF9D6A',
      main: '#FD7A26',
      dark: '#D35D10',
      darkest: '#9A3C06',
    },
    accent: {
      lightest: '#C9F4F6',
      light: '#B1E8EC',
      main: '#9FDFE4',
      dark: '#7AC4CB',
      darkest: '#509196',
    },
    secondaryAccent: {
      lightest: '#FFF2D1',
      light: '#FAE6B2',
      main: '#F5E2A4',
      dark: '#D7BF85',
      darkest: '#B49D6B',
    },
    background: {
      lightest: '#D3D5F8',
      light: '#B5BAF1',
      main: '#999EF6',
      dark: '#6D72C6',
      darkest: '#45488B',
    },
    neutral: {
      white: '#FFFFFF',
      light: '#E0E0E0',
      medium: '#B3B3B3',
      dark: '#808080',
      darkest: '#4D4D4D',
      black: '#000000',
    },
  },
  typography: {
    fontFamily: {
      primary: "'Futura', sans-serif",
      secondary: "'Helvetica Neue', sans-serif",
      button: "'Helvetica Neue', sans-serif", // Sicherstellen, dass alle Fonts vorhanden sind
    },
    fontSize: {
      h1: '2rem', // 32px
      h2: '1.5rem', // 24px
      h3: '1.25rem', // 20px
      button: '1rem', // 16px
      body: '1rem', // 16px
      detail: '0.875rem', // 14px
    },
    fontWeight: {
      bold: 700,
      medium: 500,
      regular: 400,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.8,
    },
  },
  spacing: (factor) => `${0.25 * factor}rem`, // 1 = 4px, 2 = 8px, ...
  borderRadius: {
    small: '0.25rem', // 4px
    medium: '0.5rem', // 8px
    large: '1rem', // 16px
  },
  boxShadow: {
    light: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    heavy: '0px 8px 16px rgba(0, 0, 0, 0.3)',
  },
  breakpoints: {
    xs: '20rem', // 320px
    sm: '36rem', // 576px
    md: '48rem', // 768px
    lg: '62rem', // 992px
    xl: '75rem', // 1200px
  },
};

export default theme;
