import React from 'react';
import Wrapper from '../components/layout/Wrapper';
import MediaDisplay from '../components/data-display/MediaDisplay';
import QuoteComponent from '../components/sections/QuoteComponent';
import Typography, { TypoProvider } from '../components/common/Typography';
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
    <Wrapper backgroundColor="background.light" elevated>
      {/* Hero Section */}
      <Wrapper gradient="primaryToSecondary" textAlign="center">
        <MediaDisplay media={mediaContent} layout="grid" />
      </Wrapper>

      {/* Einführung zur Case Study */}
      <TypoProvider variant="body" color="neutral.dark" align="center">
        <Wrapper backgroundColor="neutral.white" elevated>
          <Typography variant="h2" color="primary.main">
            Case Study: <strong>KIM</strong>
          </Typography>
          <Typography>
            Diese Case Study beleuchtet die Entwicklung und Gestaltung einer{' '}
            <HighlightText>innovativen KI-gestützten App</HighlightText>, die es
            Nutzern ermöglicht, basierend auf ihren Interessen und Werten
            tiefgehende Verbindungen zu schaffen.
          </Typography>
        </Wrapper>

        {/* Kurzbeschreibung */}
        <Wrapper backgroundColor="neutral.white">
          <Typography variant="h2" color="secondary.main">
            <HighlightText>Kurzbeschreibung</HighlightText>
          </Typography>
          <Typography>
            <strong>KIM</strong> ist eine App, die mit{' '}
            <HighlightText>KI-gestützter Persönlichkeitsanalyse</HighlightText>{' '}
            arbeitet, um Menschen zusammenzubringen, die ähnliche Interessen und
            Werte teilen.
          </Typography>
          <Typography>
            Ziel ist es, echte Verbindungen zu schaffen, die nicht auf
            Oberflächlichkeit basieren, sondern auf gemeinsamen Interessen und
            tiefgreifender Authentizität.
          </Typography>
        </Wrapper>
      </TypoProvider>

      {/* Ziel */}
      <TypoProvider variant="body" color="neutral.light">
        <Wrapper backgroundColor="neutral.white">
          <Typography variant="h2" color="neutral.white">
            <HighlightText>Das Ziel</HighlightText>
          </Typography>
          <Typography>
            Entwicklung einer Plattform, die über oberflächliche Kontakte
            hinausgeht und echte Beziehungen ermöglicht. Im Mittelpunkt stehen
            die Persönlichkeit und geteilte Interessen der Nutzer.
          </Typography>
          <QuoteComponent
            text="Verbindungen, die zählen."
            color="neutral.light"
          />
        </Wrapper>
      </TypoProvider>
    </Wrapper>
  );
}
