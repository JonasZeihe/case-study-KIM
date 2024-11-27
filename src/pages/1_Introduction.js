import React from 'react';
import Wrapper from '../components/layout/Wrapper';
import HeroBanner from '../components/sections/HeroBanner';
import Card from '../components/data-display/Card';
import MediaDisplay from '../components/data-display/MediaDisplay';
import QuoteComponent from '../components/sections/QuoteComponent';
import Typography from '../components/common/Typography';
import HighlightText from '../components/utilities/HighlightText';

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
    <Wrapper>
      {/* Hero Section */}
      <HeroBanner
        title="KIM – Die Verbindungs-App für echte Freundschaften"
        subtitle="Verbindungen schaffen, die auf einer Wellenlänge basieren."
        ctaText="Jetzt mehr erfahren"
        onCtaClick={() => alert('CTA geklickt!')}
      />

      {/* Kurzbeschreibung */}
      <Wrapper variant="section" padding="large" hoverEffect>
        <Card
          layout="horizontal"
          imgSrc={heroImage}
          imgAlt="Hero-Screen von KIM"
          title={
            <Typography variant="h2">
              <HighlightText>Kurzbeschreibung</HighlightText>
            </Typography>
          }
        >
          <>
            <Typography variant="body">
              <strong>KIM</strong> ist eine App, die mit{' '}
              <HighlightText>KI-gestützter Persönlichkeitsanalyse</HighlightText> arbeitet, um
              Menschen zusammenzubringen, die ähnliche Interessen und Werte teilen.
            </Typography>
            <Typography variant="body">
              Ziel ist es, echte Verbindungen zu schaffen, die nicht auf Oberflächlichkeit basieren,
              sondern auf gemeinsamen Interessen und tiefgreifender Authentizität.
            </Typography>
          </>
        </Card>
      </Wrapper>

      {/* Das Ziel */}
      <Wrapper variant="section" padding="large">
        <Card
          title={
            <Typography variant="h2">
              <HighlightText>Das Ziel</HighlightText>
            </Typography>
          }
          layout="vertical"
        >
          <Typography variant="body">
            Entwicklung einer Plattform, die über oberflächliche Kontakte hinausgeht und echte
            Beziehungen ermöglicht. Im Mittelpunkt stehen die Persönlichkeit und geteilte
            Interessen der Nutzer.
          </Typography>
        </Card>
        <Wrapper hoverEffect padding="small">
          <QuoteComponent
            text="Verbindungen, die zählen."
            author="KIM Vision Statement"
          />
        </Wrapper>
      </Wrapper>

      {/* Media Section */}
      <Wrapper variant="section" padding="large" justify="center">
        <MediaDisplay media={mediaContent} layout="grid" />
      </Wrapper>
    </Wrapper>
  );
}
