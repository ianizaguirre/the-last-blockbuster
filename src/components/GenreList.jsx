/* eslint-disable */
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 6px;
  grid-auto-flow: row;
`;
const GridItem = styled.div`
  font-weight: 400;
  cursor: pointer;
  color: white;
  background-color: #fe9700; // TEMP COLOR
  font-size: 18px;
  justify-self: left;
  padding: 0.5em 1em;
`;

class GenreList extends Component {
  handleMovieGenres = data => {
    const result = data.map(genre => <GridItem key={genre.id}>{genre.name}</GridItem>);
    return result;
  };

  render() {
    // console.log('hiiiiiii');
    // console.log(this.props.genres);

    const showMovieGenres = this.handleMovieGenres(this.props.genres);

    return (
      <Fragment>
        <GridWrapper>{showMovieGenres}</GridWrapper>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  genres: state.movieFullView.genres
});

export default connect(mapStateToProps)(GenreList);
