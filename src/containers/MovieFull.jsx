/* eslint-disable */

import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

// import Details from './../components/Details';
import HeroImage from './../components/HeroImage';
import HeroCover from './../components/HeroCover';

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  background: #cccccc;
`;

class MovieFull extends Component {
  render() {
    return (
      <Fragment>
        <Wrapper>
          <HeroImage />
          <HeroCover selectedShow={this.props.selectedShow} />
        </Wrapper>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </Fragment>
    );
  }
}

export default MovieFull;
