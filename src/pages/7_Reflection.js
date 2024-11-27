// src/pages/7_Reflection.js
import React from 'react';
import styled from 'styled-components';
import HeaderSection from '../components/HeaderSection';
import CardContainer from '../components/CardContainer';
import Typography from '../components/Typography';
import ListComponent from '../components/ListComponent';

export default function ReflectionPage() {
  const challenges = [
    {
      content: (
        <>
          🧠 <Typography highlight="Emotionalität" /> vs. Funktionalität: Die größte Herausforderung bestand darin, eine Plattform zu schaffen, die
          beides vereint und dennoch zugänglich bleibt.
        </>
      ),
    },
    {
      content: (
        <>
          🎨 <Typography highlight="Design" /> einer „Seele“ für KIM: Es war wichtig, den Nutzer emotional einzufangen und
          gleichzeitig klare Interaktionen zu gewährleisten.
        </>
      ),
    },
  ];

  const learnings = [
    {
      content: (
        <>
          🔄 <Typography highlight="Iterative Prozesse" />: Die iterative Arbeitsweise hat uns gezeigt, wie wichtig
          kontinuierliches Nutzerfeedback ist, um echte Probleme zu lösen.
        </>
      ),
    },
    {
      content: (
        <>
          🎯 <Typography highlight="Flexibilität" />: Designentscheidungen erfordern Offenheit für Änderungen,
          insbesondere, wenn sie Nutzerbedürfnisse betreffen.
        </>
      ),
    },
  ];

  const futureOutlook = [
    {
      content: (
        <>
          🌍 <Typography highlight="Globale Skalierbarkeit" />: Mit mehr Ressourcen könnte KIM als Plattform für
          tiefere Verbindungen weltweit dienen.
        </>
      ),
    },
    {
      content: (
        <>
          🌟 <Typography highlight="Brückenbauer für reale Treffen" />: KIM könnte nicht nur digital, sondern auch durch
          reale Treffen langfristig Beziehungen fördern.
        </>
      ),
    },
  ];

  return (
    <ReflectionWrapper>
      {/* Header Section */}
      <HeaderSection
        title="Reflexion und Learnings"
        subtitle="Ein Blick zurück und nach vorne: Herausforderungen, Learnings und die Vision für die Zukunft von KIM."
        align="center"
        isFullWidth
      />

      {/* Herausforderungen */}
      <CardContainer
        title="Herausforderungen"
        textAlign="left"
        text={
          <Typography variant="body">
            Während der Entwicklung von KIM gab es zahlreiche Herausforderungen. Hier sind die beiden wichtigsten:
          </Typography>
        }
      >
        <ListComponent items={challenges} variant="standard" />
      </CardContainer>

      {/* Learnings */}
      <CardContainer
        title="Learnings"
        textAlign="left"
        text={
          <Typography variant="body">
            Die Entwicklung von KIM hat wertvolle Einsichten geliefert, die über das Projekt hinausgehen:
          </Typography>
        }
      >
        <ListComponent items={learnings} variant="highlighted" />
      </CardContainer>

      {/* Was wir anders machen würden */}
      <CardContainer
        title="Was wir anders machen würden"
        textAlign="left"
        text={
          <Typography variant="body">
            Mit mehr Zeit hätten wir die Usability-Tests früher integriert und KIM’s KI-Funktionen tiefergehend validiert, um die User Experience
            noch präziser zu gestalten.
          </Typography>
        }
      />

      {/* Zukunftsaussichten */}
      <CardContainer
        title="Zukunftsaussichten"
        textAlign="center"
        text={
          <Typography variant="body">
            Langfristig könnte KIM eine innovative Plattform für nachhaltige und tiefe soziale Verbindungen werden – nicht nur digital,
            sondern auch durch reale Treffen und Erlebnisse.
          </Typography>
        }
      >
        <ListComponent items={futureOutlook} variant="highlighted" />
      </CardContainer>
    </ReflectionWrapper>
  );
}

// Styled Components
const ReflectionWrapper = styled.section`
  padding: ${({ theme }) => theme.spacing(6)} ${({ theme }) => theme.spacing(4)};
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
`;
