import React from 'react';
import Wrapper from '../components/layout/Wrapper';
import Carousel from '../components/data-display/Carousel';
import Typography, { TypoProvider } from '../components/common/Typography';
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
          🤖 <HighlightText>KI-gestützter Chat:</HighlightText> Dynamische
          Persönlichkeitsprofile, die auf den Antworten des Nutzers basieren.
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
          Basierend auf dem Persönlichkeitsprofil zeigt KIM Gruppen mit hoher
          Übereinstimmung an.
        </>
      ),
    },
    {
      content: (
        <>
          ❄️ <HighlightText>Automatisierte Icebreaker:</HighlightText> Spannende
          Fragen erleichtern Gruppentreffen und brechen das Eis.
        </>
      ),
    },
    {
      content: (
        <>
          🎨 <HighlightText>Visuelles Design:</HighlightText> Moderne Farben und
          klare Typografie schaffen eine warme Atmosphäre.
        </>
      ),
    },
  ];

  return (
    <Wrapper backgroundColor="background.light" padding="large" elevated>
      {/* Header */}
      <TypoProvider variant="h1" color="primary.main" align="center">
        <Wrapper gradient="primaryToSecondary" padding="large">
          <Typography>Finale Lösung und Design</Typography>
          <Typography variant="h3">
            Einblicke in die Hauptfeatures und das finale visuelle Konzept von
            KIM.
          </Typography>
        </Wrapper>
      </TypoProvider>

      {/* Hauptfeatures */}
      <TypoProvider variant="body" color="neutral.light">
        <Wrapper backgroundColor="background.dark" padding="large">
          <Typography variant="h2">Hauptfeatures</Typography>
          <Typography>
            Die Hauptfeatures von KIM kombinieren Technologie, emotionales
            Design und Interaktionen für tiefere Verbindungen.
          </Typography>
          <ListComponent items={features} variant="highlighted" />
        </Wrapper>
      </TypoProvider>

      {/* App Screens */}
      <TypoProvider variant="body" color="neutral.light">
        <Wrapper backgroundColor="background.dark" padding="large">
          <Typography variant="h2" textAlign="center">
            Finale App-Screens
          </Typography>
          <Carousel slides={media} autoplay interval={5000} />
        </Wrapper>
      </TypoProvider>
    </Wrapper>
  );
}
