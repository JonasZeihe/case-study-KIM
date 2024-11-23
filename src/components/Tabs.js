import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TabHeader = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing(3)};
  justify-content: center;
  margin-bottom: ${(props) => props.theme.spacing(5)};

  button {
    font: ${(props) => props.theme.typography.button};
    padding: ${(props) => props.theme.spacing(3)};
    background: ${(props) => props.theme.colors.neutral.light};
    color: ${(props) => props.theme.colors.primary.main};
    border: none;
    border-radius: ${(props) => props.theme.borderRadius.medium};
    cursor: pointer;

    &.active {
      background: ${(props) => props.theme.colors.primary.main};
      color: ${(props) => props.theme.colors.neutral.white};
    }
  }
`;

const TabContent = styled.div`
  padding: ${(props) => props.theme.spacing(4)};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  background: ${(props) => props.theme.colors.background.light};
  box-shadow: ${(props) => props.theme.boxShadow.light};
`;

// React Component
export default function Tabs({ tabs }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <TabContainer>
      <TabHeader>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={index === activeIndex ? 'active' : ''}
            onClick={() => setActiveIndex(index)}
          >
            {tab.label}
          </button>
        ))}
      </TabHeader>
      <TabContent>{tabs[activeIndex]?.content}</TabContent>
    </TabContainer>
  );
}
