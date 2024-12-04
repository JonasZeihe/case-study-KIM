import React from 'react';
import Wrapper from '../components/layout/Wrapper';
import Carousel from '../components/data-display/Carousel';
import Typography from '../components/common/Typography';
import ListComponent from '../components/data-display/ListComponent';
import HighlightText from '../components/utilities/HighlightText';

// Assets
import appScreen1 from '../assets/images/appscreens/final_app_screens_1.png';
import appScreen2 from '../assets/images/appscreens/final_app_screens_2.png';
import appScreen3 from '../assets/images/appscreens/final_app_screens_3.png';
import appScreen4 from '../assets/images/appscreens/final_app_screens_4.png';
import appScreen5 from '../assets/images/appscreens/final_app_screens_5.png';
import appScreen6 from '../assets/images/appscreens/final_app_screens_6.png';
import appScreen7 from '../assets/images/appscreens/final_app_screens_7.png';
import appScreen8 from '../assets/images/appscreens/final_app_screens_8.png';
import appScreen9 from '../assets/images/appscreens/final_app_screens_9.png';
import appScreen10 from '../assets/images/appscreens/final_app_screens_10.png';
import appScreen11 from '../assets/images/appscreens/final_app_screens_11.png';

export default function FinalDesignPage() {
  const media = [
    { type: 'image', src: appScreen1, alt: 'App Screen 1' },
    { type: 'image', src: appScreen2, alt: 'App Screen 2' },
    { type: 'image', src: appScreen3, alt: 'App Screen 3' },
    { type: 'image', src: appScreen4, alt: 'App Screen 4' },
    { type: 'image', src: appScreen5, alt: 'App Screen 5' },
    { type: 'image', src: appScreen6, alt: 'App Screen 6' },
    { type: 'image', src: appScreen7, alt: 'App Screen 7' },
    { type: 'image', src: appScreen8, alt: 'App Screen 8' },
    { type: 'image', src: appScreen9, alt: 'App Screen 9' },
    { type: 'image', src: appScreen10, alt: 'App Screen 10' },
    { type: 'image', src: appScreen11, alt: 'App Screen 11' },
  ];

  const features = [
    {
      content: (
        <>
          🤖 <HighlightText>KI-gestützter Chat:</HighlightText> KIM erstellt ein
          dynamisches Persönlichkeitsprofil basierend auf den Antworten des
          Nutzers und passt die Fragen im Verlauf des Gesprächs an.
        </>
      ),
    },
    {
      content: (
        <>
          💡{' '}
          <HighlightText>
            Gruppenvorschläge mit Kompatibilitätsscore:
          </HighlightText>{' '}
          Nutzer erhalten Vorschläge für Gruppen mit hoher Übereinstimmung, was
          schnelle Verbindungen und tiefere Beziehungen fördert.
        </>
      ),
    },
    {
      content: (
        <>
          ❄️ <HighlightText>Automatisierte Icebreaker:</HighlightText> Spannende
          Fragen erleichtern Gruppentreffen und brechen das Eis. KIM plant zudem
          das erste Treffen der Gruppe, um echte Begegnungen ohne Planungsstress
          zu ermöglichen.
        </>
      ),
    },
    {
      content: (
        <>
          🎨 <HighlightText>Visuelles Design:</HighlightText> Die Farbpalette
          und Typografie greifen das Thema der emotionalen Tiefe auf und
          schaffen eine einladende, warme Umgebung für den Nutzer. Das{' '}
          <HighlightText>✨-Symbol</HighlightText> repräsentiert KIM als den
          „Funken der Verbindungen“.
        </>
      ),
    },
  ];

  return (
    <Wrapper backgroundColor="background.dark" padding="large" elevated>
      {/* Header */}
      <Wrapper gradient="primaryToSecondary" padding="large">
        <Typography variant="h1" align="center" color="neutral.white">
          Finale Lösung und Design
        </Typography>
        <Typography variant="h3" color="neutral.white" align="center">
          Einblicke in die Hauptfeatures und das finale visuelle Konzept von
          KIM.
        </Typography>
      </Wrapper>

      {/* Hauptfeatures */}
      <Wrapper backgroundColor="neutral.white" padding="large">
        <Typography variant="h2" color="primary.main">
          Hauptfeatures
        </Typography>
        <Typography color="primary.main">
          Die Hauptfeatures von KIM kombinieren Technologie,{' '}
          <HighlightText>emotionales Design</HighlightText> und Interaktionen
          für tiefere Verbindungen.
        </Typography>
        <ListComponent items={features} variant="highlighted" />
      </Wrapper>

      {/* App Screens */}
      <Wrapper backgroundColor="neutral.white" padding="large">
        <Typography variant="h2" color="primary.main" textAlign="center">
          Finale App-Screens
        </Typography>
        <Typography color="primary.main" align="center">
          Die finalen Screens von KIM illustrieren die Hauptfeatures wie die
          Icebreaker-Funktion, das Dashboard und vieles mehr.
        </Typography>
        <Carousel slides={media} autoplay interval={5000} />
      </Wrapper>
    </Wrapper>
  );
}
