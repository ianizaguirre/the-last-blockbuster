/* eslint-disable */
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

class GenreList extends Component {
  handleMovieGenres = data => {
    const result = data.filter(genresGroup => genresGroup).map(genre => genre.name);
    return result;
  };
  render() {
    console.log('hiiiiiii');
    console.log(this.props.genres);
    // const showMovieGenres = 'hi';
    const showMovieGenres = this.handleMovieGenres(this.props.genres);
    console.log('----------->>>');
    console.log(`${showMovieGenres}`);
    return (
      <Fragment>
        <div>{showMovieGenres}</div>
      </Fragment>
    );
  }
}

// export default GenreList;

// const mapStateToProps = state => ({
//   movieGenres: state.movieFullView.details.genres
// });

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   getAPIData() {
//     dispatch(getMovieDetails(ownProps.selectedShow));
//   }
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(GenreList);

const mapStateToProps = state => ({
  genres: state.movieFullView.genres
});

export default connect(mapStateToProps)(GenreList);
