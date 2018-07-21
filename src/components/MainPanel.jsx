/* eslint-disable */
import React, { Fragment, Component } from 'react';

import styled from 'styled-components';

import RightHeader from './RightHeader';
import RightInfoBar from './../containers/RightInfoBar';
import Showcase from './Showcase';

/* WRAPPER Keeps footer on bottom but why? */
const Wrapper = styled.div`
  background: inherit;
`;

const HeaderWrap = styled.div`
  background: #fff;
  min-height: ${props => props.theme.headerHeight};
  display: flex;
  align-items: center;
`;

const InfoWrap = styled.div`
  background: #24252a;
  padding: 0.5em;
`;

class MainPanel extends Component {
  render() {
    return (
      <Fragment>
        <HeaderWrap>
          <RightHeader />
        </HeaderWrap>
        <InfoWrap>
          <RightInfoBar />
        </InfoWrap>
      </Fragment>
    );
  }
}

export default MainPanel;
