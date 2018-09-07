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
    const { backdrop_path, poster_path } = this.props.movieFullView;
    console.log('--> Inside of HeroImage.jsx Component');
    console.log(`backdrop_path --------> ${backdrop_path}`);
    console.log(`poster_path --------> ${poster_path}`);
    // If BackDrop Img is there, then show it, if it is missing then show Poster image again
    const hasBackdrop = backdrop_path || poster_path;
    console.log(`hasBackdrop === ${hasBackdrop}`);
    return (
      <ImageContainer>
        <Image style={{ backgroundImage: `url(${APIConnect.imageUrl}original${hasBackdrop})` }}>
          {this.props.children}
        </Image>
      </ImageContainer>
    );
  }
}

const mapStateToProps = state => ({
  movieFullView: state.movieFullView.details
});

export default connect(mapStateToProps)(HeroImage);
