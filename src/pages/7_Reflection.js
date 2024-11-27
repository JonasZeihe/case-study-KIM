import React from "react";
import Wrapper from "../components/layout/Wrapper";
import Typography from "../components/common/Typography";
import ListComponent from "../components/data-display/ListComponent";

export default function ReflectionPage() {
  const challenges = [
    {
      content: (
        <>
          🧠 <strong>Emotionalität vs. Funktionalität:</strong> Eine Plattform zu schaffen, die
          beides vereint und dennoch zugänglich bleibt.
        </>
      ),
    },
    {
      content: (
        <>
          🎨 <strong>Design mit Seele:</strong> Nutzern eine emotionale Verbindung zu bieten und
          gleichzeitig klare Interaktionen zu gewährleisten.
        </>
      ),
    },
  ];

  const learnings = [
    {
      content: (
        <>
          🔄 <strong>Iterative Prozesse:</strong> Nutzerfeedback zeigt den Weg zu echten Lösungen,
          wenn man bereit ist, Anpassungen vorzunehmen.
        </>
      ),
    },
    {
      content: (
        <>
          🎯 <strong>Flexibilität im Design:</strong> Nutzerbedürfnisse erfordern Offenheit für
          Änderungen – ein entscheidender Faktor für den Erfolg.
        </>
      ),
    },
  ];

  const futureOutlook = [
    {
      content: (
        <>
          🌍 <strong>Globale Skalierbarkeit:</strong> KIM könnte eine Plattform für tiefere
          Verbindungen weltweit werden.
        </>
      ),
    },
    {
      content: (
        <>
          🌟 <strong>Brückenbauer für reale Treffen:</strong> KIM könnte langfristig Beziehungen
          auch offline fördern.
        </>
      ),
    },
  ];

  return (
    <Wrapper>
      {/* Header Section */}
      <Wrapper variant="hero" gradient="backgroundToPrimary" padding="large" textAlign="center">
        <Typography variant="h1">Reflexion und Learnings</Typography>
        <Typography variant="h3">
          Ein Blick zurück und nach vorne: Herausforderungen, Learnings und Visionen.
        </Typography>
      </Wrapper>

      {/* Herausforderungen */}
      <Wrapper variant="section" padding="large" gradient="subtlePrimary">
        <Typography variant="h2">Herausforderungen</Typography>
        <Typography variant="body">
          Während der Entwicklung von KIM gab es zentrale Herausforderungen, die uns besonders
          gefordert haben:
        </Typography>
        <ListComponent items={challenges} variant="standard" />
      </Wrapper>

      {/* Learnings */}
      <Wrapper variant="section" padding="large" gradient="accentToPrimary">
        <Typography variant="h2">Learnings</Typography>
        <Typography variant="body">
          Diese Erfahrungen gehen über KIM hinaus und zeigen, wie Designprozesse verbessert werden
          können:
        </Typography>
        <ListComponent items={learnings} variant="highlighted" />
      </Wrapper>

      {/* Was wir anders machen würden */}
      <Wrapper variant="section" padding="large">
        <Typography variant="h2">Was wir anders machen würden</Typography>
        <Typography variant="body">
          Mit mehr Zeit hätten wir die Usability-Tests früher integriert und KIM’s KI-Funktionen
          umfassender validiert, um die User Experience weiter zu optimieren.
        </Typography>
      </Wrapper>

      {/* Zukunftsaussichten */}
      <Wrapper variant="section" padding="large" gradient="primaryToSecondary">
        <Typography variant="h2">Zukunftsaussichten</Typography>
        <Typography variant="body">
          Langfristig sehen wir KIM als innovative Plattform, die digitale und reale Verbindungen
          nachhaltig stärkt:
        </Typography>
        <ListComponent items={futureOutlook} variant="highlighted" />
      </Wrapper>
    </Wrapper>
  );
}
