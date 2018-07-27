/* eslint-disable */
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';

import MainPanel from './MainPanel';

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 2fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: 'sidePanel content-main-1 content-main-2';
`;

const SidePanelWrapper = styled.div`
  background: ${props => props.theme.primaryYellow};
  grid-column: sidePanel;
`;

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

// =========
const GridContainer = styled.div`
  display: grid;
  border: 10px solid black;
  grid-template-rows: auto;
  grid-gap: 36px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  justify-items: center;

  margin-top: 30px;
  margin-bottom: 30px;
`;

const Showcase = props => (
  <Router>
    <GridWrapper>
      <SidePanelWrapper>{props.sidePanel}</SidePanelWrapper>
      <FlexContainer>
        <MainPanel />
        <ShowcaseWrapper>
          <Gutter>
            <GridContainer>{props.mainContent}</GridContainer>
          </Gutter>
        </ShowcaseWrapper>
      </FlexContainer>
    </GridWrapper>
  </Router>
);

export default Showcase;
