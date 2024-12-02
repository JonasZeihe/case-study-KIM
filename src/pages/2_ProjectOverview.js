import React from 'react';
import Wrapper from '../components/layout/Wrapper';
import MediaDisplay from '../components/data-display/MediaDisplay';
import QuoteComponent from '../components/sections/QuoteComponent';
import Typography, { TypoProvider } from '../components/common/Typography';
import HighlightText from '../components/utilities/HighlightText';
import ListComponent from '../components/data-display/ListComponent';

// Assets
import projectOverviewImage from '../assets/images/project_overview.png';

export default function ProjectOverview() {
  const methodsAndTools = [
    { content: '🎨 Figma & FigJam: Prototyping, Wireframes und Moodboards' },
    { content: '📋 Notion: Projektmanagement und zentrale Dokumentation' },
    {
      content:
        '🔬 Methoden: Desk Research, User Interviews, quantitative Umfragen, Personas, User Journey Maps, Wireframing, Prototyping, iteratives Testing',
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
    <Wrapper backgroundColor="background.light" padding="large" elevated>
      {/* Header Section */}
      <TypoProvider variant="h1" color="primary.main" align="center">
        <Wrapper gradient="primaryToSecondary" padding="large">
          <Typography>Projektüberblick</Typography>
          <Typography variant="h3">
            Ein tiefer Einblick in das Projekt, das Verbindungen neu definiert.
          </Typography>
        </Wrapper>
      </TypoProvider>

      {/* Produktbeschreibung Section */}
      <TypoProvider variant="body" color="neutral.light">
        <Wrapper backgroundColor="background.dark" padding="large">
          <Typography variant="h2">
            <HighlightText>Produktbeschreibung</HighlightText>
          </Typography>
          <Typography>
            <strong>KIM</strong> ist mehr als nur eine Plattform. Sie dient als{' '}
            <HighlightText>Brücke zwischen Menschen</HighlightText>, die auf der
            Suche nach echten Verbindungen sind. Basierend auf{' '}
            <HighlightText>gemeinsamen Interessen, Zielen</HighlightText> und
            Persönlichkeiten, die durch KI ermittelt werden, bietet KIM einen
            neuen Ansatz für authentische Beziehungen.
          </Typography>
          <MediaDisplay media={mediaContent} layout="grid" />
        </Wrapper>
      </TypoProvider>

      {/* Team & Rollen Section */}
      <TypoProvider variant="body" color="neutral.light">
        <Wrapper backgroundColor="background.dark" padding="large">
          <Typography variant="h2">
            <HighlightText>Team & Rollen</HighlightText>
          </Typography>
          <Typography>
            Unser Team besteht aus <strong>Darya, Isabel und Jonas</strong>, die
            als <HighlightText>UX/UI-Designer</HighlightText> im{' '}
            <HighlightText>„neue fische“ Bootcamp</HighlightText>{' '}
            zusammenarbeiteten. Ziel war es, eine durchdachte, nutzerzentrierte
            App zu entwickeln, die innovative Technologien einsetzt.
          </Typography>
          <Typography variant="h3">Methoden & Tools</Typography>
          <ListComponent items={methodsAndTools} variant="highlighted" />
        </Wrapper>
      </TypoProvider>

      {/* Problemstellung Section */}
      <TypoProvider variant="body" color="neutral.dark">
        <Wrapper backgroundColor="background.main" padding="large">
          <Typography variant="h2">
            <HighlightText>Problemstellung</HighlightText>
          </Typography>
          <Typography>
            Die größte Herausforderung war es, eine Plattform zu entwickeln, die{' '}
            <HighlightText>
              tiefere, emotional fundierte Verbindungen
            </HighlightText>{' '}
            ermöglicht, anstatt nur oberflächliche Kontakte zu schaffen. Unsere
            Wettbewerbsanalyse zeigte, dass bestehende Netzwerke wie LinkedIn,
            Facebook und XING oft eher „verbindend“ als „verstehend“ sind.
          </Typography>
          <QuoteComponent
            text="Verbindungen, die auf Verständnis basieren, statt nur auf Netzwerken."
            author="KIM Vision Statement"
          />
        </Wrapper>
      </TypoProvider>
    </Wrapper>
  );
}
