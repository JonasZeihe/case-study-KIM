import React from "react";
import styled from "styled-components";

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

    .highlight {
      color: var(--primary-4);
      font-weight: bold;
    }
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

  img {
    width: 100%;
    margin-top: var(--spacing-24);
    border-radius: var(--border-radius-medium);
    box-shadow: var(--box-shadow-light);
  }
`;

export default function UXProcess() {
  return (
    <Section>
      {/* Section Header */}
      <SectionHeader>
        <h1>UX-Designprozess</h1>
        <p className="subtitle">
          Vom ersten Konzept bis zur finalen Umsetzung – ein nutzerzentrierter Ansatz.
        </p>
      </SectionHeader>

      {/* Ideation und Entwürfe */}
      <Card>
        <h2>Ideation und Entwürfe</h2>
        <p>
          Die ersten Schritte im Designprozess bestanden aus{" "}
          <span className="highlight">Low-Fidelity-Wireframes</span> und
          detaillierten <span className="highlight">User Journey Maps</span>, um
          die grundlegende Struktur der App zu klären. Eine große Herausforderung
          war es, <strong>KIM</strong> als{" "}
          <span className="highlight">persönlichen Verbindungs-Assistenten</span>{" "}
          zu gestalten, statt nur eine Plattform für Klick-Interaktionen zu schaffen.
        </p>
        <p>
          Um das <strong>Storytelling</strong> und die emotionale Verbindung zu
          verbessern, wechselten wir auf eine{" "}
          <span className="highlight">mid-fidelity Struktur</span>, die Toms Journey
          detaillierter und ansprechender darstellt.
        </p>
        <p>
          Der <span className="highlight">Prototyping-Prozess</span> war geprägt
          von kontinuierlichem Testing und iterativen Verbesserungen. Besonders
          der Wechsel auf <span className="highlight">mid-fidelity Wireframes</span>{" "}
          half uns, die App-Nutzung und das <strong>Storytelling</strong> besser zu
          veranschaulichen – speziell für den KI-Chat.
        </p>
        <img
          src="./assets/images/wireframes_mid_fidelity.png"
          alt="Low-Fidelity-Wireframes und Entwürfe"
        />
      </Card>

      {/* Interaktionen und Features */}
      <Card>
        <h2>Interaktionen und Features</h2>
        <p>
          Die <strong>interaktiven Features</strong> der App wurden entwickelt, um
          Toms Journey intuitiv und visuell ansprechend zu gestalten. Dazu
          gehören:
        </p>
        <ul>
          <li>
            📊 Ein „<span className="highlight">Verbindungstiefen-Radialdiagramm</span>“,
            das Toms Fortschritte, aber auch die Kompatibilität der Gruppe darstellt.
          </li>
          <li>
            🤖 Eine intuitive <span className="highlight">KI-Chat-Funktion</span>, die den
            ersten Kontakt erleichtert.
          </li>
          <li>
            ❄️ Interaktive <strong>Icebreaker-Fragen</strong>, die soziale Hemmungen abbauen.
          </li>
        </ul>
        <p>
          Der psychologische Ansatz stand im Mittelpunkt, um KIM als{" "}
          <span className="highlight">„Brückenbauer“</span> zu inszenieren, der
          Beziehungen zu einer <strong>emotionalen Tiefe</strong> führt.
        </p>
        <h2>Styleguide: Farben und Typografie</h2>
        <p>
          Der <span className="highlight">Styleguide</span> für KIM stellt die
          konsistente Anwendung von Farben und Typografie sicher. Die Hauptfarben
          und Schriften wurden sorgfältig ausgewählt, um eine{" "}
          <strong>emotionale</strong> und <strong>moderne Nutzererfahrung</strong>{" "}
          zu gewährleisten.
        </p>
        <img
          src="./assets/images/styleguide_colors_typography.png"
          alt="Styleguide für Farben und Typografie"
        />
      </Card>
    </Section>
  );
}
