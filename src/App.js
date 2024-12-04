import React from 'react';
import styled from 'styled-components';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Introduction from './pages/1_Introduction';
import ProjectOverview from './pages/2_ProjectOverview';
import Research from './pages/3_Research';
import Architecture from './pages/4_Architecture';
import UXProcess from './pages/5_UXProcess';
import FinalDesign from './pages/6_FinalDesign';
import Reflection from './pages/7_Reflection';

const Main = styled.main`
  padding: ${({ theme }) => theme.spacing(6)} ${({ theme }) => theme.spacing(1)};
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
  scroll-margin-top: 80px; /* Verhindert, dass der Header den Inhalt überlappt */
`;
