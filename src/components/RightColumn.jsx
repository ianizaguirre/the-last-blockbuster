/* eslint-disable */
import React, { Fragment, Component } from 'react';

import styled from 'styled-components';
// import { FlexContainer } from './../styles';
//  <FlexContainer column>

// import Footer from './Footer';

import Showcase from './Showcase';

/* WRAPPER Keeps footer on bottom but why? */
const Wrapper = styled.div`
  background: inherit;
`;

const ShowcaseGutter = styled.div`
  width: 95%;
  margin: 0 auto;
`;

class RightColumn extends Component {
  render() {
    return (
      <Fragment>
        <Wrapper>
          <ShowcaseGutter>
            <Showcase />
          </ShowcaseGutter>
        </Wrapper>
      </Fragment>
    );
  }
}

export default RightColumn;
