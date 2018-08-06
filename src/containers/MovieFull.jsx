/* eslint-disable */

import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import HeroImage from './../components/HeroImage';
import HeroCover from './../components/HeroCover';

import Example from './../components/Example';

const HeroWrapper = styled.div`
  position: relative;
`;

const ImgContainer = styled.div`
  position: absolute;
  width: 100%;

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
  max-width: 60em;
  margin: 0 auto;

  position: relative;
  // overflow: hidden;
`;

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
            <HeroImage />
          </ImgContainer>

          <UtilContainer>
            <HeroCover selectedShow={this.props.selectedShow} />
          </UtilContainer>
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
