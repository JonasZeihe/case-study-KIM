import React from 'react';
import Wrapper from '../components/layout/Wrapper';
import Card from '../components/data-display/Card';
import MediaDisplay from '../components/data-display/MediaDisplay';
import Typography from '../components/common/Typography';
import HighlightText from '../components/utilities/HighlightText';
import ListComponent from '../components/data-display/ListComponent';

// Assets
import wireframesMidFidelity from '../assets/images/wireframes_mid_fidelity.png';
import styleguideColorsTypography from '../assets/images/styleguide_colors_typography.png';

export default function UXProcess() {
  const media = [
    { type: 'image', src: wireframesMidFidelity, alt: 'Wireframes Mid-Fidelity' },
    { type: 'image', src: styleguideColorsTypography, alt: 'Styleguide Farben und Typografie' },
  ];

  const interactiveFeatures = [
    {
      content: (
        <>
          📊 <HighlightText>Verbindungstiefen-Radialdiagramm</HighlightText>: Toms Fortschritte und
          Gruppenzugehörigkeit visualisieren.
        </>
      ),
    },
    {
      content: (
        <>
          🤖 <HighlightText>KI-Chat-Funktion</HighlightText>: Vereinfachung der ersten Kontaktaufnahme.
        </>
      ),
    },
    {
      content: (
        <>
          ❄️ <strong>Icebreaker-Fragen:</strong> Abbau sozialer Hemmungen durch spielerische Fragen.
        </>
      ),
    },
  ];

  return (
    <Wrapper>
      {/* Header */}
      <Wrapper variant="section" bgGradient>
        <Typography variant="h1" textAlign="center">
          UX-Designprozess
        </Typography>
        <Typography variant="h3" textAlign="center">
          Vom ersten Konzept bis zur finalen Umsetzung – ein nutzerzentrierter Ansatz.
        </Typography>
      </Wrapper>

      {/* Ideation und Entwürfe */}
      <Wrapper variant="section" padding="large">
        <Card
          layout="vertical"
          title={<Typography variant="h2">Ideation und Entwürfe</Typography>}
        >
          <Typography variant="body">
            Die ersten Schritte im Designprozess bestanden aus{' '}
            <HighlightText>Low-Fidelity-Wireframes</HighlightText> und{' '}
            <HighlightText>User Journey Maps</HighlightText>, um die grundlegende Struktur der App zu
            klären. Eine große Herausforderung war es, <strong>KIM</strong> als{' '}
            <HighlightText>persönlichen Verbindungs-Assistenten</HighlightText> zu gestalten, statt
            nur eine Plattform für Klick-Interaktionen zu schaffen.
          </Typography>
          <MediaDisplay media={[media[0]]} layout="grid" />
        </Card>
      </Wrapper>

      {/* Interaktionen und Features */}
      <Wrapper variant="section" padding="large">
        <Card
          layout="vertical"
          title={<Typography variant="h2">Interaktionen und Features</Typography>}
        >
          <Typography variant="body">
            Die <strong>interaktiven Features</strong> der App wurden entwickelt, um Toms Journey
            intuitiv und visuell ansprechend zu gestalten. Dazu gehören:
          </Typography>
          <ListComponent items={interactiveFeatures} />
          <Typography variant="body">
            KIM fungiert als <HighlightText>Brückenbauer</HighlightText>, der Beziehungen auf
            emotionaler Ebene unterstützt und vertieft.
          </Typography>
        </Card>
      </Wrapper>

      {/* Styleguide */}
      <Wrapper variant="section" padding="large">
        <Card
          layout="vertical"
          title={<Typography variant="h2">Styleguide: Farben und Typografie</Typography>}
        >
          <Typography variant="body">
            Der <HighlightText>Styleguide</HighlightText> von KIM sichert die konsistente Anwendung
            von Farben und Typografie. Die Farbpalette und Schriftarten wurden sorgfältig ausgewählt,
            um eine <strong>emotionale</strong> und <strong>moderne Nutzererfahrung</strong> zu
            schaffen.
          </Typography>
          <MediaDisplay media={[media[1]]} layout="grid" />
        </Card>
      </Wrapper>
    </Wrapper>
  );
}
