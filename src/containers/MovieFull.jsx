/* eslint-disable */

import React, { Component, Fragment } from 'react';
// import styled from 'styled-components';

import Details from './../components/Details';
import HeroPanel from './../components/HeroPanel';

// const Wrapper = styled.div`
//   border: 10px solid #000000;
//   width: 100%;
//   margin: 0 auto;
// `;

class MovieFull extends Component {
  render() {
    return (
      <Fragment>
        <HeroPanel />
        <Details selectedShow={this.props.selectedShow} />
        <p> YYYYYYYYYYYYYYY </p>
      </Fragment>
    );
  }
}

export default MovieFull;
