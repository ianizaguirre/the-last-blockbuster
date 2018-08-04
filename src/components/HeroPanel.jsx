/* eslint-disable */
import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

import HeroImage from './HeroImage';

// const Wrapper = styled.div`
//   position: relative;
//   height: 100%;
// `;

class HeroPanel extends Component {
  render() {
    return (
      <Fragment>
        <HeroImage />
      </Fragment>
    );
  }
}

export default HeroPanel;
