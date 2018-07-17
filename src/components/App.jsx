/* eslint-disable */
import React, { Fragment } from 'react';

import styled from 'styled-components';
// import { FlexContainer } from './../styles';

// import Header from './Header';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';

// import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  background: inherit;
`;

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

// flex: 1 2 15%;
// min-width: 240px;
const LeftWrapper = styled.div`
  background: ${props => props.theme.primaryYellow};
`;
// grid-column: span 1;

// background: lime;
// flex 2 1 85%;
// grid-column: span 5;
const RightWrapper = styled.div`
  grid-column-end: content-main-2;

  grid-column-start: content-main-1;

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
        <RightWrapper>
          <RightColumn />
        </RightWrapper>
      </GridContainer>
    </Wrapper>
  </Fragment>
);

export default App;
