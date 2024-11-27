// src/pages/3_Research.js
import React from 'react';
import styled from 'styled-components';
import HeaderSection from '../components/HeaderSection';
import CardContainer from '../components/CardContainer';
import MediaDisplay from '../components/MediaDisplay';
import Typography from '../components/Typography';
import ListComponent from '../components/ListComponent';

// Assets
import competitorAnalysis from '../assets/images/competitor_analysis.png';
import userResearchInsights from '../assets/images/user_research_insights.png';
import interviewQuotes from '../assets/images/interview_quotes.png';
import conceptualInsights from '../assets/images/conceptual_insights.png';
import personaTom from '../assets/images/persona_tom.png';

export default function Research() {
  const insights = [
    {
      content: (
        <Typography variant="body">
          🙋‍♀️ <strong>Soziale Kontakte und Hemmungen:</strong> „Soziale Hemmungen, fremde Personen anzusprechen“ (26
          Stimmen) und „Unpersönliche oder oberflächliche Verbindungen“ (ebenfalls 26 Stimmen) stellten die größten
          Herausforderungen dar.
        </Typography>
      ),
    },
    {
      content: (
        <Typography variant="body">
          🏠 <strong>Hybrid-Arbeit dominiert:</strong> 36 Personen gaben an, in einem hybriden Arbeitsmodell tätig zu
          sein, was auf einen hohen Bedarf an Verbindungen außerhalb der physischen Büros hinweist.
        </Typography>
      ),
    },
    {
      content: (
        <Typography variant="body">
          🔗 <strong>Wichtigkeit von Netzwerken:</strong> 30 Personen fühlten sich nur teilweise gut vernetzt, wobei 19
          Kontakte als „oberflächlich“ beschrieben wurden.
        </Typography>
      ),
    },
    {
      content: (
        <Typography variant="body">
          💻 <strong>Plattformnutzung:</strong> 27 Personen bevorzugten digitale Netzwerke für berufliche und
          persönliche Zwecke.
        </Typography>
      ),
    },
    {
      content: (
        <Typography variant="body">
          🎯 <strong>Aktivitätserwartungen:</strong> „Gemeinsame spielerische Elemente wie Challenges, Quizze oder
          Icebreaker“ wurden von 10 Teilnehmern als wünschenswert bewertet.
        </Typography>
      ),
    },
  ];

  const keyInsights = [
    {
      content: (
        <Typography variant="body">
          🔍 <strong>Top Insight 1:</strong> „Die meisten meiner Kontakte sind oberflächlich“ wurde von 19 Personen
          angegeben – ein klares Signal für die Relevanz von KIM.
        </Typography>
      ),
    },
    {
      content: (
        <Typography variant="body">
          💡 <strong>Top Insight 2:</strong> 64 % der Teilnehmer zeigten Interesse an einer Plattform, die soziale
          Hemmungen abbaut und durch Interessen verbindet.
        </Typography>
      ),
    },
    {
      content: (
        <Typography variant="body">
          ⏳ <strong>Top Insight 3:</strong> „Unpersönliche Netzwerke“ und „Zeitmangel“ wurden mehrfach als
          Schmerzpunkte genannt.
        </Typography>
      ),
    },
  ];

  const media = [
    { type: 'image', src: competitorAnalysis, alt: 'Wettbewerbsanalyse-Diagramm' },
    { type: 'image', src: userResearchInsights, alt: 'Diagramme aus dem User Research' },
    { type: 'image', src: interviewQuotes, alt: 'Zitate aus Interviews' },
    { type: 'image', src: conceptualInsights, alt: 'HMW-Diagramm' },
    { type: 'image', src: personaTom, alt: 'Persona-Karte von Tom' },
  ];

  return (
    <ResearchWrapper>
      {/* Header Section */}
      <HeaderSection
        title="Entdeckungsphase"
        subtitle="Von der ersten Idee bis zu entscheidenden Nutzererkenntnissen."
        align="center"
        isFullWidth
      />

      {/* Wettbewerbsanalyse */}
      <CardContainer
        title="Desk Research & Wettbewerbsanalyse"
        textAlign="left"
        text={
          <Typography variant="body">
            Die Ausgangsidee war ursprünglich stark arbeitsfokussiert – eine Plattform für Teambuilding und Networking.
            Durch intensiven Desk Research identifizierten wir zwei Ansätze: Teambuilding im Berufsumfeld und Verbindungen
            im persönlichen Bereich.
          </Typography>
        }
      >
        <MediaDisplay media={[media[0]]} layout="grid" />
      </CardContainer>

      {/* User Research */}
      <CardContainer
        title="User Research (quantitativ & qualitativ)"
        textAlign="left"
        text={
          <Typography variant="body">
            Mithilfe von <strong>70 Umfrageteilnehmern</strong> und <strong>5 ausführlichen Interviews</strong>{' '}
            identifizierten wir die Bedürfnisse potenzieller Nutzer. Die folgenden Ergebnisse zeigten klare Trends:
          </Typography>
        }
      >
        <ListComponent items={insights} />
        <MediaDisplay media={[media[1]]} layout="grid" />
      </CardContainer>

      {/* Key Insights */}
      <CardContainer title="Key Insights" textAlign="left">
        <ListComponent items={keyInsights} />
      </CardContainer>

      {/* Persona */}
      <CardContainer
        title="Persona-Entwicklung"
        textAlign="left"
        text={
          <Typography variant="body">
            Die wichtigste Persona, <strong>Tom</strong>, repräsentiert die Zielgruppe: Ein junger Berufseinsteiger, der{' '}
            <Typography variant="body" highlight="tiefe Freundschaften" /> und{' '}
            <Typography variant="body" highlight="gemeinsame Aktivitäten" /> sucht.
          </Typography>
        }
      >
        <MediaDisplay media={[media[4]]} layout="grid" />
      </CardContainer>
    </ResearchWrapper>
  );
}

// Styled Components
const ResearchWrapper = styled.section`
  padding: ${({ theme }) => theme.spacing(6)} ${({ theme }) => theme.spacing(4)};
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
`;
