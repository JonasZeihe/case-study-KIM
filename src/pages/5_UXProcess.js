import React from 'react';
import Wrapper from '../components/layout/Wrapper';
import MediaDisplay from '../components/data-display/MediaDisplay';
import Typography from '../styles/Typography';
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
          📊 Ein <HighlightText>Verbindungstiefen-Radialdiagramm</HighlightText>
          , das Toms Fortschritte und die Kompatibilität der Gruppe darstellt.
        </>
      ),
    },
    {
      content: (
        <>
          🤖 Eine intuitive <HighlightText>KI-Chat-Funktion</HighlightText>, die
          den ersten Kontakt erleichtert.
        </>
      ),
    },
    {
      content: (
        <>
          ❄️ Interaktive <HighlightText>Icebreaker-Fragen</HighlightText>, die
          soziale Hemmungen spielerisch abbauen.
        </>
      ),
    },
  ];

  return (
    <Wrapper backgroundColor="background.dark" elevated>
      {/* Header */}
      <Wrapper gradient="primaryToSecondary">
        <Typography variant="h1" align="center" color="neutral.white">
          UX-Designprozess
        </Typography>
        <Typography variant="h3" color="neutral.white" align="center">
          Vom ersten Konzept bis zur finalen Umsetzung – ein nutzerzentrierter
          Ansatz.
        </Typography>
      </Wrapper>

      {/* Ideation und Entwürfe */}
      <Wrapper backgroundColor="neutral.white">
        <Typography variant="h2" color="primary.main">
          Ideation und Entwürfe
        </Typography>
        <Typography color="primary.main">
          Die ersten Schritte im Designprozess bestanden aus{' '}
          <HighlightText>Low-Fidelity-Wireframes</HighlightText> und
          detaillierten <HighlightText>User Journey Maps</HighlightText>, um die
          grundlegende Struktur der App zu klären. Eine große Herausforderung
          war es, <HighlightText>KIM</HighlightText> als{' '}
          <HighlightText>persönlichen Verbindungs-Assistenten</HighlightText> zu
          gestalten, statt nur eine Plattform für Klick-Interaktionen zu
          schaffen.
        </Typography>
        <Typography color="primary.main">
          Um das <HighlightText>Storytelling</HighlightText> und die emotionale
          Verbindung zu verbessern, wechselten wir auf eine{' '}
          <HighlightText>mid-fidelity Struktur</HighlightText>, die Toms Journey
          detaillierter und ansprechender darstellt.
        </Typography>
        <Typography color="primary.main">
          Der <HighlightText>Prototyping-Prozess</HighlightText> war geprägt von
          kontinuierlichem Testing und iterativen Verbesserungen. Besonders der
          Wechsel auf <HighlightText>mid-fidelity Wireframes</HighlightText>{' '}
          half uns, die App-Nutzung und das{' '}
          <HighlightText>Storytelling</HighlightText> besser zu veranschaulichen
          – speziell für den KI-Chat.
        </Typography>
        <MediaDisplay media={[media[0]]} layout="grid" />
      </Wrapper>

      {/* Interaktive Features */}
      <Wrapper backgroundColor="neutral.white">
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
          Der psychologische Ansatz stand im Mittelpunkt, um KIM als{' '}
          <HighlightText>„Brückenbauer“</HighlightText> zu inszenieren, der
          Beziehungen zu einer <HighlightText>emotionalen Tiefe</HighlightText>{' '}
          führt.
        </Typography>
      </Wrapper>

      {/* Styleguide */}
      <Wrapper backgroundColor="neutral.white">
        <Typography variant="h2" color="primary.main">
          Styleguide: Farben und Typografie
        </Typography>
        <Typography color="primary.main">
          Der <HighlightText>Styleguide</HighlightText> von KIM sichert die
          konsistente Anwendung von Farben und Typografie. Die Hauptfarben und
          Schriftarten wurden sorgfältig ausgewählt, um eine{' '}
          <HighlightText>emotionale</HighlightText> und{' '}
          <HighlightText>moderne Nutzererfahrung</HighlightText> zu schaffen.
        </Typography>
        <MediaDisplay media={[media[1]]} layout="grid" />
      </Wrapper>
    </Wrapper>
  );
}
