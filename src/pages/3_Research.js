import React from 'react';
import Wrapper from '../components/layout/Wrapper';
import MediaDisplay from '../components/data-display/MediaDisplay';
import Typography, { TypoProvider } from '../components/common/Typography';
import ListComponent from '../components/data-display/ListComponent';
import HighlightText from '../components/utilities/HighlightText';

// Assets
import competitorAnalysis from '../assets/images/competitor_analysis.png';
import userResearchInsights from '../assets/images/user_research_insights.png';
import interviewQuotes from '../assets/images/interview_quotes.png';
import conceptualInsights from '../assets/images/conceptual_insights.png';
import personaTom from '../assets/images/persona_tom.png';

export default function Research() {
  const insights = [
    {
      content:
        '🙋‍♀️ Soziale Kontakte und Hemmungen: „Soziale Hemmungen, fremde Personen anzusprechen“ (26 Stimmen) und „Unpersönliche oder oberflächliche Verbindungen“ (ebenfalls 26 Stimmen) stellten die größten Herausforderungen dar.',
    },
    {
      content:
        '🏠 Hybrid-Arbeit dominiert: 36 Personen gaben an, in einem hybriden Arbeitsmodell tätig zu sein, was auf einen hohen Bedarf an Verbindungen außerhalb der physischen Büros hinweist.',
    },
    {
      content:
        '🔗 Wichtigkeit von Netzwerken: 30 Personen fühlten sich nur teilweise gut vernetzt, wobei 19 Kontakte als „oberflächlich“ beschrieben wurden.',
    },
    {
      content:
        '💻 Plattformnutzung: 27 Personen bevorzugten digitale Netzwerke für berufliche und persönliche Zwecke.',
    },
    {
      content:
        '🎯 Aktivitätserwartungen: „Gemeinsame spielerische Elemente wie Challenges, Quizze oder Icebreaker“ wurden von 10 Teilnehmern als wünschenswert bewertet.',
    },
  ];

  const keyInsights = [
    {
      content:
        '🔍 Top Insight 1: „Die meisten meiner Kontakte sind oberflächlich“ wurde von 19 Personen angegeben – ein klares Signal für die Relevanz von KIM.',
    },
    {
      content:
        '💡 Top Insight 2: 64 % der Teilnehmer zeigten Interesse an einer Plattform, die soziale Hemmungen abbaut und durch Interessen verbindet.',
    },
    {
      content:
        '⏳ Top Insight 3: „Unpersönliche Netzwerke“ und „Zeitmangel“ wurden mehrfach als Schmerzpunkte genannt.',
    },
  ];

  const media = [
    {
      type: 'image',
      src: competitorAnalysis,
      alt: 'Wettbewerbsanalyse-Diagramm',
    },
    {
      type: 'image',
      src: userResearchInsights,
      alt: 'Diagramme aus dem User Research',
    },
    { type: 'image', src: interviewQuotes, alt: 'Zitate aus Interviews' },
    { type: 'image', src: conceptualInsights, alt: 'HMW-Diagramm' },
    { type: 'image', src: personaTom, alt: 'Persona-Karte von Tom' },
  ];

  return (
    <Wrapper backgroundColor="background.light" padding="large" elevated>
      {/* Header */}
      <TypoProvider variant="h1" color="primary.main" align="center">
        <Wrapper gradient="primaryToSecondary" padding="large">
          <Typography>Entdeckungsphase</Typography>
          <Typography variant="h3">
            Von der ersten Idee bis zu entscheidenden Nutzererkenntnissen.
          </Typography>
        </Wrapper>
      </TypoProvider>

      {/* Desk Research & Wettbewerbsanalyse */}
      <TypoProvider variant="body" color="neutral.light">
        <Wrapper backgroundColor="background.dark" padding="large">
          <Typography variant="h2">
            <HighlightText>Desk Research & Wettbewerbsanalyse</HighlightText>
          </Typography>
          <Typography>
            Die Ausgangsidee war ursprünglich stark arbeitsfokussiert – eine
            Plattform für Teambuilding und Networking. Durch intensiven Desk
            Research identifizierten wir zwei Ansätze: Teambuilding im
            Berufsumfeld und Verbindungen im persönlichen Bereich.
          </Typography>
          <MediaDisplay media={[media[0]]} layout="grid" />
        </Wrapper>
      </TypoProvider>

      {/* User Research */}
      <TypoProvider variant="body" color="neutral.light">
        <Wrapper backgroundColor="background.dark" padding="large">
          <Typography variant="h2">
            <HighlightText>User Research</HighlightText>
          </Typography>
          <Typography>
            Mithilfe von <strong>70 Umfrageteilnehmern</strong> und{' '}
            <strong>5 ausführlichen Interviews</strong> identifizierten wir die
            Bedürfnisse potenzieller Nutzer.
          </Typography>
          <ListComponent items={insights} variant="highlighted" />
          <MediaDisplay media={[media[1]]} layout="grid" />
        </Wrapper>
      </TypoProvider>

      {/* Key Insights */}
      <TypoProvider variant="body" color="neutral.light">
        <Wrapper backgroundColor="background.dark" padding="large">
          <Typography variant="h2">
            <HighlightText>Key Insights</HighlightText>
          </Typography>
          <ListComponent items={keyInsights} variant="highlighted" />
        </Wrapper>
      </TypoProvider>

      {/* Persona Section */}
      <TypoProvider variant="body" color="neutral.light">
        <Wrapper backgroundColor="background.dark" padding="large">
          <Typography variant="h2">
            <HighlightText>Persona-Entwicklung</HighlightText>
          </Typography>
          <Typography>
            Die wichtigste Persona, <strong>Tom</strong>, repräsentiert die
            Zielgruppe: Ein junger Berufseinsteiger, der{' '}
            <HighlightText>tiefe Freundschaften</HighlightText> und{' '}
            <HighlightText>gemeinsame Aktivitäten</HighlightText> sucht.
          </Typography>
          <MediaDisplay media={[media[4]]} layout="grid" />
        </Wrapper>
      </TypoProvider>
    </Wrapper>
  );
}
