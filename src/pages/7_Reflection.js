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
          Die zentrale Herausforderung war, KIM mit einer „Seele“ zu versehen –
          eine Plattform, die Nutzern ein Gefühl echter Verbindung bietet, ohne
          an Funktionalität einzubüßen.
        </>
      ),
    },
    {
      content: (
        <>
          🎨 <HighlightText>Design mit Tiefe:</HighlightText> Nutzern eine
          emotionale Verbindung zu bieten und gleichzeitig intuitive und klare
          Interaktionen zu gewährleisten.
        </>
      ),
    },
  ];

  const learnings = [
    {
      content: (
        <>
          🔄 <HighlightText>Iterative Prozesse:</HighlightText> Der iterative
          Ansatz, gepaart mit psychologischem Storytelling, half uns dabei, KIM
          zu etwas zu machen, das Vertrauen und emotionale Tiefe vermittelt.
        </>
      ),
    },
    {
      content: (
        <>
          🎯 <HighlightText>Flexibilität im Design:</HighlightText>{' '}
          Nutzerbedürfnisse erfordern Offenheit für Änderungen – die Balance
          zwischen Funktionalität und Emotionalität war unser größtes Learning.
        </>
      ),
    },
  ];

  const futureOutlook = [
    {
      content: (
        <>
          🌍 <HighlightText>Globale Skalierbarkeit:</HighlightText> Langfristig
          könnte KIM zu einer Plattform für tiefere Verbindungen weltweit
          werden.
        </>
      ),
    },
    {
      content: (
        <>
          🌟 <HighlightText>Brückenbauer für reale Treffen:</HighlightText> KIM
          könnte Beziehungen nicht nur digital, sondern auch durch reale Treffen
          und Erlebnisse nachhaltig fördern.
        </>
      ),
    },
  ];

  return (
    <Wrapper backgroundColor="background.dark" padding="large" elevated>
      {/* Header */}
      <Wrapper gradient="primaryToSecondary" padding="large">
        <Typography variant="h1" align="center" color="neutral.white">
          Reflexion und Learnings
        </Typography>
        <Typography variant="h3" align="center" color="neutral.white">
          Rückblick, Herausforderungen und Visionen für die Zukunft.
        </Typography>
      </Wrapper>

      {/* Herausforderungen */}
      <Wrapper backgroundColor="neutral.white" padding="large">
        <Typography variant="h2" color="primary.main">
          Herausforderungen
        </Typography>
        <Typography color="primary.main">
          Die Entwicklung von KIM war geprägt von der Suche nach der Balance
          zwischen Funktionalität und Emotionalität:
        </Typography>
        <ListComponent items={challenges} variant="highlighted" />
      </Wrapper>

      {/* Learnings */}
      <Wrapper backgroundColor="neutral.white" padding="large">
        <Typography variant="h2" color="primary.main">
          Learnings
        </Typography>
        <Typography color="primary.main">
          Während des Designprozesses konnten wir zentrale Erkenntnisse
          gewinnen:
        </Typography>
        <ListComponent items={learnings} variant="highlighted" />

        <Typography color="primary.main">
          Mit mehr Zeit hätten wir die Usability-Tests früher integriert, um
          KIMs KI-Funktionen umfassender zu validieren und die User Experience
          noch präziser zu gestalten. Ein stärkerer Fokus auf Tests im frühen
          Entwicklungsstadium hätte weitere Einblicke ermöglichen können.
        </Typography>
      </Wrapper>

      {/* Zukunftsaussichten */}
      <Wrapper gradient="primaryToSecondary" padding="large">
        <Typography variant="h2" align="center" color="neutral.white">
          Zukunftsaussichten
        </Typography>
        <Typography variant="body" align="center" color="neutral.white">
          Langfristig sehen wir KIM als innovative Plattform, die digitale und
          reale Verbindungen nachhaltig stärkt:
        </Typography>
        <ListComponent items={futureOutlook} variant="highlighted" />
      </Wrapper>
    </Wrapper>
  );
}
