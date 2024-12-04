import React from 'react';
import Wrapper from '../components/layout/Wrapper';
import MediaDisplay from '../components/data-display/MediaDisplay';
import Typography from '../components/common/Typography';
import HighlightText from '../components/utilities/HighlightText';
import ListComponent from '../components/data-display/ListComponent';

// Assets
import wireframesMidFidelity from '../assets/images/wireframes_mid_fidelity.png';
import styleguideColorsTypography from '../assets/images/styleguide_colors_typography.png';

export default function UXProcess() {
  const media = [
    {
      type: 'image',
      src: wireframesMidFidelity,
      alt: 'Wireframes Mid-Fidelity',
    },
    {
      type: 'image',
      src: styleguideColorsTypography,
      alt: 'Styleguide Farben und Typografie',
    },
  ];

  const interactiveFeatures = [
    {
      content: (
        <>
          📊 <HighlightText>Verbindungstiefen-Radialdiagramm</HighlightText>:
          Toms Fortschritte und Gruppenzugehörigkeit visualisieren.
        </>
      ),
    },
    {
      content: (
        <>
          🤖 <HighlightText>KI-Chat-Funktion</HighlightText>: Vereinfachung der
          ersten Kontaktaufnahme.
        </>
      ),
    },
    {
      content: (
        <>
          ❄️ <HighlightText>Icebreaker-Fragen</HighlightText>: Abbau sozialer
          Hemmungen durch spielerische Fragen.
        </>
      ),
    },
  ];

  return (
    <Wrapper backgroundColor="background.dark" padding="large" elevated>
      {/* Header */}
      <Wrapper gradient="primaryToSecondary" padding="large">
        <Typography variant="h1" align="center" color="neutral.white">
          UX-Designprozess
        </Typography>
        <Typography variant="h3" color="neutral.white" align="center">
          Vom ersten Konzept bis zur finalen Umsetzung – ein nutzerzentrierter
          Ansatz.
        </Typography>
      </Wrapper>

      {/* Ideation und Entwürfe */}
      <Wrapper backgroundColor="neutral.white" padding="large">
        <Typography variant="h2" color="primary.main">
          Ideation und Entwürfe
        </Typography>
        <Typography color="primary.main">
          Die ersten Schritte im Designprozess bestanden aus{' '}
          <HighlightText>Low-Fidelity-Wireframes</HighlightText> und{' '}
          <HighlightText>User Journey Maps</HighlightText>, um die grundlegende
          Struktur der App zu klären. Eine große Herausforderung war es,{' '}
          <HighlightText>KIM</HighlightText> als{' '}
          <HighlightText>persönlichen Verbindungs-Assistenten</HighlightText> zu
          gestalten, statt nur eine Plattform für Klick-Interaktionen zu
          schaffen.
        </Typography>
        <MediaDisplay media={[media[0]]} layout="grid" />
      </Wrapper>

      {/* Interaktive Features */}
      <Wrapper backgroundColor="neutral.white" padding="large">
        <Typography variant="h2" color="primary.main">
          Interaktionen und Features
        </Typography>
        <Typography color="primary.main">
          Die <HighlightText>interaktiven Features</HighlightText> der App
          wurden entwickelt, um Toms Journey intuitiv und visuell ansprechend zu
          gestalten. Dazu gehören:
        </Typography>
        <ListComponent items={interactiveFeatures} variant="highlighted" />
        <Typography color="primary.main">
          KIM fungiert als <HighlightText>Brückenbauer</HighlightText>, der
          Beziehungen auf emotionaler Ebene unterstützt und vertieft.
        </Typography>
      </Wrapper>

      {/* Styleguide */}
      <Wrapper backgroundColor="neutral.white" padding="large">
        <Typography variant="h2" color="primary.main">
          Styleguide: Farben und Typografie
        </Typography>
        <Typography color="primary.main">
          Der <HighlightText>Styleguide</HighlightText> von KIM sichert die
          konsistente Anwendung von Farben und Typografie. Die Farbpalette und
          Schriftarten wurden sorgfältig ausgewählt, um eine{' '}
          <HighlightText>emotionale</HighlightText> und{' '}
          <HighlightText>moderne Nutzererfahrung</HighlightText> zu schaffen.
        </Typography>
        <MediaDisplay media={[media[1]]} layout="grid" />
      </Wrapper>
    </Wrapper>
  );
}
