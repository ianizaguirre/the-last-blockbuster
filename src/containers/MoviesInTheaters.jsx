/* eslint-disable */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
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
      // console.log('======RESULTS======>');
      // console.log(response);
    });
  }

  render() {
    return (
      <Fragment>
        {this.state.inTheaters
          .filter(movie => `${movie.title}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
          .map(movie => <MovieCard key={movie.id} {...movie} />)}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

export default connect(mapStateToProps)(MoviesNowPlaying);
