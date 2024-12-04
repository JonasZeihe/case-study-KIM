import React from 'react';
import Wrapper from '../components/layout/Wrapper';
import MediaDisplay from '../components/data-display/MediaDisplay';
import Typography from '../styles/Typography';
import HighlightText from '../components/utilities/HighlightText';
import QuoteComponent from '../components/sections/QuoteComponent';
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

  return (
    <Wrapper backgroundColor="background.dark" elevated>
      {/* Header */}
      <Wrapper gradient="primaryToSecondary">
        <Typography variant="h1" align="center" color="neutral.white">
          Entdeckungsphase
        </Typography>
        <Typography variant="h3" color="neutral.white" align="center">
          Von der ersten Idee bis zu entscheidenden Nutzererkenntnissen.
        </Typography>
      </Wrapper>

      {/* Desk Research & Wettbewerbsanalyse */}
      <Wrapper backgroundColor="neutral.white">
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
        <MediaDisplay
          media={[
            {
              type: 'image',
              src: competitorAnalysis,
              alt: 'Wettbewerbsanalyse-Diagramm',
            },
          ]}
        />
      </Wrapper>

      {/* User Research */}
      <Wrapper backgroundColor="neutral.white">
        <Typography variant="h2" color="primary.main">
          User Research (quantitativ & qualitativ)
        </Typography>
        <Typography color="primary.main">
          Mithilfe von <HighlightText>70 Umfrageteilnehmern</HighlightText> und{' '}
          <HighlightText>5 ausführlichen Interviews</HighlightText>{' '}
          identifizierten wir die Bedürfnisse potenzieller Nutzer. Die folgenden
          Ergebnisse zeigten klare Trends:
        </Typography>
        <ListComponent items={insights} />
        <MediaDisplay
          media={[
            {
              type: 'image',
              src: userResearchInsights,
              alt: 'Diagramme aus dem User Research',
            },
          ]}
        />

        {/* Key Insights */}
        <Wrapper backgroundColor="neutral.white" elevated>
          <Typography variant="h2" color="primary.main">
            Key Insights
          </Typography>
          <ListComponent items={keyInsights} />
        </Wrapper>
      </Wrapper>

      {/* Interviews */}
      <Wrapper backgroundColor="neutral.white">
        <Typography variant="h2" color="primary.main">
          Interviews
        </Typography>
        <Typography color="primary.main">
          Teilnehmer beschrieben wiederholt das Bedürfnis nach Tiefe in
          Verbindungen:
        </Typography>
        <QuoteComponent
          text="„Ich kenne viele Leute, aber es sind meist oberflächliche Kontakte.
          Mir fehlt der Austausch, bei dem es wirklich um gemeinsame Interessen
          oder Werte geht."
        />

        <QuoteComponent
          text="„Es fällt mir schwer, auf fremde Menschen zuzugehen, besonders in
          großen Gruppen. Wenn ich wüsste, dass wir schon Gemeinsamkeiten haben,
          wäre das einfacher."
        />

        <MediaDisplay
          media={[
            { type: 'image', src: interviewQuotes, alt: 'Interview Quotes' },
          ]}
        />
      </Wrapper>

      {/* How Might We */}
      <Wrapper backgroundColor="neutral.white">
        <Typography variant="h2" color="primary.main">
          How Might We (HMW)-Frage
        </Typography>
        <Typography color="primary.main">
          Unsere zentrale Frage nach dem Research lautete:
        </Typography>
        <MediaDisplay
          media={[
            { type: 'image', src: conceptualInsights, alt: 'HMW-Diagramm' },
          ]}
        />
      </Wrapper>

      {/* Persona Section */}
      <Wrapper backgroundColor="neutral.white">
        <Typography variant="h2" color="primary.main">
          Persona-Entwicklung
        </Typography>
        <Typography color="primary.main">
          Die wichtigste Persona, <HighlightText>Tom</HighlightText>,
          repräsentiert die Zielgruppe: Ein junger Berufseinsteiger, der{' '}
          <HighlightText>tiefe Freundschaften</HighlightText> und{' '}
          <HighlightText>gemeinsame Aktivitäten</HighlightText> sucht, sich aber
          in Netzwerken oft gehemmt fühlt. Toms Persönlichkeit und Bedürfnisse
          wurden zum zentralen Punkt, um die Designentscheidungen bei KIM
          nutzerzentriert auszurichten.
        </Typography>
        <MediaDisplay
          media={[
            { type: 'image', src: personaTom, alt: 'Persona-Karte von Tom' },
          ]}
        />
      </Wrapper>
    </Wrapper>
  );
}
