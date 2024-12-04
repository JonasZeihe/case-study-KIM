import React from 'react';
import Wrapper from '../components/layout/Wrapper';
import Typography from '../styles/Typography';
import ListComponent from '../components/data-display/ListComponent';
import HighlightText from '../components/utilities/HighlightText';

export default function ReflectionPage() {
  const challenges = [
    {
      content: (
        <>
          🧠 <HighlightText>Emotionalität vs. Funktionalität:</HighlightText>{' '}
          Eine Plattform zu schaffen, die beides vereint und dennoch zugänglich
          bleibt.
        </>
      ),
    },
    {
      content: (
        <>
          🎨 <HighlightText>Design mit Seele:</HighlightText> Nutzern eine
          emotionale Verbindung zu bieten und gleichzeitig klare Interaktionen
          zu gewährleisten.
        </>
      ),
    },
  ];

  const learnings = [
    {
      content: (
        <>
          🔄 <HighlightText>Iterative Prozesse:</HighlightText> Nutzerfeedback
          zeigt den Weg zu echten Lösungen, wenn man bereit ist, Anpassungen
          vorzunehmen.
        </>
      ),
    },
    {
      content: (
        <>
          🎯 <HighlightText>Flexibilität im Design:</HighlightText>{' '}
          Nutzerbedürfnisse erfordern Offenheit für Änderungen – ein
          entscheidender Faktor für den Erfolg.
        </>
      ),
    },
  ];

  const futureOutlook = [
    {
      content: (
        <>
          🌍 <HighlightText>Globale Skalierbarkeit:</HighlightText> KIM könnte
          eine Plattform für tiefere Verbindungen weltweit werden.
        </>
      ),
    },
    {
      content: (
        <>
          🌟 <HighlightText>Brückenbauer für reale Treffen:</HighlightText> KIM
          könnte langfristig Beziehungen auch offline fördern.
        </>
      ),
    },
  ];

  return (
    <Wrapper backgroundColor="background.dark" elevated>
      {/* Header */}
      <Wrapper gradient="primaryToSecondary">
        <Typography variant="h1" align="center" color="neutral.white">
          Reflexion und Learnings
        </Typography>
        <Typography variant="h3" color="neutral.white" align="center">
          Ein Blick zurück und nach vorne: Herausforderungen, Learnings und
          Visionen.
        </Typography>
      </Wrapper>

      {/* Herausforderungen */}
      <Wrapper backgroundColor="neutral.white">
        <Typography variant="h2" color="primary.main">
          Herausforderungen
        </Typography>
        <Typography color="primary.main">
          Während der Entwicklung von KIM gab es zentrale Herausforderungen, die
          uns besonders gefordert haben:
        </Typography>
        <ListComponent items={challenges} variant="highlighted" />
      </Wrapper>

      {/* Learnings */}
      <Wrapper backgroundColor="neutral.white">
        <Typography variant="h2" color="primary.main">
          Learnings
        </Typography>
        <Typography color="primary.main">
          Diese Erfahrungen gehen über KIM hinaus und zeigen, wie Designprozesse
          verbessert werden können:
        </Typography>
        <ListComponent items={learnings} variant="highlighted" />
      </Wrapper>

      {/* Verbesserungen */}
      <Wrapper backgroundColor="neutral.white">
        <Typography variant="h2" color="primary.main">
          Was wir anders machen würden
        </Typography>
        <Typography color="primary.main">
          Mit mehr Zeit hätten wir die Usability-Tests früher integriert und
          KIM’s KI-Funktionen umfassender validiert, um die User Experience
          weiter zu optimieren.
        </Typography>
      </Wrapper>

      {/* Zukunftsaussichten */}
      <Wrapper gradient="primaryToSecondary">
        <Typography variant="h2" align="center" color="neutral.white">
          Zukunftsaussichten
        </Typography>
        <Typography variant="body" color="neutral.white" align="center">
          Langfristig sehen wir KIM als innovative Plattform, die digitale und
          reale Verbindungen nachhaltig stärkt:
        </Typography>
        <ListComponent items={futureOutlook} variant="highlighted" />
      </Wrapper>
    </Wrapper>
  );
}
