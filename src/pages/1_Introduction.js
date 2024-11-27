// src/pages/1_Introduction.js
import React from 'react';
import styled from 'styled-components';
import HeaderSection from '../components/HeaderSection';
import CardContainer from '../components/CardContainer';
import Typography from '../components/Typography';
import MediaDisplay from '../components/MediaDisplay';
import QuoteComponent from '../components/QuoteComponent';

// Assets
import heroImage from '../assets/images/hero_kim_chat_screen.png';

export default function Introduction() {
  const mediaContent = [
    {
      type: 'image',
      src: heroImage,
      alt: 'Hero Screen von KIM',
    },
  ];

  return (
    <IntroductionWrapper>
      {/* Header Section */}
      <HeaderSection
        title="KIM – Die Verbindungs-App für echte Freundschaften"
        subtitle="Verbindungen schaffen, die auf einer Wellenlänge basieren."
        backgroundImage={heroImage}
        align="center"
        isFullWidth
      />

      {/* Kurzbeschreibung */}
      <CardContainer
        title="Kurzbeschreibung"
        textAlign="left"
        text={
          <>
            <Typography variant="body">
              <strong>KIM</strong> ist eine App, die mit{' '}
              <Typography variant="body" highlight="KI-gestützter Persönlichkeitsanalyse" />
              arbeitet, um Menschen zusammenzubringen, die ähnliche Interessen und Werte teilen.
            </Typography>
            <Typography variant="body">
              Ziel ist es, echte Verbindungen zu schaffen, die nicht auf Oberflächlichkeit basieren,
              sondern auf gemeinsamen Interessen und tiefgreifender Authentizität.
            </Typography>
          </>
        }
        image={{
          src: heroImage,
          alt: 'Hero-Screen von KIM',
        }}
      />

      {/* Das Ziel */}
      <CardContainer
        title="Das Ziel"
        textAlign="left"
        text={
          <>
            <Typography variant="body">
              Entwicklung einer Plattform, die über oberflächliche Kontakte hinausgeht und echte
              Beziehungen ermöglicht. Im Mittelpunkt stehen die Persönlichkeit und geteilte
              Interessen der Nutzer.
            </Typography>
            <QuoteComponent
              text="Verbindungen, die zählen."
              author="KIM Vision Statement"
            />
          </>
        }
      />

      {/* Media Section */}
      <MediaDisplay media={mediaContent} layout="grid" />
    </IntroductionWrapper>
  );
}

// Styled Components
const IntroductionWrapper = styled.section`
  padding: ${({ theme }) => theme.spacing(6)} ${({ theme }) => theme.spacing(4)};
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
`;
