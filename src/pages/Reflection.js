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

const Card = styled.div`
  background: var(--neutral-1);
  border-radius: var(--border-radius-medium);
  box-shadow: var(--box-shadow-light);
  padding: var(--spacing-32);

  h1 {
    font: var(--font-headline-1);
    color: var(--primary-3);
    margin-bottom: var(--spacing-32);
    text-align: center;
  }

  h2 {
    font: var(--font-headline-2);
    color: var(--primary-3);
    margin-bottom: var(--spacing-16);
  }

  p {
    font: var(--font-body);
    color: var(--neutral-6);
    margin-bottom: var(--spacing-24);
  }
`;

export default function Reflection() {
  return (
    <Section>
      <Card>
        <h1>Reflexion und Learnings</h1>

        <h2>Herausforderungen</h2>
        <p>
          Die zentrale Herausforderung war, KIM mit einer „Seele“ zu versehen, um Nutzern ein Gefühl der echten Verbindung zu geben.
          Der iterative Prozess und das psychologische Storytelling halfen dabei, KIM zu etwas zu machen, das Vertrauen und Tiefe vermittelt.
        </p>

        <h2>Learnings</h2>
        <p>
          Die Balance zwischen Funktionalität und Emotionalität zu finden, war das größte Learning. Der Wechsel auf mid-fidelity
          und die Entscheidung, KIM durch psychologisch fundierte Fragen und Emotionen zu formen, zeigte uns, wie wichtig es ist,
          Flexibilität in den Designprozess einzubringen.
        </p>

        <h2>Was wir anders machen würden</h2>
        <p>
          Mit mehr Zeit hätten wir die Usability-Tests früher integriert und KIM’s KI-Funktionen tiefergehend validiert, um die User Experience
          noch präziser zu gestalten.
        </p>

        <h2>Zukunftsaussichten</h2>
        <p>
          Langfristig könnte KIM eine innovative Plattform für nachhaltige und tiefe soziale Verbindungen werden – nicht nur digital,
          sondern auch durch reale Treffen und Erlebnisse.
        </p>
      </Card>
    </Section>
  );
}
