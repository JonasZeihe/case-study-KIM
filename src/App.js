import React from 'react';
import styled from 'styled-components';

// Komponenten
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Introduction from './pages/Introduction';
import ProjectOverview from './pages/ProjectOverview';
import Research from './pages/Research';
import Architecture from './pages/Architecture';
import UXProcess from './pages/UXProcess';
import FinalDesign from './pages/FinalDesign';
import Reflection from './pages/Reflection';

// Hauptinhalt
const Main = styled.main`
  padding: ${({ theme }) => theme.spacing(6)} ${({ theme }) => theme.spacing(4)};
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
`;

export default function App() {
  return (
    <>
      <Header />
      <Main>
        <Introduction />
        <ProjectOverview />
        <Research />
        <Architecture />
        <UXProcess />
        <FinalDesign />
        <Reflection />
      </Main>
      <Footer />
    </>
  );
}
