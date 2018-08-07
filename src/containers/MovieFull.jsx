/* eslint-disable */

import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import HeroImage from './../components/HeroImage';
import HeroCover from './../components/HeroCover';

import Example from './../components/Example';

const HeroWrapper = styled.div`
  position: relative;

  // min-height: 42em;
  min-height: 600px;
  overflow: hidden;

  margin-bottom: 50px;

  // // height: 600px;
  // // overflow: hidden;
`;

const ImgContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  // //  max-height: 37em;
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

const UtilContainer = styled.div`
  position: relative;
  z-index: 11;

  // margin: 0 auto;

  // // width: 90%;
  // // margin: 0 auto;
  // // height: 100%;
`;

// =======================================
const LayoutWrapper = styled.div`
  max-width: 90em;
  margin: 0 auto;
  width: 100%;
  position: relative;
`;

// =========
const MiniTitle = styled.div`
  font-size: 25px;
`;

class MovieFull extends Component {
  render() {
    const { tagline, overview, release_date } = this.props.movieFullView;
    return (
      <Fragment>
        <HeroWrapper>
          <ImgContainer>
            <HeroImage>
              <UtilContainer>
                <HeroCover selectedShow={this.props.selectedShow} />
              </UtilContainer>
            </HeroImage>
          </ImgContainer>
        </HeroWrapper>
        <LayoutWrapper>
          <MiniTitle>Overview</MiniTitle>
          {overview}
          <Example />
        </LayoutWrapper>
      </Fragment>
    );
  }
}

// export default MovieFull;

const mapStateToProps = state => ({
  movieFullView: state.movieFullView.details
});

export default connect(mapStateToProps)(MovieFull);
