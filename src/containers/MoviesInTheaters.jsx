/* eslint-disable */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getMoviesInTheaters } from './../redux/actionCreators/search';
import styled from 'styled-components';

import MovieCard from './../components/MovieCard';

import Pagination from './../components/Pagination';

const Gutter = styled.div`
  width: 95%;
  margin: 0 auto;
`;

const GridContainer = styled.div`
  // border: 10px solid #000000;
  display: grid;
  grid-template-rows: auto;
  grid-gap: 36px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  justify-items: center;

  margin-top: 30px;
  margin-bottom: 30px;
`;

class MoviesInTheaters extends Component {
  componentDidMount() {
    this.props.getAPIData();
  }

  render() {
    return (
      <Fragment>
        <Gutter>
          <GridContainer>
            {this.props.movies
              .filter(movie => `${movie.title}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
              .map(movie => <MovieCard key={movie.id} {...movie} />)}
          </GridContainer>
        </Gutter>
        <Pagination />
      </Fragment>
    );
  }
}

// this.state.inTheaters ... is now simply this.props.movies

const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
  movies: state.movies.initialLoad
});

// movies: state.movies.initialLoad;

const mapDispatchToProps = dispatch => ({
  getAPIData() {
    dispatch(getMoviesInTheaters());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesInTheaters);
