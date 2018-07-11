/* eslint-disable */
import React, { Fragment } from 'react';

// import Header from './Header';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';

import styled from 'styled-components';

// import { Link } from 'react-router-dom';

// width: 100%;
// margin: 0 auto;
const Wrapper = styled.div`
  background: inherit;
`;
const FlexContainer = styled.div`
  display: flex;
`;
//  align-items: stretch;

const App = () => (
  <Fragment>
    <Wrapper>
      <FlexContainer>
        <LeftColumn />
        <RightColumn />
      </FlexContainer>
    </Wrapper>
  </Fragment>
);

export default App;
