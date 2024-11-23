import React from "react";
import styled from "styled-components";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import HighlightText from "../components/HighlightText";
import ImageGallery from "../components/ImageGallery";
import Blockquote from "../components/Blockquote";

// Import images
import competitorAnalysis from "../assets/images/competitor_analysis.png";
import userResearchInsights from "../assets/images/user_research_insights.png";
import interviewQuotes from "../assets/images/interview_quotes.png";
import conceptualInsights from "../assets/images/conceptual_insights.png";
import personaTom from "../assets/images/persona_tom.png";

const Section = styled.section`
  padding: ${(props) => props.theme.spacing(6)} ${(props) => props.theme.spacing(4)};
  max-width: ${(props) => props.theme.breakpoints.xl};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing(6)};
`;

const List = styled.ul`
  margin: ${(props) => props.theme.spacing(4)} 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing(3)};
`;

const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${(props) => props.theme.spacing(3)};
  padding: ${(props) => props.theme.spacing(3)};
  border-radius: ${(props) => props.theme.borderRadius.small};
  background: ${(props) => props.theme.colors.neutral.lightest};
  box-shadow: ${(props) => props.theme.boxShadow.light};
  font-size: ${(props) => props.theme.typography.fontSize.body};
  color: ${(props) => props.theme.colors.neutral.dark};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${(props) => props.theme.boxShadow.medium};
  }

  strong {
    font-weight: bold;
    color: ${(props) => props.theme.colors.primary.dark};
  }
`;

export default function DiscoveryPhase() {
  const galleryImages = [
    { src: competitorAnalysis, alt: "Wettbewerbsanalyse-Diagramm" },
    { src: userResearchInsights, alt: "Diagramme aus dem User Research" },
    { src: interviewQuotes, alt: "Zitate aus Interviews" },
    { src: conceptualInsights, alt: "HMW-Diagramm" },
    { src: personaTom, alt: "Persona-Karte von Tom" },
  ];

  return (
    <Section>
      {/* Section Header */}
      <SectionHeader
        title="Entdeckungsphase"
        subtitle="Von der ersten Idee bis zu entscheidenden Nutzererkenntnissen."
      />

      {/* Desk Research & Wettbewerbsanalyse */}
      <Card title="Desk Research & Wettbewerbsanalyse">
        <p>
          Die Ausgangsidee war ursprünglich stark arbeitsfokussiert – eine Plattform für Teambuilding und Networking.
          Durch intensiven Desk Research, der sich über branchenrelevante Plattformen erstreckte, identifizierten wir
          zwei divergierende Ansätze:{" "}
          <HighlightText>Teambuilding im Berufsumfeld</HighlightText> und{" "}
          <HighlightText>Verbindungen im persönlichen Bereich</HighlightText>.
        </p>
        <ImageGallery images={[galleryImages[0]]} />
      </Card>

      {/* User Research */}
      <Card title="User Research (quantitativ & qualitativ)">
        <p>
          Mithilfe von <strong>70 Umfrageteilnehmern</strong> und <strong>5 ausführlichen Interviews</strong>{" "}
          identifizierten wir die Bedürfnisse potenzieller Nutzer. Die folgenden Ergebnisse zeigten klare Trends:
        </p>
        <List>
          <ListItem>
            🙋‍♀️ <strong>Soziale Kontakte und Hemmungen:</strong> „Soziale Hemmungen, fremde Personen anzusprechen“ (26
            Stimmen) und „Unpersönliche oder oberflächliche Verbindungen“ (ebenfalls 26 Stimmen) stellten die größten
            Herausforderungen dar.
          </ListItem>
          <ListItem>
            🏠 <strong>Hybrid-Arbeit dominiert:</strong> 36 Personen gaben an, in einem hybriden Arbeitsmodell tätig zu
            sein, was auf einen hohen Bedarf an Verbindungen außerhalb der physischen Büros hinweist.
          </ListItem>
          <ListItem>
            🔗 <strong>Wichtigkeit von Netzwerken:</strong> 30 Personen fühlten sich nur teilweise gut vernetzt, wobei 19
            Kontakte als „oberflächlich“ beschrieben wurden.
          </ListItem>
          <ListItem>
            💻 <strong>Plattformnutzung:</strong> 27 Personen bevorzugten digitale Netzwerke für berufliche und
            persönliche Zwecke.
          </ListItem>
          <ListItem>
            🎯 <strong>Aktivitätserwartungen:</strong> „Gemeinsame spielerische Elemente wie Challenges, Quizze oder
            Icebreaker“ wurden von 10 Teilnehmern als wünschenswert bewertet.
          </ListItem>
        </List>
        <ImageGallery images={[galleryImages[1]]} />
      </Card>

      {/* Key Insights */}
      <Card title="Key Insights">
        <List>
          <ListItem>
            🔍 <strong>Top Insight 1:</strong> „Die meisten meiner Kontakte sind oberflächlich“ wurde von 19 Personen
            angegeben – ein klares Signal für die Relevanz von KIM.
          </ListItem>
          <ListItem>
            💡 <strong>Top Insight 2:</strong> 64 % der Teilnehmer zeigten Interesse an einer Plattform, die soziale
            Hemmungen abbaut und durch Interessen verbindet.
          </ListItem>
          <ListItem>
            ⏳ <strong>Top Insight 3:</strong> „Unpersönliche Netzwerke“ und „Zeitmangel“ wurden mehrfach als
            Schmerzpunkte genannt.
          </ListItem>
        </List>
      </Card>

      {/* Interviews */}
      <Card title="Interviews">
        <p>Teilnehmer beschrieben wiederholt das Bedürfnis nach Tiefe in Verbindungen:</p>
        <Blockquote>
          „Ich kenne viele Leute, aber es sind meist oberflächliche Kontakte. Mir fehlt der Austausch, bei dem es
          wirklich um gemeinsame Interessen oder Werte geht.“
        </Blockquote>
        <Blockquote>
          „Es fällt mir schwer, auf fremde Menschen zuzugehen, besonders in großen Gruppen. Wenn ich wüsste, dass wir
          schon Gemeinsamkeiten haben, wäre das einfacher.“
        </Blockquote>
        <ImageGallery images={[galleryImages[2]]} />
      </Card>

      {/* How Might We */}
      <Card title="How Might We (HMW)-Frage">
        <p>Unsere zentrale Frage nach dem Research lautete:</p>
        <ImageGallery images={[galleryImages[3]]} />
      </Card>

      {/* Persona-Entwicklung */}
      <Card title="Persona-Entwicklung">
        <p>
          Die wichtigste Persona, <strong>Tom</strong>, repräsentiert die Zielgruppe: Ein junger Berufseinsteiger, der{" "}
          <HighlightText>tiefe Freundschaften</HighlightText> und <HighlightText>gemeinsame Aktivitäten</HighlightText>{" "}
          sucht, sich aber in Netzwerken oft gehemmt fühlt. Toms Persönlichkeit und Bedürfnisse wurden zum zentralen
          Punkt, um die Designentscheidungen bei KIM nutzerzentriert auszurichten.
        </p>
        <ImageGallery images={[galleryImages[4]]} />
      </Card>
    </Section>
  );
}
