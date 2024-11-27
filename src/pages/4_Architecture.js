// src/pages/4_Architecture.js
import React from 'react';
import styled from 'styled-components';
import HeaderSection from '../components/HeaderSection';
import CardContainer from '../components/CardContainer';
import MediaDisplay from '../components/MediaDisplay';
import Typography from '../components/Typography';

// Assets
import informationArchitecture from '../assets/images/information_architecture_diagram.png';
import userFlow from '../assets/images/user_flow.png';
import userStoryTom from '../assets/images/user_story_tom.png';
import userJourneyMap from '../assets/images/user_journey_map.png';

export default function Architecture() {
  const media = [
    { type: 'image', src: informationArchitecture, alt: 'Diagramm der Informationsarchitektur' },
    { type: 'image', src: userFlow, alt: 'Flowchart des User Flows' },
    { type: 'image', src: userStoryTom, alt: 'Visualisierte User Story von Tom' },
    { type: 'image', src: userJourneyMap, alt: 'User Journey Map von Tom' },
  ];

  return (
    <ArchitectureWrapper>
      {/* Header Section */}
      <HeaderSection
        title="Informationsarchitektur & User Journey Map"
        subtitle="Eine klare Struktur und durchdachte Prozesse für ein reibungsloses Nutzererlebnis."
        align="center"
        isFullWidth
      />

      {/* Informationsarchitektur */}
      <CardContainer
        title="Informationsarchitektur"
        textAlign="left"
        text={
          <Typography variant="body">
            Die <Typography variant="body" highlight="Informationsarchitektur" /> von KIM ist intuitiv aufgebaut, um
            Nutzern ein fließendes Erlebnis zu ermöglichen. Der Hauptfokus liegt auf einem{' '}
            <strong>zentralisierten Dashboard</strong>, von dem aus Tom auf Gruppen, Chats und sein Profil zugreifen kann.
            Klare, hierarchische Strukturen führen Tom durch den Prozess – von der Registrierung über die Interaktion mit
            KIM bis hin zu Gruppeninteraktionen.
          </Typography>
        }
      >
        <MediaDisplay media={[media[0]]} layout="grid" />
      </CardContainer>

      {/* User Flow */}
      <CardContainer
        title="User Flow"
        textAlign="left"
        text={
          <Typography variant="body">
            Der <Typography variant="body" highlight="User Flow" /> wurde entwickelt, um{' '}
            <strong>reibungslosen Übergängen</strong> zwischen den wichtigsten App-Bereichen zu schaffen. Tom durchläuft
            den Prozess von der Registrierung, in der er seine ersten Details und Interessen angibt, über den{' '}
            <Typography variant="body" highlight="KI-Chat" />, der ihn leitet, bis hin zu Gruppeninteraktionen und realen
            Treffen.
          </Typography>
        }
      >
        <MediaDisplay media={[media[1]]} layout="grid" />
      </CardContainer>

      {/* User Story */}
      <CardContainer
        title="User Story"
        textAlign="left"
        text={
          <Typography variant="body">
            <strong>Toms User Story</strong> treibt den Designprozess an. Sie zeigt, wie Tom durch eine{' '}
            <Typography variant="body" highlight="emotional fesselnde Journey" /> geführt wird, um echte Verbindungen
            aufzubauen.
          </Typography>
        }
      >
        <MediaDisplay media={[media[2]]} layout="grid" />
      </CardContainer>

      {/* User Journey Map */}
      <CardContainer
        title="User Journey Map"
        textAlign="left"
        text={
          <Typography variant="body">
            Die <Typography variant="body" highlight="User Journey Map" /> zeigt Toms emotionalen Verlauf: von der
            anfänglichen Neugier während der Registrierung über die ersten Gruppenvorschläge bis hin zu seiner
            Begeisterung, als er schließlich seine perfekte Gruppe findet. Die Map wurde iterativ weiterentwickelt, um
            Toms Frustrationen und Begeisterungspunkte <strong>präzise abzubilden</strong>.
          </Typography>
        }
      >
        <MediaDisplay media={[media[3]]} layout="grid" />
      </CardContainer>
    </ArchitectureWrapper>
  );
}

// Styled Components
const ArchitectureWrapper = styled.section`
  padding: ${({ theme }) => theme.spacing(6)} ${({ theme }) => theme.spacing(4)};
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
`;
