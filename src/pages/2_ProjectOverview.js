import React from 'react';
import Wrapper from '../components/layout/Wrapper';
import MediaDisplay from '../components/data-display/MediaDisplay';
import QuoteComponent from '../components/sections/QuoteComponent';
import Typography from '../styles/Typography';
import HighlightText from '../components/utilities/HighlightText';
import ListComponent from '../components/data-display/ListComponent';

// Assets
import projectOverviewImage from '../assets/images/project_overview.png';

export default function ProjectOverview() {
  const methodsAndTools = [
    {
      content: (
        <>
          🎨 <HighlightText>Figma & FigJam:</HighlightText> Prototyping,
          Wireframes und Moodboards
        </>
      ),
    },
    {
      content: (
        <>
          📋 <HighlightText>Notion:</HighlightText> Projektmanagement und
          zentrale Dokumentation
        </>
      ),
    },
    {
      content: (
        <>
          🔬 <HighlightText>Methoden:</HighlightText> Desk Research, User
          Interviews, quantitative Umfragen, Personas, User Journey Maps,
          Wireframing, Prototyping, iteratives Testing
        </>
      ),
    },
  ];

  const mediaContent = [
    {
      type: 'image',
      src: projectOverviewImage,
      alt: 'Projektübersicht',
    },
  ];

  return (
    <Wrapper backgroundColor="background.dark" elevated>
      {/* Header Section */}
      <Wrapper gradient="primaryToSecondary">
        <Typography variant="h1" align="center" color="neutral.white">
          Projektüberblick
        </Typography>
        <Typography variant="h3" color="neutral.white" align="center">
          Ein tiefer Einblick in das, was Verbindungen neu definiert.
        </Typography>
      </Wrapper>

      {/* Produktbeschreibung Section */}
      <Wrapper backgroundColor="neutral.white">
        <Typography variant="h2" color="primary.main">
          Produktbeschreibung
        </Typography>
        <Typography color="primary.main">
          <HighlightText>KIM</HighlightText> ist mehr als nur eine Plattform.
          Sie dient als <HighlightText>Brücke zwischen Menschen</HighlightText>,
          die auf der Suche nach echten Verbindungen sind. Basierend auf{' '}
          <HighlightText>gemeinsamen Interessen, Zielen</HighlightText> und
          Persönlichkeiten, die durch KI ermittelt werden, bietet KIM einen
          neuen Ansatz für authentische Beziehungen.
        </Typography>
        <MediaDisplay media={mediaContent} />
      </Wrapper>

      {/* Team & Rollen Section */}
      <Wrapper backgroundColor="neutral.white">
        <Typography variant="h2" color="primary.main">
          Team & Rollen
        </Typography>
        <Typography color="primary.main">
          Unser Team besteht aus{' '}
          <HighlightText>Darya, Isabel und Jonas</HighlightText>, die als{' '}
          <HighlightText>UX/UI-Designer</HighlightText> im{' '}
          <HighlightText>„neue fische“ Bootcamp</HighlightText>{' '}
          zusammenarbeiteten. Ziel war es, eine durchdachte, nutzerzentrierte
          App zu entwickeln, die innovative Technologien einsetzt.
        </Typography>
        <Typography variant="h2" color="primary.main">
          Methoden & Tools
        </Typography>
        <ListComponent items={methodsAndTools} variant="highlighted" />
      </Wrapper>

      {/* Problemstellung Section */}
      <Wrapper backgroundColor="neutral.white">
        <Typography variant="h2" color="primary.main">
          Problemstellung
        </Typography>
        <Typography color="primary.main">
          Die größte Herausforderung war es, eine Plattform zu entwickeln, die{' '}
          <HighlightText>
            tiefere, emotional fundierte Verbindungen
          </HighlightText>{' '}
          ermöglicht, anstatt nur oberflächliche Kontakte zu schaffen. Unsere
          Wettbewerbsanalyse zeigte, dass bestehende Netzwerke wie LinkedIn,
          Facebook und XING oft eher{' '}
          <HighlightText>„verbindend“ als „verstehend“</HighlightText> sind.
        </Typography>
        <QuoteComponent text="Verbindungen, die auf Verständnis basieren, statt nur auf Netzwerken." />
      </Wrapper>
    </Wrapper>
  );
}
