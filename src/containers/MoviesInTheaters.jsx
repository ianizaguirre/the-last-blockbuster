/* eslint-disable */
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import MovieCard from './../components/MovieCard';

import Services from './../services';

// const FlexContainer = styled.div`
//   display: flex;
//   flex-flow: wrap;
//   justify-content: space-between;

//   &:after {
//     content: '';
//     flex: auto;
//   }
// `;

// const Wrapper = styled.div`
//   background: green;
// `;

// grid-column-gap: 30px;
// grid-row-gap: 25px;

// grid-template-columns: 200px 200px 200px 200px 200px 200px;
const GridContainer = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-gap: 36px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
`;

class MoviesNowPlaying extends Component {
  state = {
    inTheaters: []
  };

  componentDidMount() {
    Services.getNowPlaying().then(response => {
      this.setState({ inTheaters: response.results });
      // console.log('=========================>>>>>>>>');
      // console.log(this.state.nowplaying[1].title);
    });
  }

  render() {
    // console.table(this.state.nowplaying);
    // console.log(this.state.nowplaying[1].title);
    // <MovieCard nowplaying={this.state.nowplaying} />;
    return (
      <Fragment>
        <GridContainer>{this.state.inTheaters.map(movie => <MovieCard key={movie.id} {...movie} />)}</GridContainer>
      </Fragment>
    );
  }
}

export default MoviesNowPlaying;