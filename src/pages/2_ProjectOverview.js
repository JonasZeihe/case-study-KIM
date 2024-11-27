// src/pages/2_ProjectOverview.js
import React from 'react';
import styled from 'styled-components';
import HeaderSection from '../components/HeaderSection';
import CardContainer from '../components/CardContainer';
import Typography from '../components/Typography';
import ListComponent from '../components/ListComponent';

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

  return (
    <OverviewWrapper>
      {/* Header Section */}
      <HeaderSection
        title="Projektüberblick"
        subtitle="Ein tiefer Einblick in das Projekt, das Verbindungen neu definiert."
        backgroundImage={projectOverviewImage}
        align="center"
        isFullWidth
      />

      {/* Produktbeschreibung */}
      <CardContainer
        title="Produktbeschreibung"
        textAlign="left"
        text={
          <Typography variant="body">
            <strong>KIM</strong> ist mehr als nur eine Plattform. Sie dient als{' '}
            <Typography variant="body" highlight="Brücke zwischen Menschen" />{' '}
            , die auf der Suche nach echten Verbindungen sind. Basierend auf{' '}
            <Typography variant="body" highlight="gemeinsamen Interessen, Zielen" /> und
            Persönlichkeiten, die durch KI ermittelt werden, bietet KIM einen neuen Ansatz für
            authentische Beziehungen.
          </Typography>
        }
      />

      {/* Team & Rollen */}
      <CardContainer
        title="Team & Rollen"
        textAlign="left"
        text={
          <>
            <Typography variant="body">
              Unser Team besteht aus <strong>Darya, Isabel und Jonas</strong>, die als{' '}
              <Typography variant="body" highlight="UX/UI-Designer" /> im{' '}
              <Typography variant="body" highlight="„neue fische“ Bootcamp" /> zusammenarbeiteten.
              Ziel war es, eine durchdachte, nutzerzentrierte App zu entwickeln, die innovative
              Technologien einsetzt.
            </Typography>
            <Typography variant="h3">Methoden & Tools</Typography>
            <ListComponent items={methodsAndTools} />
          </>
        }
      />

      {/* Problemstellung */}
      <CardContainer
        title="Problemstellung"
        textAlign="left"
        text={
          <>
            <Typography variant="body">
              Die größte Herausforderung war es, eine Plattform zu entwickeln, die{' '}
              <Typography variant="body" highlight="tiefere, emotional fundierte Verbindungen" />{' '}
              ermöglicht, anstatt nur oberflächliche Kontakte zu schaffen. Unsere Wettbewerbsanalyse
              zeigte, dass bestehende Netzwerke wie LinkedIn, Facebook und XING oft eher
              „verbindend“ als „verstehend“ sind.
            </Typography>
            <QuoteWrapper>
              <Typography variant="body" highlight="„Verbindungen, die auf Verständnis basieren, statt nur auf Netzwerken.“" />
            </QuoteWrapper>
          </>
        }
        image={{
          src: projectOverviewImage,
          alt: 'Projektübersicht',
        }}
      />
    </OverviewWrapper>
  );
}

// Styled Components
const OverviewWrapper = styled.section`
  padding: ${({ theme }) => theme.spacing(6)} ${({ theme }) => theme.spacing(4)};
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
`;

const QuoteWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing(3)};
  padding: ${({ theme }) => theme.spacing(3)};
  border-left: 4px solid ${({ theme }) => theme.colors.accent.main};
  background: ${({ theme }) => theme.colors.neutral.light};
  font-style: italic;
  color: ${({ theme }) => theme.colors.primary.dark};
`;
