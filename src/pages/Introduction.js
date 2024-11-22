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

export default function Introduction() {
  return (
    <Section>
      {/* Section Header */}
      <SectionHeader>
        <h1>KIM – Die Verbindungs-App für echte Freundschaften</h1>
        <p className="subtitle">
          Verbindungen schaffen, die auf einer Wellenlänge basieren.
        </p>
      </SectionHeader>

      {/* Key Content */}
      <Card>
        <h2>Kurzbeschreibung</h2>
        <p>
          <strong>KIM</strong> ist eine App, die mit{" "}
          <span className="highlight">KI-gestützter Persönlichkeitsanalyse</span>{" "}
          arbeitet, um Menschen zusammenzubringen, die ähnliche Interessen und
          Werte teilen.
        </p>
        <p>
          Ziel ist es, echte Verbindungen zu schaffen, die nicht auf
          Oberflächlichkeit basieren, sondern auf gemeinsamen Interessen und
          tiefgreifender Authentizität.
        </p>
        <img
          src="./assets/images/hero_kim_chat_screen.png"
          alt="Hero-Screen von KIM"
        />
      </Card>

      <Card>
        <h2>Das Ziel</h2>
        <p>
          Entwicklung einer Plattform, die über oberflächliche Kontakte
          hinausgeht und echte Beziehungen ermöglicht. Im Mittelpunkt stehen die
          Persönlichkeit und geteilte Interessen der Nutzer.
        </p>
        <blockquote>
          <strong>„Verbindungen, die zählen.“</strong>
        </blockquote>
      </Card>
    </Section>
  );
}
