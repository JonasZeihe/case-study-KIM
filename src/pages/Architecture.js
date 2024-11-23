import React from "react";
import styled from "styled-components";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import HighlightText from "../components/HighlightText";
import ImageGallery from "../components/ImageGallery";

// Import images
import informationArchitecture from "../assets/images/information_architecture_diagram.png";
import userFlow from "../assets/images/user_flow.png";
import userStoryTom from "../assets/images/user_story_tom.png";
import userJourneyMap from "../assets/images/user_journey_map.png";

const Section = styled.section`
  padding: ${(props) => props.theme.spacing(6)} ${(props) => props.theme.spacing(4)};
  max-width: ${(props) => props.theme.breakpoints.xl};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing(6)};
`;

export default function InformationArchitecture() {
  const galleryImages = [
    { src: informationArchitecture, alt: "Diagramm der Informationsarchitektur" },
    { src: userFlow, alt: "Flowchart des User Flows" },
    { src: userStoryTom, alt: "Visualisierte User Story von Tom" },
    { src: userJourneyMap, alt: "User Journey Map von Tom" },
  ];

  return (
    <Section>
      {/* Section Header */}
      <SectionHeader
        title="Informationsarchitektur & User Journey Map"
        subtitle="Eine klare Struktur und durchdachte Prozesse für ein reibungsloses Nutzererlebnis."
      />

      {/* Informationsarchitektur */}
      <Card title="Informationsarchitektur">
        <p>
          Die <HighlightText>Informationsarchitektur</HighlightText> von KIM ist intuitiv aufgebaut, um Nutzern ein fließendes
          Erlebnis zu ermöglichen. Der Hauptfokus liegt auf einem <strong>zentralisierten Dashboard</strong>, von dem aus Tom
          auf Gruppen, Chats und sein Profil zugreifen kann. Klare, hierarchische Strukturen führen Tom durch den Prozess –
          von der Registrierung über die Interaktion mit KIM bis hin zu Gruppeninteraktionen.
        </p>
        <ImageGallery images={[galleryImages[0]]} />
      </Card>

      {/* User Flow */}
      <Card title="User Flow">
        <p>
          Der <HighlightText>User Flow</HighlightText> wurde entwickelt, um <strong>reibungslosen Übergängen</strong> zwischen
          den wichtigsten App-Bereichen zu schaffen. Tom durchläuft den Prozess von der Registrierung, in der er seine ersten
          Details und Interessen angibt, über den <HighlightText>KI-Chat</HighlightText>, der ihn leitet, bis hin zu
          Gruppeninteraktionen und realen Treffen.
        </p>
        <ImageGallery images={[galleryImages[1]]} />
      </Card>

      {/* User Story */}
      <Card title="User Story">
        <p>
          <strong>Toms User Story</strong> treibt den Designprozess an:
        </p>
        <ImageGallery images={[galleryImages[2]]} />
      </Card>

      {/* User Journey Map */}
      <Card title="User Journey Map">
        <p>
          Die <HighlightText>User Journey Map</HighlightText> zeigt Toms emotionalen Verlauf: von der anfänglichen Neugier
          während der Registrierung über die ersten Gruppenvorschläge bis hin zu seiner Begeisterung, als er schließlich seine
          perfekte Gruppe findet. Die Map wurde iterativ weiterentwickelt, um Toms Frustrationen und Begeisterungspunkte{" "}
          <strong>präzise abzubilden</strong>.
        </p>
        <ImageGallery images={[galleryImages[3]]} />
      </Card>
    </Section>
  );
}
