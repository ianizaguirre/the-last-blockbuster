/* eslint-disable */
import React, { Fragment, Component } from 'react';

import styled from 'styled-components';

import RightHeader from './RightHeader';
import RightInfoBar from './RightInfoBar';
import Showcase from './Showcase';

/* WRAPPER Keeps footer on bottom but why? */
const Wrapper = styled.div`
  background: inherit;
`;
// const FlexContainer = styled.div`
//   display: flex;

//   flex-direction: column;
//   height: 100%;
// `;
const Container = styled.div``;

const HeaderWrap = styled.div`
  background: #fff;
  min-height: ${props => props.theme.headerHeight};
  display: flex;
  align-items: center;
`;

const InfoWrap = styled.div`
  background: #24252a;
`;

class Panel extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <HeaderWrap>
            <RightHeader />
          </HeaderWrap>
          <InfoWrap>
            <RightInfoBar />
          </InfoWrap>
        </Container>
      </Fragment>
    );
  }
}

export default Panel;
