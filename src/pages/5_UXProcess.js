// src/pages/5_UXProcess.js
import React from 'react';
import styled from 'styled-components';
import HeaderSection from '../components/HeaderSection';
import CardContainer from '../components/CardContainer';
import MediaDisplay from '../components/MediaDisplay';
import Typography from '../components/Typography';

// Assets
import wireframesMidFidelity from '../assets/images/wireframes_mid_fidelity.png';
import styleguideColorsTypography from '../assets/images/styleguide_colors_typography.png';

export default function UXProcess() {
  const media = [
    { type: 'image', src: wireframesMidFidelity, alt: 'Wireframes Mid-Fidelity' },
    { type: 'image', src: styleguideColorsTypography, alt: 'Styleguide Farben und Typografie' },
  ];

  return (
    <UXProcessWrapper>
      {/* Header Section */}
      <HeaderSection
        title="UX-Designprozess"
        subtitle="Vom ersten Konzept bis zur finalen Umsetzung – ein nutzerzentrierter Ansatz."
        align="center"
        isFullWidth
      />

      {/* Ideation und Entwürfe */}
      <CardContainer
        title="Ideation und Entwürfe"
        textAlign="left"
        text={
          <Typography variant="body">
            Die ersten Schritte im Designprozess bestanden aus{' '}
            <Typography variant="body" highlight="Low-Fidelity-Wireframes" /> und{' '}
            <Typography variant="body" highlight="User Journey Maps" />, um die grundlegende Struktur der App zu
            klären. Eine große Herausforderung war es, <strong>KIM</strong> als{' '}
            <Typography variant="body" highlight="persönlichen Verbindungs-Assistenten" /> zu gestalten, statt nur eine
            Plattform für Klick-Interaktionen zu schaffen.
          </Typography>
        }
      >
        <MediaDisplay media={[media[0]]} layout="grid" />
      </CardContainer>

      {/* Interaktionen und Features */}
      <CardContainer
        title="Interaktionen und Features"
        textAlign="left"
        text={
          <>
            <Typography variant="body">
              Die <strong>interaktiven Features</strong> der App wurden entwickelt, um Toms Journey intuitiv und visuell
              ansprechend zu gestalten. Dazu gehören:
            </Typography>
            <FeatureList>
              <li>
                📊 <Typography highlight="Verbindungstiefen-Radialdiagramm" />: Toms Fortschritte und Gruppenzugehörigkeit
                visualisieren.
              </li>
              <li>
                🤖 <Typography highlight="KI-Chat-Funktion" />: Vereinfachung der ersten Kontaktaufnahme.
              </li>
              <li>
                ❄️ <strong>Icebreaker-Fragen:</strong> Abbau sozialer Hemmungen durch spielerische Fragen.
              </li>
            </FeatureList>
            <Typography variant="body">
              KIM fungiert als <Typography highlight="Brückenbauer" />, der Beziehungen auf emotionaler Ebene unterstützt
              und vertieft.
            </Typography>
          </>
        }
      />

      {/* Styleguide */}
      <CardContainer
        title="Styleguide: Farben und Typografie"
        textAlign="left"
        text={
          <Typography variant="body">
            Der <Typography highlight="Styleguide" /> von KIM sichert die konsistente Anwendung von Farben und
            Typografie. Die Farbpalette und Schriftarten wurden sorgfältig ausgewählt, um eine{' '}
            <strong>emotionale</strong> und <strong>moderne Nutzererfahrung</strong> zu schaffen.
          </Typography>
        }
      >
        <MediaDisplay media={[media[1]]} layout="grid" />
      </CardContainer>
    </UXProcessWrapper>
  );
}

// Styled Components
const UXProcessWrapper = styled.section`
  padding: ${({ theme }) => theme.spacing(6)} ${({ theme }) => theme.spacing(4)};
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${({ theme }) => theme.spacing(4)} 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};

  li {
    font-size: ${({ theme }) => theme.typography.fontSize.body};
    line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
    color: ${({ theme }) => theme.colors.neutral.dark};
    background: ${({ theme }) => theme.colors.neutral.lightest};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    padding: ${({ theme }) => theme.spacing(3)};
    box-shadow: ${({ theme }) => theme.boxShadow.light};
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-3px);
      box-shadow: ${({ theme }) => theme.boxShadow.medium};
    }
  }
`;
