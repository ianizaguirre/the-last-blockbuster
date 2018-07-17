/* eslint-disable */
import React, { Fragment } from 'react';

import styled from 'styled-components';
// import { FlexContainer } from './../styles';

import LeftColumn from './LeftColumn';

import RightColumn from './RightColumn';
import RightPanel from './Panel';

// import Footer from './Footer';

// import { Link } from 'react-router-dom';

const Wrapper = styled.div``;

// display: flex;
// height: 100%;
// grid-template-columns: 1fr 6fr;
// grid-template-columns: repeat(6, 1fr);
// grid-template-areas: 'sidebar-1 content sidebar-2';
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 200px 2fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: 'sidebar-1 content-main-1 content-main-2';
`;
// grid-template-columns: 200px 1fr 2fr 1fr;
// grid-template-areas: 'sidebar-1 header content-main-1 content-main-2';
const LeftWrapper = styled.div`
  background: ${props => props.theme.primaryYellow};
  grid-column: sidebar-1;
`;
// grid-column: span 1;

// grid-column: span 5;

const GridRow = styled.div`
  grid-column-start: content-main-1;
  grid-column-end: content-main-2;

  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const PannelWrapper = styled.div``;

const RightWrapper = styled.div`
  grid-column-start: content-main-1;
  grid-column-end: content-main-2;

  overflow: auto;

  height: 100vh;
`;

const App = () => (
  <Fragment>
    <Wrapper>
      <GridContainer>
        <LeftWrapper>
          <LeftColumn />
        </LeftWrapper>
        <GridRow>
          <PannelWrapper>
            <RightPanel />
          </PannelWrapper>
          <RightWrapper>
            <RightColumn />
          </RightWrapper>
        </GridRow>
      </GridContainer>
    </Wrapper>
  </Fragment>
);

export default App;
