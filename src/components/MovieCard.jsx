/* eslint-disable */

import React, { Component } from 'react';

// const MovieCard = props => (
//   <div>
//     <h1>TITLE</h1>
//     <p>{this.props.nowplaying}</p>
//   </div>
// );
//  const data = this.props.nowplaying[1].title;
class MovieCard extends Component {
  render() {
    const data = this.props.title;
    return (
      <div>
        <h1>TITLE</h1>
        <p>{data}</p>
      </div>
    );
  }
}

export default MovieCard;
