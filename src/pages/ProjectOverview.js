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

  ul {
    margin-top: var(--spacing-16);
    padding-left: var(--spacing-32);

    li {
      margin-bottom: var(--spacing-8);
      color: var(--neutral-6);
      font: var(--font-detail);
    }

    strong {
      color: var(--primary-3);
    }
  }

  blockquote {
    font-style: italic;
    color: var(--neutral-5);
    margin-top: var(--spacing-24);
    padding-left: var(--spacing-16);
    border-left: 4px solid var(--primary-3);
  }

  img {
    width: 100%;
    margin-top: var(--spacing-24);
    border-radius: var(--border-radius-medium);
    box-shadow: var(--box-shadow-light);
  }
`;

export default function ProjectOverview() {
  return (
    <Section>
      {/* Section Header */}
      <SectionHeader>
        <h1>Projektüberblick</h1>
        <p className="subtitle">
          Ein tiefer Einblick in das Projekt, das Verbindungen neu definiert.
        </p>
      </SectionHeader>

      {/* Produktbeschreibung */}
      <Card>
        <h2>Produktbeschreibung</h2>
        <p>
          <strong>KIM</strong> ist mehr als nur eine Plattform. Sie dient als{" "}
          <span className="highlight">Brücke zwischen Menschen</span>, die auf
          der Suche nach echten Verbindungen sind. Basierend auf{" "}
          <span className="highlight">
            gemeinsamen Interessen, Zielen
          </span>{" "}
          und Persönlichkeiten, die durch KI ermittelt werden, bietet KIM einen
          neuen Ansatz für authentische Beziehungen.
        </p>
      </Card>

      {/* Team & Rollen */}
      <Card>
        <h2>Team & Rollen</h2>
        <p>
          Unser Team besteht aus <strong>Darya, Isabel und Jonas</strong>, die
          als UX/UI-Designer im{" "}
          <span className="highlight">„neue fische“ Bootcamp</span>{" "}
          zusammenarbeiteten. Ziel war es, eine durchdachte, nutzerzentrierte
          App zu entwickeln, die innovative Technologien einsetzt.
        </p>
        <h2>Methoden & Tools</h2>
        <ul>
          <li>🎨 <strong>Figma & FigJam</strong>: Prototyping, Wireframes und Moodboards</li>
          <li>📋 <strong>Notion</strong>: Projektmanagement und zentrale Dokumentation</li>
          <li>
            🔬 <strong>Methoden:</strong> Desk Research, User Interviews,
            quantitative Umfragen, Personas, User Journey Maps, Wireframing,
            Prototyping, iteratives Testing
          </li>
        </ul>
      </Card>

      {/* Problemstellung */}
      <Card>
        <h2>Problemstellung</h2>
        <p>
          Die größte Herausforderung war es, eine Plattform zu entwickeln, die{" "}
          <span className="highlight">
            tiefere, emotional fundierte Verbindungen
          </span>{" "}
          ermöglicht, anstatt nur oberflächliche Kontakte zu schaffen. Unsere
          Wettbewerbsanalyse zeigte, dass bestehende Netzwerke wie LinkedIn,
          Facebook und XING oft eher „verbindend“ als „verstehend“ sind.
        </p>
        <blockquote>
          <strong>„Verbindungen, die auf Verständnis basieren, statt nur auf Netzwerken.“</strong>
        </blockquote>
        <img
          src="./assets/images/project_overview.png"
          alt="Projektübersicht"
        />
      </Card>
    </Section>
  );
}
