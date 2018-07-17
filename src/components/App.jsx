/* eslint-disable */
import React from 'react';

import styled from 'styled-components';
// import { FlexContainer } from './../styles';

import SidePanel from './SidePanel';

import MainPanel from './MainPanel';
import Showcase from './Showcase';

// import Footer from './Footer';

// import { Link } from 'react-router-dom';

// display: flex;
// height: 100%;
// grid-template-columns: 1fr 6fr;
// grid-template-columns: repeat(6, 1fr);
// grid-template-areas: 'sidebar-1 content sidebar-2';
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 2fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: 'sidePanel content-main-1 content-main-2';
`;
// grid-template-columns: 200px 1fr 2fr 1fr;
// grid-template-areas: 'sidebar-1 header content-main-1 content-main-2';
const SidePanelWrapper = styled.div`
  background: ${props => props.theme.primaryYellow};
  grid-column: sidePanel;
`;
// grid-column: span 1;

// grid-column: span 5;

const FlexContainer = styled.div`
  grid-column-start: content-main-1;
  grid-column-end: content-main-2;

  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ShowcaseWrapper = styled.div`
  grid-column-start: content-main-1;
  grid-column-end: content-main-2;

  overflow: auto;
  height: 100vh;
`;

const Gutter = styled.div`
  width: 95%;
  margin: 0 auto;
`;

const App = () => (
  <GridContainer>
    <SidePanelWrapper>
      <SidePanel />
    </SidePanelWrapper>
    <FlexContainer>
      <MainPanel />

      <ShowcaseWrapper>
        <Gutter>
          <Showcase />
        </Gutter>
      </ShowcaseWrapper>
    </FlexContainer>
  </GridContainer>
);

export default App;
