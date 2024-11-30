import React from "react";
import Wrapper from "../components/layout/Wrapper";
import MediaDisplay from "../components/data-display/MediaDisplay";
import Typography from "../components/common/Typography";
import ListComponent from "../components/data-display/ListComponent";
import HighlightText from "../components/utilities/HighlightText";

// Assets
import competitorAnalysis from "../assets/images/competitor_analysis.png";
import userResearchInsights from "../assets/images/user_research_insights.png";
import interviewQuotes from "../assets/images/interview_quotes.png";
import conceptualInsights from "../assets/images/conceptual_insights.png";
import personaTom from "../assets/images/persona_tom.png";

export default function Research() {
  const insights = [
    {
      content: (
        <Typography variant="body">
          🙋‍♀️ <strong>Soziale Kontakte und Hemmungen:</strong> „Soziale Hemmungen, fremde Personen
          anzusprechen“ (26 Stimmen) und „Unpersönliche oder oberflächliche Verbindungen“
          (ebenfalls 26 Stimmen) stellten die größten Herausforderungen dar.
        </Typography>
      ),
    },
    {
      content: (
        <Typography variant="body">
          🏠 <strong>Hybrid-Arbeit dominiert:</strong> 36 Personen gaben an, in einem hybriden
          Arbeitsmodell tätig zu sein, was auf einen hohen Bedarf an Verbindungen außerhalb der
          physischen Büros hinweist.
        </Typography>
      ),
    },
    {
      content: (
        <Typography variant="body">
          🔗 <strong>Wichtigkeit von Netzwerken:</strong> 30 Personen fühlten sich nur teilweise gut
          vernetzt, wobei 19 Kontakte als „oberflächlich“ beschrieben wurden.
        </Typography>
      ),
    },
    {
      content: (
        <Typography variant="body">
          💻 <strong>Plattformnutzung:</strong> 27 Personen bevorzugten digitale Netzwerke für
          berufliche und persönliche Zwecke.
        </Typography>
      ),
    },
    {
      content: (
        <Typography variant="body">
          🎯 <strong>Aktivitätserwartungen:</strong> „Gemeinsame spielerische Elemente wie
          Challenges, Quizze oder Icebreaker“ wurden von 10 Teilnehmern als wünschenswert bewertet.
        </Typography>
      ),
    },
  ];

  const keyInsights = [
    {
      content: (
        <Typography variant="body">
          🔍 <strong>Top Insight 1:</strong> „Die meisten meiner Kontakte sind oberflächlich“ wurde
          von 19 Personen angegeben – ein klares Signal für die Relevanz von KIM.
        </Typography>
      ),
    },
    {
      content: (
        <Typography variant="body">
          💡 <strong>Top Insight 2:</strong> 64 % der Teilnehmer zeigten Interesse an einer
          Plattform, die soziale Hemmungen abbaut und durch Interessen verbindet.
        </Typography>
      ),
    },
    {
      content: (
        <Typography variant="body">
          ⏳ <strong>Top Insight 3:</strong> „Unpersönliche Netzwerke“ und „Zeitmangel“ wurden
          mehrfach als Schmerzpunkte genannt.
        </Typography>
      ),
    },
  ];

  const media = [
    { type: "image", src: competitorAnalysis, alt: "Wettbewerbsanalyse-Diagramm" },
    { type: "image", src: userResearchInsights, alt: "Diagramme aus dem User Research" },
    { type: "image", src: interviewQuotes, alt: "Zitate aus Interviews" },
    { type: "image", src: conceptualInsights, alt: "HMW-Diagramm" },
    { type: "image", src: personaTom, alt: "Persona-Karte von Tom" },
  ];

  return (
    <>
      {/* Header */}
      <Wrapper>
      <Wrapper
        variant="hero"
        gradient="primaryDynamic"
        textAlign="center"
        padding="large"
      >
        <Typography variant="h1">Entdeckungsphase</Typography>
        <Typography variant="h3">
          Von der ersten Idee bis zu entscheidenden Nutzererkenntnissen.
        </Typography>
      </Wrapper>

      {/* Desk Research & Wettbewerbsanalyse */}
      <Wrapper variant="section" padding="large">
        <Typography variant="h2">
          <HighlightText>Desk Research & Wettbewerbsanalyse</HighlightText>
        </Typography>
        <Typography variant="body">
          Die Ausgangsidee war ursprünglich stark arbeitsfokussiert – eine Plattform für
          Teambuilding und Networking. Durch intensiven Desk Research identifizierten wir zwei
          Ansätze: Teambuilding im Berufsumfeld und Verbindungen im persönlichen Bereich.
        </Typography>
        <MediaDisplay media={[media[0]]} layout="grid" />
      </Wrapper>

      {/* User Research */}
      <Wrapper variant="section" padding="large" gradient="accentToPrimary">
        <Typography variant="h2">
          <HighlightText>User Research</HighlightText>
        </Typography>
        <Typography variant="body">
          Mithilfe von <strong>70 Umfrageteilnehmern</strong> und{" "}
          <strong>5 ausführlichen Interviews</strong> identifizierten wir die Bedürfnisse
          potenzieller Nutzer.
        </Typography>
        <ListComponent items={insights} variant="highlighted" />
        <MediaDisplay media={[media[1]]} layout="grid" />
      </Wrapper>

      {/* Key Insights */}
      <Wrapper variant="section" padding="large" gradient="dramaticPrimaryToAccent">
        <Typography variant="h2">
          <HighlightText>Key Insights</HighlightText>
        </Typography>
        <ListComponent items={keyInsights} variant="highlighted" />
      </Wrapper>

      {/* Persona Section */}
      <Wrapper variant="section" padding="large">
        <Typography variant="h2">
          <HighlightText>Persona-Entwicklung</HighlightText>
        </Typography>
        <Typography variant="body">
          Die wichtigste Persona, <strong>Tom</strong>, repräsentiert die Zielgruppe: Ein junger
          Berufseinsteiger, der <HighlightText>tiefe Freundschaften</HighlightText> und{" "}
          <HighlightText>gemeinsame Aktivitäten</HighlightText> sucht.
        </Typography>
        <MediaDisplay media={[media[4]]} layout="grid" />
      </Wrapper>
      </Wrapper>
    </>
  );
}
