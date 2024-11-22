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

const GridCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-32);
  align-items: center;

  img {
    width: 100%;
    border-radius: var(--border-radius-medium);
    box-shadow: var(--box-shadow-light);
  }

  p {
    font: var(--font-body);
    color: var(--neutral-6);
  }
`;

export default function Research() {
  return (
    <Section>
      {/* Section Header */}
      <SectionHeader>
        <h1>Entdeckungsphase</h1>
        <p className="subtitle">
          Von der ersten Idee bis zu entscheidenden Nutzererkenntnissen.
        </p>
      </SectionHeader>

      {/* Desk Research & Wettbewerbsanalyse */}
      <Card>
        <h2>Desk Research & Wettbewerbsanalyse</h2>
        <p>
          Die Ausgangsidee war ursprünglich stark arbeitsfokussiert – eine
          Plattform für Teambuilding und Networking. Durch intensiven Desk
          Research, der sich über branchenrelevante Plattformen erstreckte,
          identifizierten wir zwei divergierende Ansätze:{" "}
          <span className="highlight">Teambuilding im Berufsumfeld</span> und{" "}
          <span className="highlight">Verbindungen im persönlichen Bereich</span>.
        </p>
        <img
          src="./assets/images/competitor_analysis.png"
          alt="Wettbewerbsanalyse-Diagramm"
        />
      </Card>

      {/* User Research */}
      <Card>
        <h2>User Research (quantitativ & qualitativ)</h2>
        <p>
          Mithilfe von <strong>70 Umfrageteilnehmern</strong> und{" "}
          <strong>5 ausführlichen Interviews</strong> identifizierten wir die
          Bedürfnisse potenzieller Nutzer. Die folgenden Ergebnisse zeigten
          klare Trends:
        </p>
        <ul>
          <li>
            🙋‍♀️ <strong>Soziale Kontakte und Hemmungen:</strong> „Soziale
            Hemmungen, fremde Personen anzusprechen“ (26 Stimmen) und
            „Unpersönliche oder oberflächliche Verbindungen“ (ebenfalls 26
            Stimmen) stellten die größten Herausforderungen dar.
          </li>
          <li>
            🏠 <strong>Hybrid-Arbeit dominiert:</strong> 36 Personen gaben an, in
            einem hybriden Arbeitsmodell tätig zu sein, was auf einen hohen
            Bedarf an Verbindungen außerhalb der physischen Büros hinweist.
          </li>
          <li>
            🔗 <strong>Wichtigkeit von Netzwerken:</strong> 30 Personen fühlten
            sich nur teilweise gut vernetzt, wobei 19 Kontakte als
            „oberflächlich“ beschrieben wurden.
          </li>
          <li>
            💻 <strong>Plattformnutzung:</strong> 27 Personen bevorzugten digitale
            Netzwerke für berufliche und persönliche Zwecke.
          </li>
          <li>
            🎯 <strong>Aktivitätserwartungen:</strong> „Gemeinsame spielerische
            Elemente wie Challenges, Quizze oder Icebreaker“ wurden von 10
            Teilnehmern als wünschenswert bewertet.
          </li>
        </ul>
        <img
          src="./assets/images/user_research_insights.png"
          alt="Diagramme aus dem User Research"
        />
      </Card>

      {/* Persona */}
      <GridCard>
        <div>
          <h2>Persona-Entwicklung</h2>
          <p>
            Die wichtigste Persona, <strong>Tom</strong>, repräsentiert die
            Zielgruppe: Ein junger Berufseinsteiger, der{" "}
            <span className="highlight">tiefe Freundschaften</span> und{" "}
            <span className="highlight">gemeinsame Aktivitäten</span> sucht, sich
            aber in Netzwerken oft gehemmt fühlt. Toms Persönlichkeit und
            Bedürfnisse wurden zum zentralen Punkt, um die Designentscheidungen
            bei KIM nutzerzentriert auszurichten.
          </p>
        </div>
        <img
          src="./assets/images/persona_tom.png"
          alt="Persona-Karte von Tom"
        />
      </GridCard>
    </Section>
  );
}
