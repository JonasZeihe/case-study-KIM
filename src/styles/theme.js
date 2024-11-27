import gradients from './Gradient';

const baseFontSize = 16;
const goldenRatio = 1.618;

const scaleFont = (level) => `${(baseFontSize * Math.pow(goldenRatio, level)).toFixed(2)}px`;

const colors = {
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
};

const theme = {
  colors,
  typography: {
    fontFamily: {
      primary: "'Inter', sans-serif",
      secondary: "'Roboto', sans-serif",
      button: "'Roboto', sans-serif",
    },
    fontSize: {
      h1: scaleFont(3),
      h2: scaleFont(2),
      h3: scaleFont(1),
      body: `${baseFontSize}px`,
      detail: scaleFont(-1),
      small: scaleFont(-2),
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.8,
    },
  },
  spacing: (factor) => `${0.25 * factor}rem`,
  borderRadius: {
    none: '0',
    small: '0.25rem',
    medium: '0.5rem',
    large: '1rem',
    pill: '9999px',
  },
  boxShadow: {
    light: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    heavy: '0px 8px 16px rgba(0, 0, 0, 0.3)',
    glow: '0 0 10px rgba(52, 65, 249, 0.5)',
  },
  breakpoints: {
    xs: '20rem',
    sm: '36rem',
    md: '48rem',
    lg: '62rem',
    xl: '75rem',
  },
};

// Gradients werden hier nach dem Erstellen des Colors-Objekts hinzugefügt
theme.gradients = gradients(theme);

export default theme;
