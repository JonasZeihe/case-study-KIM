import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Section = styled.section`
  padding: var(--spacing-48) var(--spacing-16);
  max-width: var(--max-width);
  margin: 0 auto;
  background: var(--neutral-1);
  border-radius: var(--border-radius-large);
  box-shadow: var(--box-shadow-light);
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-32);

  h1 {
    font: var(--font-headline-1);
    color: var(--primary-3);
  }

  .subtitle {
    font: var(--font-detail);
    color: var(--neutral-4);
    margin-top: var(--spacing-8);
  }
`;

const Card = styled.div`
  background: var(--neutral-1);
  border-radius: var(--border-radius-medium);
  box-shadow: var(--box-shadow-light);
  padding: var(--spacing-32);
  margin-bottom: var(--spacing-32);

  h2 {
    font: var(--font-headline-2);
    color: var(--primary-3);
    margin-bottom: var(--spacing-16);
  }

  p {
    font: var(--font-body);
    color: var(--neutral-6);
    margin-bottom: var(--spacing-16);
  }

  ul {
    margin-top: var(--spacing-16);
    padding-left: var(--spacing-32);

    li {
      margin-bottom: var(--spacing-8);
      color: var(--neutral-6);
      font: var(--font-detail);
    }

    strong {
      color: var(--primary-3);
    }
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: var(--border-radius-medium);
  box-shadow: var(--box-shadow-light);
`;

const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => props.translate}%);
`;

const Slide = styled.div`
  flex: 0 0 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 80%;
    border-radius: var(--border-radius-medium);
    box-shadow: var(--box-shadow-light);
  }
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: var(--neutral-1);
  border: none;
  padding: var(--spacing-16);
  cursor: pointer;
  box-shadow: var(--box-shadow-light);
  border-radius: 50%;
  font-size: 1.5rem;
  color: var(--primary-3);
  &:hover {
    background: var(--primary-4);
    color: var(--neutral-1);
  }
  &:focus {
    outline: none;
  }
`;

const PrevButton = styled(Button)`
  left: var(--spacing-16);
`;

const NextButton = styled(Button)`
  right: var(--spacing-16);
`;

export default function FinalDesign() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "./assets/images/appscreens/final_app_screens_1.png",
    "./assets/images/appscreens/final_app_screens_2.png",
    "./assets/images/appscreens/final_app_screens_3.png",
    "./assets/images/appscreens/final_app_screens_4.png",
    "./assets/images/appscreens/final_app_screens_5.png",
    "./assets/images/appscreens/final_app_screens_6.png",
    "./assets/images/appscreens/final_app_screens_7.png",
    "./assets/images/appscreens/final_app_screens_8.png",
    "./assets/images/appscreens/final_app_screens_9.png",
    "./assets/images/appscreens/final_app_screens_10.png",
    "./assets/images/appscreens/final_app_screens_11.png",
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Section>
      <SectionHeader>
        <h1>Finale Lösung und Design</h1>
        <p className="subtitle">
          Einblicke in die Hauptfeatures und das finale visuelle Konzept von KIM.
        </p>
      </SectionHeader>

      <Card>
        <h2>Hauptfeatures</h2>
        <ul>
          <li>
            🤖 <strong>KI-gestützter Chat:</strong> KIM erstellt auf Basis der
            Antworten des Nutzers ein dynamisches Persönlichkeitsprofil und passt die
            Fragen im Laufe des Gesprächs an.
          </li>
          <li>
            💡 <strong>Gruppenvorschläge mit Kompatibilitätsscore:</strong>{" "}
            Basierend auf dem Persönlichkeitsprofil bekommt der Nutzer Gruppen mit
            hoher Übereinstimmung angezeigt. Dies fördert nicht nur schnelle
            Verbindungen, sondern auch tiefere Beziehungen.
          </li>
          <li>
            ❄️ <strong>Automatisierte Icebreaker und Gruppentreffen:</strong> KIM
            schlägt spannende Fragen vor und plant das erste Treffen der Gruppe – so
            können Nutzer echte Begegnungen ohne Planungsstress erleben.
          </li>
          <li>
            🎨 <strong>Visuelles Design:</strong> Die Farbpalette und Typografie
            greifen das Thema der emotionalen Tiefe auf und schaffen eine einladende,
            warme Umgebung für den Nutzer. Das Sparkles-Emoji ✨ ist ein zentrales
            Symbol, das KIM als den „Funken der Verbindungen“ zeigt.
          </li>
        </ul>
      </Card>

      <Card>
        <h2>Finale Screenshots</h2>
        <p>
          Die finalen Screens von KIM illustrieren die Hauptfeatures wie die
          Icebreaker-Funktion, das Dashboard und vieles mehr.
        </p>
        <CarouselContainer>
          <CarouselTrack translate={-currentIndex * 100}>
            {images.map((src, index) => (
              <Slide key={index}>
                <img src={src} alt={`App Screen ${index + 1}`} />
              </Slide>
            ))}
          </CarouselTrack>
          <PrevButton onClick={handlePrev} aria-label="Previous Slide">
            ◀
          </PrevButton>
          <NextButton onClick={handleNext} aria-label="Next Slide">
            ▶
          </NextButton>
        </CarouselContainer>
      </Card>
    </Section>
  );
}
