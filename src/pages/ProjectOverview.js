import React from "react";
import styled from "styled-components";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import HighlightText from "../components/HighlightText";
import ImageContainer from "../components/ImageContainer";
import projectOverview from "../assets/images/project_overview.png";

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
  gap: ${(props) => props.theme.spacing(2)};
`;

const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${(props) => props.theme.spacing(3)};
  padding: ${(props) => props.theme.spacing(2)};
  border-radius: ${(props) => props.theme.borderRadius.small};
  background: ${(props) => props.theme.colors.neutral.lightest};
  font-size: ${(props) => props.theme.typography.fontSize.body};
  color: ${(props) => props.theme.colors.neutral.dark};
  box-shadow: ${(props) => props.theme.boxShadow.light};
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

export default function ProjectOverview() {
  return (
    <Section>
      {/* Section Header */}
      <SectionHeader
        title="Projektüberblick"
        subtitle="Ein tiefer Einblick in das Projekt, das Verbindungen neu definiert."
      />

      {/* Produktbeschreibung */}
      <Card title="Produktbeschreibung">
        <p>
          <strong>KIM</strong> ist mehr als nur eine Plattform. Sie dient als{" "}
          <HighlightText>Brücke zwischen Menschen</HighlightText>, die auf der
          Suche nach echten Verbindungen sind. Basierend auf{" "}
          <HighlightText>gemeinsamen Interessen, Zielen</HighlightText> und
          Persönlichkeiten, die durch KI ermittelt werden, bietet KIM einen
          neuen Ansatz für authentische Beziehungen.
        </p>
      </Card>

      {/* Team & Rollen */}
      <Card title="Team & Rollen">
        <p>
          Unser Team besteht aus <strong>Darya, Isabel und Jonas</strong>, die
          als UX/UI-Designer im{" "}
          <HighlightText>„neue fische“ Bootcamp</HighlightText>{" "}
          zusammenarbeiteten. Ziel war es, eine durchdachte, nutzerzentrierte
          App zu entwickeln, die innovative Technologien einsetzt.
        </p>
        <h3>Methoden & Tools</h3>
        <List>
          <ListItem>
            🎨 <strong>Figma & FigJam:</strong> Prototyping, Wireframes und
            Moodboards
          </ListItem>
          <ListItem>
            📋 <strong>Notion:</strong> Projektmanagement und zentrale
            Dokumentation
          </ListItem>
          <ListItem>
            🔬 <strong>Methoden:</strong> Desk Research, User Interviews,
            quantitative Umfragen, Personas, User Journey Maps, Wireframing,
            Prototyping, iteratives Testing
          </ListItem>
        </List>
      </Card>

      {/* Problemstellung */}
      <Card title="Problemstellung">
        <p>
          Die größte Herausforderung war es, eine Plattform zu entwickeln, die{" "}
          <HighlightText>tiefere, emotional fundierte Verbindungen</HighlightText>{" "}
          ermöglicht, anstatt nur oberflächliche Kontakte zu schaffen. Unsere
          Wettbewerbsanalyse zeigte, dass bestehende Netzwerke wie LinkedIn,
          Facebook und XING oft eher „verbindend“ als „verstehend“ sind.
        </p>
        <blockquote>
          <strong>
            „Verbindungen, die auf Verständnis basieren, statt nur auf
            Netzwerken.“
          </strong>
        </blockquote>
        <ImageContainer src={projectOverview} alt="Projektübersicht" />
      </Card>
    </Section>
  );
}
