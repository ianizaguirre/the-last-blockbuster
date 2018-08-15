/* eslint-disable */

import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
// import { P } from './../styles';
import Details from './../components/Details';

import HeroImage from './../components/HeroImage';
import HeroCover from './../components/HeroCover';

import Example from './../components/Example';

const HeroWrapper = styled.div`
  position: relative;
  // // min-height: 42em;
  min-height: 600px;
  overflow: hidden;

  margin-bottom: 50px;

  // // overflow: hidden;
`;

const ImgContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  overflow: hidden;

  &::after {
    position: absolute;
    content: '';
    background: radial-gradient(ellipse at center, transparent 50%, #000 100%),
      linear-gradient(45deg, #000 0%, transparent 50%);
    display: block;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }
`;

const UtilContainerChild = styled.div`
  position: relative;
  z-index: 11;

  // margin: 0 auto;

  // // width: 90%;
  // // margin: 0 auto;
  // // height: 100%;
`;

// =======================================
const Gutter = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const LayoutWrapper = styled.div`
  // max-width: 90em;
  // margin: 0 auto;
  // width: 100%;
  position: relative;
`;

// =========
const ExampleTemp = styled.div`
  padding-top: 100px;
`;

class MovieFull extends Component {
  render() {
    return (
      <Fragment>
        <HeroWrapper>
          <ImgContainer>
            <HeroImage>
              <UtilContainerChild>
                <HeroCover />
              </UtilContainerChild>
            </HeroImage>
          </ImgContainer>
        </HeroWrapper>
        <Gutter>
          <LayoutWrapper>
            <Details selectedShow={this.props.selectedShow} />

            <ExampleTemp>
              <Example />
            </ExampleTemp>
          </LayoutWrapper>
        </Gutter>
      </Fragment>
    );
  }
}

export default MovieFull;
