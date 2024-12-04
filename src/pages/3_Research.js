import React from 'react';
import Wrapper from '../components/layout/Wrapper';
import MediaDisplay from '../components/data-display/MediaDisplay';
import Typography from '../components/common/Typography';
import HighlightText from '../components/utilities/HighlightText';
import ListComponent from '../components/data-display/ListComponent';

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
        <>
          🙋‍♀️ <HighlightText>Soziale Kontakte und Hemmungen:</HighlightText>{' '}
          „Soziale Hemmungen, fremde Personen anzusprechen“ (26 Stimmen) und
          „Unpersönliche oder oberflächliche Verbindungen“ (ebenfalls 26
          Stimmen) stellten die größten Herausforderungen dar.
        </>
      ),
    },
    {
      content: (
        <>
          🏠 <HighlightText>Hybrid-Arbeit dominiert:</HighlightText> 36 Personen
          gaben an, in einem hybriden Arbeitsmodell tätig zu sein, was auf einen
          hohen Bedarf an Verbindungen außerhalb der physischen Büros hinweist.
        </>
      ),
    },
    {
      content: (
        <>
          🔗 <HighlightText>Wichtigkeit von Netzwerken:</HighlightText> 30
          Personen fühlten sich nur teilweise gut vernetzt, wobei 19 Kontakte
          als „oberflächlich“ beschrieben wurden.
        </>
      ),
    },
    {
      content: (
        <>
          💻 <HighlightText>Plattformnutzung:</HighlightText> 27 Personen
          bevorzugten digitale Netzwerke für berufliche und persönliche Zwecke.
        </>
      ),
    },
    {
      content: (
        <>
          🎯 <HighlightText>Aktivitätserwartungen:</HighlightText> „Gemeinsame
          spielerische Elemente wie Challenges, Quizze oder Icebreaker“ wurden
          von 10 Teilnehmern als wünschenswert bewertet.
        </>
      ),
    },
  ];

  const keyInsights = [
    {
      content: (
        <>
          🔍 <HighlightText>Top Insight 1:</HighlightText> „Die meisten meiner
          Kontakte sind oberflächlich“ wurde von 19 Personen angegeben – ein
          klares Signal für die Relevanz von KIM.
        </>
      ),
    },
    {
      content: (
        <>
          💡 <HighlightText>Top Insight 2:</HighlightText> 64 % der Teilnehmer
          zeigten Interesse an einer Plattform, die soziale Hemmungen abbaut und
          durch Interessen verbindet.
        </>
      ),
    },
    {
      content: (
        <>
          ⏳ <HighlightText>Top Insight 3:</HighlightText> „Unpersönliche
          Netzwerke“ und „Zeitmangel“ wurden mehrfach als Schmerzpunkte genannt.
        </>
      ),
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
    <Wrapper backgroundColor="background.dark" padding="large" elevated>
      {/* Header */}
      <Wrapper gradient="primaryToSecondary" padding="large">
        <Typography variant="h1" align="center" color="neutral.white">
          Entdeckungsphase
        </Typography>
        <Typography variant="h3" color="neutral.white" align="center">
          Von der ersten Idee bis zu entscheidenden Nutzererkenntnissen.
        </Typography>
      </Wrapper>

      {/* Desk Research & Wettbewerbsanalyse */}
      <Wrapper backgroundColor="neutral.white" padding="large">
        <Typography variant="h2" color="primary.main">
          Desk Research & Wettbewerbsanalyse
        </Typography>
        <Typography color="primary.main">
          Die Ausgangsidee war ursprünglich stark arbeitsfokussiert – eine
          Plattform für <HighlightText>Teambuilding</HighlightText> und{' '}
          <HighlightText>Networking</HighlightText>. Durch intensiven Desk
          Research identifizierten wir zwei Ansätze:{' '}
          <HighlightText>Teambuilding im Berufsumfeld</HighlightText> und{' '}
          <HighlightText>Verbindungen im persönlichen Bereich</HighlightText>.
        </Typography>
        <MediaDisplay media={[media[0]]} layout="grid" />
      </Wrapper>

      {/* User Research */}
      <Wrapper backgroundColor="neutral.white" padding="large">
        <Typography variant="h2" color="primary.main">
          User Research
        </Typography>
        <Typography color="primary.main">
          Mithilfe von <HighlightText>70 Umfrageteilnehmern</HighlightText> und{' '}
          <HighlightText>5 ausführlichen Interviews</HighlightText>{' '}
          identifizierten wir die Bedürfnisse potenzieller Nutzer.
        </Typography>
        <ListComponent items={insights} variant="highlighted" />
        <MediaDisplay media={[media[1]]} layout="grid" />
      </Wrapper>

      {/* Key Insights */}
      <Wrapper backgroundColor="neutral.white" padding="large">
        <Typography variant="h2" color="primary.main">
          Key Insights
        </Typography>
        <ListComponent items={keyInsights} variant="highlighted" />
      </Wrapper>

      {/* Persona Section */}
      <Wrapper backgroundColor="neutral.white" padding="large">
        <Typography variant="h2" color="primary.main">
          Persona-Entwicklung
        </Typography>
        <Typography color="primary.main">
          Die wichtigste Persona, <HighlightText>Tom</HighlightText>,
          repräsentiert die Zielgruppe: Ein junger Berufseinsteiger, der{' '}
          <HighlightText>tiefe Freundschaften</HighlightText> und{' '}
          <HighlightText>gemeinsame Aktivitäten</HighlightText> sucht.
        </Typography>
        <MediaDisplay media={[media[4]]} layout="grid" />
      </Wrapper>
    </Wrapper>
  );
}
