import React from "react";
import Wrapper from "../components/layout/Wrapper";
import HeroBanner from "../components/sections/HeroBanner";
import MediaDisplay from "../components/data-display/MediaDisplay";
import QuoteComponent from "../components/sections/QuoteComponent";
import Typography from "../components/common/Typography";
import HighlightText from "../components/utilities/HighlightText";

// Assets
import heroImage from "../assets/images/hero_kim_chat_screen.png";

export default function Introduction() {
  const mediaContent = [
    {
      type: "image",
      src: heroImage,
      alt: "Hero Screen von KIM",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Wrapper>
      <Wrapper
        variant="hero"
        gradient="primaryLight"
        padding="large"
        textAlign="center"
      >
        <HeroBanner
          title="KIM – Your Friend to meet new Friends"
          subtitle="Verbindungen schaffen, die auf einer Wellenlänge basieren."
          ctaText="Jetzt mehr erfahren"
          onCtaClick={() => alert("CTA geklickt!")}
        />
      </Wrapper>

      {/* Kurzbeschreibung Section */}
      <Wrapper
        variant="section"
        gradient="subtlePrimary"
        padding="large"
        gap="large"
        textAlign="center"
      >
        <Typography variant="h2">
          <HighlightText>Kurzbeschreibung</HighlightText>
        </Typography>
        <Typography variant="body">
          <strong>KIM</strong> ist eine App, die mit{" "}
          <HighlightText>KI-gestützter Persönlichkeitsanalyse</HighlightText>{" "}
          arbeitet, um Menschen zusammenzubringen, die ähnliche Interessen und
          Werte teilen.
        </Typography>
        <Typography variant="body">
          Ziel ist es, echte Verbindungen zu schaffen, die nicht auf
          Oberflächlichkeit basieren, sondern auf gemeinsamen Interessen und
          tiefgreifender Authentizität.
        </Typography>
        <MediaDisplay media={mediaContent} layout="grid" />
      </Wrapper>

      {/* Das Ziel Section */}
      <Wrapper
        variant="section"
        padding="large"
        textAlign="center"
      >
        <Typography variant="h2">
          <HighlightText>Das Ziel</HighlightText>
        </Typography>
        <Typography variant="body">
          Entwicklung einer Plattform, die über oberflächliche Kontakte
          hinausgeht und echte Beziehungen ermöglicht. Im Mittelpunkt stehen die
          Persönlichkeit und geteilte Interessen der Nutzer.
        </Typography>
        <QuoteComponent text="Verbindungen, die zählen." author="KIM Vision Statement" />
      </Wrapper>
      </Wrapper>
    </>
  );
}
