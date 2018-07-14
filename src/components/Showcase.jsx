/* eslint-disable */
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import MoviesInTheaters from './../containers/MoviesInTheaters';
// import MovieCard from './MovieCard';
// <MovieCard />;

// const Wrapper = styled.div`

// `;

class Showcase extends Component {
  render() {
    return (
      <Fragment>
        <MoviesInTheaters />

        <br />
        <div>
          <p> --------------------------- THIS IS THE END --------------------------------</p>
        </div>
      </Fragment>
    );
  }
}

export default Showcase;
