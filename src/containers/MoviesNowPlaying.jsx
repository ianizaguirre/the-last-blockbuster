/* eslint-disable */
import React, { Component } from 'react';

import MovieCard from './../components/MovieCard';

import Services from './../services';

class MoviesNowPlaying extends Component {
  state = {
    nowplaying: []
  };

  componentDidMount() {
    Services.getNowPlaying().then(response => {
      this.setState({ nowplaying: response.results });
      // console.log('=========================>>>>>>>>');
      // console.log(this.state.nowplaying[1].title);
    });
  }

  render() {
    // console.table(this.state.nowplaying);
    // console.log(this.state.nowplaying[1].title);
    // <MovieCard nowplaying={this.state.nowplaying} />;
    return (
      <div>
        <h1>TESTING</h1>
        <div>{this.state.nowplaying.map(movie => <MovieCard key={movie.id} {...movie} />)}</div>
      </div>
    );
  }
}

export default MoviesNowPlaying;
