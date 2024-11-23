import React from "react";
import styled from "styled-components";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import HighlightText from "../components/HighlightText";
import ImageGallery from "../components/ImageGallery";

// Import images
import wireframesMidFidelity from "../assets/images/wireframes_mid_fidelity.png";
import styleguideColorsTypography from "../assets/images/styleguide_colors_typography.png";

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

export default function UXDesignProcess() {
  const galleryImages = [
    { src: wireframesMidFidelity, alt: "Low-Fidelity-Wireframes und Entwürfe" },
    { src: styleguideColorsTypography, alt: "Styleguide für Farben und Typografie" },
  ];

  return (
    <Section>
      {/* Section Header */}
      <SectionHeader
        title="UX-Designprozess"
        subtitle="Vom ersten Konzept bis zur finalen Umsetzung – ein nutzerzentrierter Ansatz."
      />

      {/* Ideation und Entwürfe */}
      <Card title="Ideation und Entwürfe">
        <p>
          Die ersten Schritte im Designprozess bestanden aus{" "}
          <HighlightText>Low-Fidelity-Wireframes</HighlightText> und{" "}
          <HighlightText>User Journey Maps</HighlightText>, um die grundlegende
          Struktur der App zu klären. Eine große Herausforderung war es,{" "}
          <strong>KIM</strong> als{" "}
          <HighlightText>persönlichen Verbindungs-Assistenten</HighlightText> zu
          gestalten, statt nur eine Plattform für Klick-Interaktionen zu schaffen.
        </p>
        <p>
          Um das <strong>Storytelling</strong> und die emotionale Verbindung zu
          verbessern, wechselten wir auf eine{" "}
          <HighlightText>mid-fidelity Struktur</HighlightText>, die Toms Journey
          detaillierter und ansprechender darstellt.
        </p>
        <p>
          Der <HighlightText>Prototyping-Prozess</HighlightText> war geprägt von
          kontinuierlichem Testing und iterativen Verbesserungen. Besonders der
          Wechsel auf <HighlightText>mid-fidelity Wireframes</HighlightText> half
          uns, die App-Nutzung und das <strong>Storytelling</strong> besser zu
          veranschaulichen – speziell für den KI-Chat.
        </p>
        <ImageGallery images={[galleryImages[0]]} />
      </Card>

      {/* Interaktionen und Features */}
      <Card title="Interaktionen und Features">
        <p>
          Die <strong>interaktiven Features</strong> der App wurden entwickelt,
          um Toms Journey intuitiv und visuell ansprechend zu gestalten. Dazu
          gehören:
        </p>
        <List>
          <ListItem>
            📊 Ein „<HighlightText>Verbindungstiefen-Radialdiagramm</HighlightText>“,
            das Toms Fortschritte und die Kompatibilität der Gruppe darstellt.
          </ListItem>
          <ListItem>
            🤖 Eine intuitive <HighlightText>KI-Chat-Funktion</HighlightText>, die
            den ersten Kontakt erleichtert.
          </ListItem>
          <ListItem>
            ❄️ Interaktive <strong>Icebreaker-Fragen</strong>, die soziale
            Hemmungen abbauen.
          </ListItem>
        </List>
        <p>
          Der psychologische Ansatz stand im Mittelpunkt, um KIM als{" "}
          <HighlightText>„Brückenbauer“</HighlightText> zu inszenieren, der
          Beziehungen zu einer <strong>emotionalen Tiefe</strong> führt.
        </p>
      </Card>

      {/* Styleguide */}
      <Card title="Styleguide: Farben und Typografie">
        <p>
          Der <HighlightText>Styleguide</HighlightText> für KIM stellt die konsistente
          Anwendung von Farben und Typografie sicher. Die Hauptfarben und Schriften
          wurden sorgfältig ausgewählt, um eine <strong>emotionale</strong> und{" "}
          <strong>moderne Nutzererfahrung</strong> zu gewährleisten.
        </p>
        <ImageGallery images={[galleryImages[1]]} />
      </Card>
    </Section>
  );
}
