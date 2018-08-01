/* eslint-disable */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getMoviesInTheaters } from './../redux/actionCreators/search';
import styled from 'styled-components';

import MovieCard from './../components/MovieCard';

class MoviesInTheaters extends Component {
  componentDidMount() {
    this.props.getAPIData();
  }

  render() {
    return (
      <Fragment>
        {this.props.movies
          .filter(movie => `${movie.title}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
          .map(movie => <MovieCard key={movie.id} {...movie} />)}
      </Fragment>
    );
  }
}

// this.state.inTheaters ... is now simply this.props.movies

const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
  movies: state.movies.initialLoad
});

const mapDispatchToProps = dispatch => ({
  getAPIData() {
    dispatch(getMoviesInTheaters());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesInTheaters);
