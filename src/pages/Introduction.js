import React from 'react';
import styled from 'styled-components';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import HighlightText from '../components/HighlightText';
import ImageContainer from '../components/ImageContainer';
import heroImage from '../assets/images/hero_kim_chat_screen.png';

export default function Introduction() {
  return (
    <IntroductionSection>
      {/* Section Header */}
      <SectionHeader
        title="KIM – Die Verbindungs-App für echte Freundschaften"
        subtitle="Verbindungen schaffen, die auf einer Wellenlänge basieren."
      />

      {/* Kurzbeschreibung */}
      <Card>
        <h2>Kurzbeschreibung</h2>
        <p>
          <strong>KIM</strong> ist eine App, die mit{' '}
          <HighlightText>KI-gestützter Persönlichkeitsanalyse</HighlightText> arbeitet, um
          Menschen zusammenzubringen, die ähnliche Interessen und Werte teilen.
        </p>
        <p>
          Ziel ist es, echte Verbindungen zu schaffen, die nicht auf
          Oberflächlichkeit basieren, sondern auf gemeinsamen Interessen und
          tiefgreifender Authentizität.
        </p>
        <ImageContainer src={heroImage} alt="Hero-Screen von KIM" />
      </Card>

      {/* Das Ziel */}
      <Card>
        <h2>Das Ziel</h2>
        <p>
          Entwicklung einer Plattform, die über oberflächliche Kontakte hinausgeht
          und echte Beziehungen ermöglicht. Im Mittelpunkt stehen die Persönlichkeit
          und geteilte Interessen der Nutzer.
        </p>
        <blockquote>
          <strong>„Verbindungen, die zählen.“</strong>
        </blockquote>
      </Card>
    </IntroductionSection>
  );
}

// Styled Components
const IntroductionSection = styled.section`
  padding: ${({ theme }) => theme.spacing(6)} ${({ theme }) => theme.spacing(4)};
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
`;
