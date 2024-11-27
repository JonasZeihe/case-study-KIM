const createGradient = (color1, color2, angle = 135) =>
    `linear-gradient(${angle}deg, ${color1}, ${color2})`;
  
  const gradients = (theme) => ({
    primaryToSecondary: createGradient(theme.colors.primary.main, theme.colors.secondary.main),
    primaryLightToDark: createGradient(theme.colors.primary.light, theme.colors.primary.dark),
    secondaryAccentToAccent: createGradient(theme.colors.secondaryAccent.main, theme.colors.accent.dark),
    accentToPrimary: createGradient(theme.colors.accent.light, theme.colors.primary.lightest),
    backgroundToPrimary: createGradient(theme.colors.background.lightest, theme.colors.primary.main),
    subtlePrimary: createGradient(theme.colors.primary.lightest, theme.colors.primary.light, 180),
    subtleSecondary: createGradient(theme.colors.secondary.lightest, theme.colors.secondary.light, 180),
    dramaticPrimaryToAccent: createGradient(theme.colors.primary.darkest, theme.colors.accent.darkest),
    gradientHighlight: createGradient(theme.colors.primary.light, theme.colors.secondaryAccent.lightest),
    playfulAccent: createGradient(theme.colors.accent.main, theme.colors.secondary.light),
  });
  
  export default gradients;
  