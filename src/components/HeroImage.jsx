/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

import APIConnect from './../services/api-connect';

// const Wrapper = styled.div`

// `;

const ImageContainer = styled.div`
  background-color: #ccc;
  width: 100%;
  // // height: auto;

  max-height: 40em;
  overflow: hidden;

  // // filter: blur(5px);
`;

// const Image = styled.img`
//   display: block;
//   margin: 0 auto;

//   max-width: 100%;
//   min-height: 35em;
//   height: auto;
// `;

// <Image alt="logo" src={`${APIConnect.imageUrl}original${this.props.heroImage}`} />;

const Image = styled.div`
  // display: block;
  // margin: 0 auto;

  // max-width: 100%;
  min-height: 35em;
  // height: auto;

  background-size: cover;
  background-repeat: no-repeat;
`;

// background-image: url(https://image.tmdb.org/t/p/original/cfbjFQ14hSTgXChBEvaEjFiUaKb.jpg);

// background-image: ${props => `url(${APIConnect.imageUrl}original${props.heroImage})`};

class HeroImage extends Component {
  render() {
    return (
      <ImageContainer>
        <Image style={{ backgroundImage: `url(${APIConnect.imageUrl}original${this.props.heroImage})` }} />
      </ImageContainer>
    );
  }
}

const mapStateToProps = state => ({
  heroImage: state.movieFullView.details.backdrop_path
});

export default connect(mapStateToProps)(HeroImage);
