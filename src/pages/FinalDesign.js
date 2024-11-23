import React from "react";
import styled from "styled-components";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import HighlightText from "../components/HighlightText";
import Carousel from "../components/Carousel";

// Import images for the Carousel
import appScreen1 from "../assets/images/appscreens/final_app_screens_1.png";
import appScreen2 from "../assets/images/appscreens/final_app_screens_2.png";
import appScreen3 from "../assets/images/appscreens/final_app_screens_3.png";
import appScreen4 from "../assets/images/appscreens/final_app_screens_4.png";
import appScreen5 from "../assets/images/appscreens/final_app_screens_5.png";
import appScreen6 from "../assets/images/appscreens/final_app_screens_6.png";
import appScreen7 from "../assets/images/appscreens/final_app_screens_7.png";
import appScreen8 from "../assets/images/appscreens/final_app_screens_8.png";
import appScreen9 from "../assets/images/appscreens/final_app_screens_9.png";
import appScreen10 from "../assets/images/appscreens/final_app_screens_10.png";
import appScreen11 from "../assets/images/appscreens/final_app_screens_11.png";

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

export default function FinalSolutionDesign() {
  const carouselSlides = [
    { src: appScreen1, alt: "App Screen 1" },
    { src: appScreen2, alt: "App Screen 2" },
    { src: appScreen3, alt: "App Screen 3" },
    { src: appScreen4, alt: "App Screen 4" },
    { src: appScreen5, alt: "App Screen 5" },
    { src: appScreen6, alt: "App Screen 6" },
    { src: appScreen7, alt: "App Screen 7" },
    { src: appScreen8, alt: "App Screen 8" },
    { src: appScreen9, alt: "App Screen 9" },
    { src: appScreen10, alt: "App Screen 10" },
    { src: appScreen11, alt: "App Screen 11" },
  ];

  return (
    <Section>
      {/* Section Header */}
      <SectionHeader
        title="Finale Lösung und Design"
        subtitle="Einblicke in die Hauptfeatures und das finale visuelle Konzept von KIM."
      />

      {/* Hauptfeatures */}
      <Card title="Hauptfeatures">
        <List>
          <ListItem>
            🤖 <strong>KI-gestützter Chat:</strong>{" "}
            <HighlightText>KIM erstellt auf Basis der Antworten des Nutzers ein dynamisches Persönlichkeitsprofil</HighlightText> 
            und passt die Fragen im Laufe des Gesprächs an.
          </ListItem>
          <ListItem>
            💡 <strong>Gruppenvorschläge mit Kompatibilitätsscore:</strong>{" "}
            Basierend auf dem Persönlichkeitsprofil bekommt der Nutzer Gruppen mit hoher Übereinstimmung angezeigt, was 
            schnelle und tiefere Verbindungen fördert.
          </ListItem>
          <ListItem>
            ❄️ <strong>Automatisierte Icebreaker und Gruppentreffen:</strong>{" "}
            KIM schlägt spannende Fragen vor und plant das erste Treffen der Gruppe – für echte Begegnungen ohne Planungsstress.
          </ListItem>
          <ListItem>
            🎨 <strong>Visuelles Design:</strong> Die Farbpalette und Typografie greifen das Thema{" "}
            <HighlightText>emotionaler Tiefe</HighlightText> auf und schaffen eine einladende, warme Umgebung. Das Sparkles-Emoji ✨ symbolisiert KIM als den „Funken der Verbindungen“.
          </ListItem>
        </List>
      </Card>

      {/* Final App Screens */}
      <Card title="Finale Screenshots">
        <p>
          Die finalen Screens von KIM illustrieren die Hauptfeatures wie die Icebreaker-Funktion, das Dashboard und vieles mehr.
        </p>
        <Carousel slides={carouselSlides} />
      </Card>
    </Section>
  );
}
