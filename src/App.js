import React from "react";
import styled from "styled-components";

// Komponenten
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Introduction from "./pages/Introduction";
import ProjectOverview from "./pages/ProjectOverview";
import Research from "./pages/Research";
import Architecture from "./pages/Architecture";
import UXProcess from "./pages/UXProcess";
import FinalDesign from "./pages/FinalDesign";
import Reflection from "./pages/Reflection";



const Main = styled.main`
  padding: var(--spacing-48) var(--spacing-16);
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-48);
`;

const Section = styled.section`
  padding: var(--spacing-48) var(--spacing-16);
  background: var(--neutral-1);
  border-radius: var(--border-radius-large);
  box-shadow: var(--box-shadow-light);
  text-align: center;

  & h2 {
    font: var(--font-headline-2);
    color: var(--primary-3);
    margin-bottom: var(--spacing-24);
  }

  & p {
    font: var(--font-body);
    color: var(--neutral-6);
    line-height: 1.8;
  }

  & a {
    color: var(--primary-3);
    text-decoration: none;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: var(--secondary-3);
      text-decoration: underline;
    }
  }
`;

const PlaceholderSection = styled.div`
  &.placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
    background-color: var(--neutral-2);
    color: var(--neutral-5);
    border: 1px dashed var(--neutral-4);
    border-radius: var(--border-radius-medium);
    text-transform: uppercase;
  }
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
