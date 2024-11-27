import React from 'react';
import Wrapper from '../components/layout/Wrapper';
import Card from '../components/data-display/Card';
import Typography from '../components/common/Typography';
import ListComponent from '../components/data-display/ListComponent';

export default function ReflectionPage() {
  const challenges = [
    {
      content: (
        <>
          🧠 <Typography highlight="Emotionalität" /> vs. Funktionalität: Die größte Herausforderung bestand darin, eine Plattform zu schaffen, die
          beides vereint und dennoch zugänglich bleibt.
        </>
      ),
    },
    {
      content: (
        <>
          🎨 <Typography highlight="Design" /> einer „Seele“ für KIM: Es war wichtig, den Nutzer emotional einzufangen und
          gleichzeitig klare Interaktionen zu gewährleisten.
        </>
      ),
    },
  ];

  const learnings = [
    {
      content: (
        <>
          🔄 <Typography highlight="Iterative Prozesse" />: Die iterative Arbeitsweise hat uns gezeigt, wie wichtig
          kontinuierliches Nutzerfeedback ist, um echte Probleme zu lösen.
        </>
      ),
    },
    {
      content: (
        <>
          🎯 <Typography highlight="Flexibilität" />: Designentscheidungen erfordern Offenheit für Änderungen,
          insbesondere, wenn sie Nutzerbedürfnisse betreffen.
        </>
      ),
    },
  ];

  const futureOutlook = [
    {
      content: (
        <>
          🌍 <Typography highlight="Globale Skalierbarkeit" />: Mit mehr Ressourcen könnte KIM als Plattform für
          tiefere Verbindungen weltweit dienen.
        </>
      ),
    },
    {
      content: (
        <>
          🌟 <Typography highlight="Brückenbauer für reale Treffen" />: KIM könnte nicht nur digital, sondern auch durch
          reale Treffen langfristig Beziehungen fördern.
        </>
      ),
    },
  ];

  return (
    <Wrapper>
      {/* Header Section */}
      <Wrapper variant="section" bgGradient>
        <Typography variant="h1" textAlign="center">
          Reflexion und Learnings
        </Typography>
        <Typography variant="h3" textAlign="center">
          Ein Blick zurück und nach vorne: Herausforderungen, Learnings und die Vision für die Zukunft von KIM.
        </Typography>
      </Wrapper>

      {/* Herausforderungen */}
      <Wrapper variant="section" padding="large">
        <Card
          title={<Typography variant="h2">Herausforderungen</Typography>}
          textAlign="left"
        >
          <Typography variant="body">
            Während der Entwicklung von KIM gab es zahlreiche Herausforderungen. Hier sind die beiden wichtigsten:
          </Typography>
          <ListComponent items={challenges} variant="standard" />
        </Card>
      </Wrapper>

      {/* Learnings */}
      <Wrapper variant="section" padding="large">
        <Card
          title={<Typography variant="h2">Learnings</Typography>}
          textAlign="left"
        >
          <Typography variant="body">
            Die Entwicklung von KIM hat wertvolle Einsichten geliefert, die über das Projekt hinausgehen:
          </Typography>
          <ListComponent items={learnings} variant="highlighted" />
        </Card>
      </Wrapper>

      {/* Was wir anders machen würden */}
      <Wrapper variant="section" padding="large">
        <Card
          title={<Typography variant="h2">Was wir anders machen würden</Typography>}
          textAlign="left"
        >
          <Typography variant="body">
            Mit mehr Zeit hätten wir die Usability-Tests früher integriert und KIM’s KI-Funktionen tiefergehend validiert, um die User Experience
            noch präziser zu gestalten.
          </Typography>
        </Card>
      </Wrapper>

      {/* Zukunftsaussichten */}
      <Wrapper variant="section" padding="large">
        <Card
          title={<Typography variant="h2">Zukunftsaussichten</Typography>}
          textAlign="center"
        >
          <Typography variant="body">
            Langfristig könnte KIM eine innovative Plattform für nachhaltige und tiefe soziale Verbindungen werden – nicht nur digital,
            sondern auch durch reale Treffen und Erlebnisse.
          </Typography>
          <ListComponent items={futureOutlook} variant="highlighted" />
        </Card>
      </Wrapper>
    </Wrapper>
  );
}
