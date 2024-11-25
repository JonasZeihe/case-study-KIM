import React from "react";
import styled from "styled-components";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Introduction from "./pages/Introduction";
import ProjectOverview from "./pages/ProjectOverview";
import Research from "./pages/Research";
import Architecture from "./pages/Architecture";
import UXProcess from "./pages/UXProcess";
import FinalDesign from "./pages/FinalDesign";
import Reflection from "./pages/Reflection";

const Main = styled.main`
  padding: ${({ theme }) => theme.spacing(6)} ${({ theme }) => theme.spacing(4)};
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
`;

export default function App() {
  return (
    <>
      <Header />
      <Main>
        <Section id="introduction">
          <Introduction />
        </Section>
        <Section id="project-overview">
          <ProjectOverview />
        </Section>
        <Section id="research">
          <Research />
        </Section>
        <Section id="architecture">
          <Architecture />
        </Section>
        <Section id="ux-process">
          <UXProcess />
        </Section>
        <Section id="final-design">
          <FinalDesign />
        </Section>
        <Section id="reflection">
          <Reflection />
        </Section>
      </Main>
      <Footer />
    </>
  );
}

const Section = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(8)};
  scroll-margin-top: 80px; /* Verhindert, dass der Header den Inhalt überlappt */
`;
