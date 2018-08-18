/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

import APIConnect from './../services/api-connect';

const ImageContainer = styled.div`
  background-color: #ccc;
  width: 100%;
  height: 100%;
  max-height: 40em;
  overflow: hidden;
  // // height: auto;
  // // filter: blur(5px);
`;

const Image = styled.div`
  min-height: 35em;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
`;

// background-image: url(https://image.tmdb.org/t/p/original/cfbjFQ14hSTgXChBEvaEjFiUaKb.jpg);

// background-image: ${props => `url(${APIConnect.imageUrl}original${props.heroImage})`};

class HeroImage extends Component {
  render() {
    return (
      <ImageContainer>
        <Image style={{ backgroundImage: `url(${APIConnect.imageUrl}original${this.props.heroImage})` }}>
          {this.props.children}
        </Image>
      </ImageContainer>
    );
  }
}

const mapStateToProps = state => ({
  heroImage: state.movieFullView.details.backdrop_path
});

export default connect(mapStateToProps)(HeroImage);
