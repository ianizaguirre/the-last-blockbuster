/* eslint-disable */
import React, { Component } from 'react';
import styled from 'styled-components';

import Sidebar from './Sidebar';
import LeftHeader from './LeftHeader';
import LeftInfoBar from './LeftInfoBar';

const Wrapper = styled.div`
  background: inherit;
`;

const Gutter = styled.div`
  width: 95%;
  margin: 0 auto;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Gold = styled.div`
  background: gold;
`;
const Red = styled.div`
  background: red;
`;
const Black = styled.div`
  background: #18191e;
`;
class LeftColumn extends Component {
  render() {
    return (
      <Wrapper>
        <FlexContainer>
          <Red>
            <Gutter>
              <LeftHeader />
            </Gutter>
          </Red>
          <Black>
            <Gutter>
              <LeftInfoBar />
            </Gutter>
          </Black>
          <Gold>
            <Gutter>
              <Sidebar />
            </Gutter>
          </Gold>
        </FlexContainer>
      </Wrapper>
    );
  }
}

export default LeftColumn;
