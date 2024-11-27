import React from 'react';
import Wrapper from '../components/layout/Wrapper';
import Card from '../components/data-display/Card';
import Carousel from '../components/data-display/Carousel';
import Typography from '../components/common/Typography';
import ListComponent from '../components/data-display/ListComponent';

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
          🤖 <Typography highlight="KI-gestützter Chat" />: KIM erstellt dynamische Persönlichkeitsprofile
          basierend auf den Antworten des Nutzers.
        </>
      ),
    },
    {
      content: (
        <>
          💡 <Typography highlight="Gruppenvorschläge mit Kompatibilitätsscore" />: Gruppen mit hoher Übereinstimmung werden
          basierend auf dem Persönlichkeitsprofil angezeigt.
        </>
      ),
    },
    {
      content: (
        <>
          ❄️ <Typography highlight="Automatisierte Icebreaker" /> und Gruppentreffen: KIM erleichtert Begegnungen durch spannende Fragen und Vorschläge.
        </>
      ),
    },
    {
      content: (
        <>
          🎨 <Typography highlight="Visuelles Design" />: Eine emotionale Farbpalette und klare Typografie schaffen ein warmes und modernes Erlebnis.
        </>
      ),
    },
  ];

  return (
    <Wrapper>
      {/* Header Section */}
      <Wrapper variant="section" bgGradient>
        <Typography variant="h1" textAlign="center">
          Finale Lösung und Design
        </Typography>
        <Typography variant="h3" textAlign="center">
          Einblicke in die Hauptfeatures und das finale visuelle Konzept von KIM.
        </Typography>
      </Wrapper>

      {/* Hauptfeatures */}
      <Wrapper variant="section" padding="large">
        <Card
          layout="vertical"
          title={<Typography variant="h2">Hauptfeatures</Typography>}
        >
          <Typography variant="body">
            Die Hauptfeatures von KIM kombinieren Technologie, emotionales Design und Interaktionen für tiefere Verbindungen.
          </Typography>
          <ListComponent items={features} variant="standard" />
        </Card>
      </Wrapper>

      {/* Final App Screens */}
      <Wrapper variant="section" padding="large">
        <Card
          layout="vertical"
          title={<Typography variant="h2">Finale App-Screens</Typography>}
        >
          <Typography variant="body" textAlign="center">
            Die wichtigsten Features und das finale visuelle Konzept werden in diesen Screens illustriert.
          </Typography>
          {/* Optimiertes Carousel */}
          <Carousel slides={media} autoplay interval={5000} />
        </Card>
      </Wrapper>
    </Wrapper>
  );
}
