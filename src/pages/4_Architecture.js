import React from 'react';
import Wrapper from '../components/layout/Wrapper';
import MediaDisplay from '../components/data-display/MediaDisplay';
import Typography from '../styles/Typography';
import HighlightText from '../components/utilities/HighlightText';

// Assets
import informationArchitecture from '../assets/images/information_architecture_diagram.png';
import userFlow from '../assets/images/user_flow.png';
import userStoryTom from '../assets/images/user_story_tom.png';
import userJourneyMap from '../assets/images/user_journey_map.png';

export default function Architecture() {
  const media = [
    {
      type: 'image',
      src: informationArchitecture,
      alt: 'Diagramm der Informationsarchitektur',
    },
    { type: 'image', src: userFlow, alt: 'Flowchart des User Flows' },
    {
      type: 'image',
      src: userStoryTom,
      alt: 'Visualisierte User Story von Tom',
    },
    { type: 'image', src: userJourneyMap, alt: 'User Journey Map von Tom' },
  ];

  return (
    <Wrapper backgroundColor="background.dark" elevated>
      {/* Header */}
      <Wrapper gradient="primaryToSecondary">
        <Typography variant="h1" align="center" color="neutral.white">
          Informationsarchitektur & User Journey Map
        </Typography>
        <Typography variant="h3" color="neutral.white" align="center">
          Eine klare Struktur und durchdachte Prozesse für ein reibungsloses
          Nutzererlebnis.
        </Typography>
      </Wrapper>

      {/* Informationsarchitektur */}
      <Wrapper backgroundColor="neutral.white">
        <Typography variant="h2" color="primary.main">
          Informationsarchitektur
        </Typography>
        <Typography color="primary.main">
          Die <HighlightText>Informationsarchitektur</HighlightText> von KIM ist
          intuitiv aufgebaut, um Nutzern ein fließendes Erlebnis zu ermöglichen.
          Der Hauptfokus liegt auf einem{' '}
          <HighlightText>zentralisierten Dashboard</HighlightText>, von dem aus
          Tom auf Gruppen, Chats und sein Profil zugreifen kann. Klare,
          hierarchische Strukturen führen Tom durch den Prozess – von der
          Registrierung über die Interaktion mit KIM bis hin zu
          Gruppeninteraktionen.
        </Typography>
        <MediaDisplay media={[media[0]]} layout="grid" />
      </Wrapper>

      {/* User Flow */}
      <Wrapper backgroundColor="neutral.white">
        <Typography variant="h2" color="primary.main">
          User Flow
        </Typography>
        <Typography color="primary.main">
          Der <HighlightText>User Flow</HighlightText> wurde entwickelt, um{' '}
          <HighlightText>reibungslosen Übergängen</HighlightText> zwischen den
          wichtigsten App-Bereichen zu schaffen. Tom durchläuft den Prozess von
          der Registrierung, in der er seine ersten Details und Interessen
          angibt, über den <HighlightText>KI-Chat</HighlightText>, der ihn
          leitet, bis hin zu Gruppeninteraktionen und realen Treffen.
        </Typography>
        <MediaDisplay media={[media[1]]} layout="grid" />
      </Wrapper>

      {/* User Story */}
      <Wrapper backgroundColor="neutral.white">
        <Typography variant="h2" color="primary.main">
          User Story
        </Typography>
        <Typography color="primary.main">
          <HighlightText>Toms User Story</HighlightText> treibt den
          Designprozess an.
        </Typography>
        <MediaDisplay media={[media[2]]} layout="grid" />
      </Wrapper>

      {/* User Journey Map */}
      <Wrapper backgroundColor="neutral.white">
        <Typography variant="h2" color="primary.main">
          User Journey Map
        </Typography>
        <Typography color="primary.main">
          Die <HighlightText>User Journey Map</HighlightText> zeigt Toms
          emotionalen Verlauf: von der anfänglichen Neugier während der
          Registrierung über die ersten Gruppenvorschläge bis hin zu seiner
          Begeisterung, als er schließlich seine perfekte Gruppe findet. Die Map
          wurde iterativ weiterentwickelt, um Toms Frustrationen und
          Begeisterungspunkte <HighlightText>präzise abzubilden</HighlightText>.
        </Typography>
        <MediaDisplay media={[media[3]]} layout="grid" />
      </Wrapper>
    </Wrapper>
  );
}
