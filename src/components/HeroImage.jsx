/* eslint-disable */
import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

import APIConnect from './../services/api-connect';

import HeroCover from './HeroCover';

const Wrapper = styled.div`
  position: relative;
  height: 100%;
`;

const ImageContainer = styled.div`
  position: absolute;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 100%;
`;

class HeroImage extends Component {
  render() {
    return (
      <Fragment>
        <Wrapper>
          <ImageContainer>
            <Image alt="logo" src={`${APIConnect.imageUrl}original${this.props.heroImage}`} />
          </ImageContainer>

          <HeroCover />
        </Wrapper>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  heroImage: state.movieFullView.details.backdrop_path
});

export default connect(mapStateToProps)(HeroImage);
