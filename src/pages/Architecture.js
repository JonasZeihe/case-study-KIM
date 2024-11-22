import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: var(--spacing-48) var(--spacing-16);
  max-width: var(--max-width);
  margin: 0 auto;
  background: var(--neutral-1);
  border-radius: var(--border-radius-large);
  box-shadow: var(--box-shadow-light);
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-32);

  h1 {
    font: var(--font-headline-1);
    color: var(--primary-3);
  }

  .subtitle {
    font: var(--font-detail);
    color: var(--neutral-4);
    margin-top: var(--spacing-8);
  }
`;

const Card = styled.div`
  background: var(--neutral-1);
  border-radius: var(--border-radius-medium);
  box-shadow: var(--box-shadow-light);
  padding: var(--spacing-32);
  margin-bottom: var(--spacing-32);

  h2 {
    font: var(--font-headline-2);
    color: var(--primary-3);
    margin-bottom: var(--spacing-16);
  }

  p {
    font: var(--font-body);
    color: var(--neutral-6);
    margin-bottom: var(--spacing-16);

    .highlight {
      color: var(--primary-4);
      font-weight: bold;
    }
  }

  img {
    width: 100%;
    margin-top: var(--spacing-24);
    border-radius: var(--border-radius-medium);
    box-shadow: var(--box-shadow-light);
  }
`;

export default function Architecture() {
  return (
    <Section>
      {/* Section Header */}
      <SectionHeader>
        <h1>Informationsarchitektur & User Journey Map</h1>
        <p className="subtitle">
          Eine klare Struktur und durchdachte Prozesse für ein reibungsloses Nutzererlebnis.
        </p>
      </SectionHeader>

      {/* Informationsarchitektur */}
      <Card>
        <h2>Informationsarchitektur</h2>
        <p>
          Die <span className="highlight">Informationsarchitektur</span> von KIM ist intuitiv aufgebaut, um Nutzern ein fließendes Erlebnis zu ermöglichen.
          Der Hauptfokus liegt auf einem <strong>zentralisierten Dashboard</strong>, von dem aus Tom auf Gruppen, Chats und sein Profil zugreifen kann.
          Klare, hierarchische Strukturen führen Tom durch den Prozess – von der Registrierung über die Interaktion mit KIM bis hin zu Gruppeninteraktionen.
        </p>
        <img
          src="./assets/images/information_architecture_diagram.png"
          alt="Diagramm der Informationsarchitektur"
        />
      </Card>

      {/* User Flow */}
      <Card>
        <h2>User Flow</h2>
        <p>
          Der <span className="highlight">User Flow</span> wurde entwickelt, um <strong>reibungslosen Übergängen</strong> zwischen den wichtigsten App-Bereichen zu schaffen.
          Tom durchläuft den Prozess von der Registrierung, in der er seine ersten Details und Interessen angibt, über den <span className="highlight">KI-Chat</span>, der ihn leitet,
          bis hin zu Gruppeninteraktionen und realen Treffen.
        </p>
        <img
          src="./assets/images/user_flow.png"
          alt="Flowchart des User Flows"
        />
      </Card>

      {/* User Story */}
      <Card>
        <h2>User Story</h2>
        <p>
          <strong>Toms User Story</strong> treibt den Designprozess an:
        </p>
        <img
          src="./assets/images/user_story_tom.png"
          alt="Visualisierte User Story von Tom"
        />
      </Card>

      {/* User Journey Map */}
      <Card>
        <h2>User Journey Map</h2>
        <p>
          Die <span className="highlight">User Journey Map</span> zeigt Toms emotionalen Verlauf: von der anfänglichen Neugier während der Registrierung über die ersten Gruppenvorschläge bis hin zu seiner Begeisterung, als er schließlich seine perfekte Gruppe findet.
          Die Map wurde iterativ weiterentwickelt, um Toms Frustrationen und Begeisterungspunkte <strong>präzise abzubilden</strong>.
        </p>
        <img
          src="./assets/images/user_journey_map.png"
          alt="User Journey Map von Tom"
        />
      </Card>
    </Section>
  );
}
