/* eslint-disable */
import React, { Component, Fragment } from 'react';
// import { connect } from 'react-redux';
import styled from 'styled-components';

import Services from './../services';

import MovieCard from './../components/MovieCard';

class MoviesNowPlaying extends Component {
  state = {
    inTheaters: []
  };

  componentDidMount() {
    Services.getNowPlaying().then(response => {
      this.setState({ inTheaters: response.results });
    });
  }

  render() {
    return <Fragment>{this.state.inTheaters.map(movie => <MovieCard key={movie.id} {...movie} />)}</Fragment>;
  }
}

export default MoviesNowPlaying;
