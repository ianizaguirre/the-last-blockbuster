/* eslint-disable */
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import MoviesInTheaters from './../containers/MoviesInTheaters';
// import MovieCard from './MovieCard';
// <MovieCard />;

const ShowcaseGutter = styled.div`
  background: green;
  width: 95%;
  margin: 0 auto;
`;

class Showcase extends Component {
  render() {
    return (
      <ShowcaseGutter>
        <MoviesInTheaters />
      </ShowcaseGutter>
    );
  }
}

export default Showcase;
