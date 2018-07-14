/* eslint-disable */
import React, { Component } from 'react';
import styled from 'styled-components';
// import { Gutter } from './../styles';

import Sidebar from './Sidebar';
import LeftHeader from './LeftHeader';
import LeftInfoBar from './LeftInfoBar';

const Wrapper = styled.div`
  background: inherit;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

// const Gutter = styled.div`
//   width: 50%;
//   margin: 0 auto;
// `;

const InfoWrap = styled.div`
  background: #18191e;
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
      <Wrapper>
        <FlexContainer>
          <HeaderWrap>
            <LeftHeader />
          </HeaderWrap>

          <InfoWrap>
            <LeftInfoBar />
          </InfoWrap>

          <Sidebar />
        </FlexContainer>
      </Wrapper>
    );
  }
}

export default LeftColumn;
