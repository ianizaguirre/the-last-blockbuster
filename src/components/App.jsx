/* eslint-disable */
import React, { Fragment } from 'react';

import styled from 'styled-components';
// import { FlexContainer } from './../styles';

// import Header from './Header';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import Footer from './Footer';

// import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  background: inherit;
`;

const LeftWrapper = styled.div`
  background: ${props => props.theme.primaryYellow};
  flex: 1 2 15%;
  min-width: 240px;
`;

const RightWrapper = styled.div`
  background: lime;
  flex 2 1 85%;
`;
//  align-items: stretch;

const FlexContainer = styled.div`
  display: flex;
  height: 100%;
`;

const App = () => (
  <Fragment>
    <Wrapper>
      <FlexContainer>
        <LeftWrapper>
          <LeftColumn />
        </LeftWrapper>
        <RightWrapper>
          <RightColumn />
        </RightWrapper>
      </FlexContainer>
      <Footer />
    </Wrapper>
  </Fragment>
);

export default App;
