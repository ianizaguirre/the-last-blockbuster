/* eslint-disable */
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import MoviesInTheaters from './../containers/MoviesInTheaters';
// import MovieCard from './MovieCard';
// <MovieCard />;

// grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
// grid-template-columns: repeat(6, 1fr);
const GridContainer = styled.div`
  display: grid;
  border: 10px solid black;
  grid-template-rows: auto;
  grid-gap: 36px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  justify-items: center;

  margin-top: 30px;
  margin-bottom: 30px;
`;

class Showcase extends Component {
  render() {
    return (
      <GridContainer>
        <MoviesInTheaters />
      </GridContainer>
    );
  }
}

export default Showcase;
