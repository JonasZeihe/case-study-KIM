import React from "react";
import styled from "styled-components";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import HighlightText from "../components/HighlightText";

const Section = styled.section`
  padding: ${(props) => props.theme.spacing(6)} ${(props) => props.theme.spacing(4)};
  max-width: ${(props) => props.theme.breakpoints.xl};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing(6)};
`;

const FutureBox = styled.div`
  background: ${(props) => props.theme.colors.accent.lightest};
  padding: ${(props) => props.theme.spacing(4)};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  box-shadow: ${(props) => props.theme.boxShadow.light};
  text-align: center;
  font-size: ${(props) => props.theme.typography.fontSize.body};
  color: ${(props) => props.theme.colors.primary.dark};
`;

export default function ReflectionAndLearnings() {
  return (
    <Section>
      {/* Section Header */}
      <SectionHeader
        title="Reflexion und Learnings"
        subtitle="Herausforderungen, Learnings und die Zukunft von KIM."
      />

      {/* Herausforderungen */}
      <Card title="Herausforderungen">
        <p>
          Die zentrale Herausforderung war, <HighlightText>KIM</HighlightText> mit einer „<HighlightText>Seele</HighlightText>“ zu versehen, um Nutzern ein
          Gefühl der echten Verbindung zu geben. Der iterative Prozess und das psychologische Storytelling halfen dabei, KIM zu etwas zu machen, das{" "}
          <HighlightText>Vertrauen und Tiefe</HighlightText> vermittelt.
        </p>
      </Card>

      {/* Learnings */}
      <Card title="Learnings">
        <p>
          Die Balance zwischen <HighlightText>Funktionalität</HighlightText> und <HighlightText>Emotionalität</HighlightText> zu finden, war das größte Learning.
          Der Wechsel auf <HighlightText>mid-fidelity</HighlightText> und die Entscheidung, KIM durch{" "}
          <HighlightText>psychologisch fundierte Fragen</HighlightText> und Emotionen zu formen, zeigte uns, wie wichtig es ist, Flexibilität in den
          Designprozess einzubringen.
        </p>
      </Card>

      {/* Was wir anders machen würden */}
      <Card title="Was wir anders machen würden">
        <p>
          Mit mehr Zeit hätten wir die <HighlightText>Usability-Tests</HighlightText> früher integriert und KIM’s <HighlightText>KI-Funktionen</HighlightText>{" "}
          tiefergehend validiert, um die User Experience noch präziser zu gestalten.
        </p>
      </Card>

      {/* Zukunftsaussichten */}
      <Card title="Zukunftsaussichten">
        <p>
          Langfristig könnte KIM eine innovative Plattform für nachhaltige und tiefe <HighlightText>soziale Verbindungen</HighlightText> werden – nicht nur
          digital, sondern auch durch reale Treffen und Erlebnisse.
        </p>
        <FutureBox>
          🌟 <strong>Zukunftsvision:</strong> KIM wird ein <HighlightText>„Brückenbauer“</HighlightText>, der Beziehungen über digitale Interaktionen hinaus
          in die reale Welt führt.
        </FutureBox>
      </Card>
    </Section>
  );
}
