/* eslint-disable */
import React, { Component } from 'react';
import styled from 'styled-components';
// import { Gutter } from './../styles';

import Sidebar from './Sidebar';
import LeftHeader from './LeftHeader';
import LeftInfoBar from './LeftInfoBar';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

/* margin-bottom: 15 .... + 15 from li padding = 30px */
const InfoWrap = styled.div`
  background: #18191e;
  margin-bottom: 15px;
`;

const HeaderWrap = styled.div`
  background: #fff;
  min-height: ${props => props.theme.headerHeight};
  display: flex;
  align-items: center;
`;

class LeftColumn extends Component {
  render() {
    return (
      <FlexContainer>
        <HeaderWrap>
          <LeftHeader />
        </HeaderWrap>

        <InfoWrap>
          <LeftInfoBar />
        </InfoWrap>

        <Sidebar />
      </FlexContainer>
    );
  }
}

export default LeftColumn;
