/* eslint-disable */
import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

// import APIConnect from './../services/api-connect';

import HeroImage from './HeroImage';

// const Wrapper = styled.div`
//   position: relative;
//   height: 100%;
// `;

class HeroPanel extends Component {
  render() {
    // let showCaseBarComponent;
    // if (this.props.onDetailsPage === true) {
    //   showCaseBarComponent = <HeroImage />;
    // } else {
    //   showCaseBarComponent = '';
    // }

    return (
      <Fragment>
        <HeroImage />
      </Fragment>
    );
  }
}

// const mapStateToProps = state => ({
//   onDetailsPage: state.movieFullView.detailsPageIsOpen
// });

// export default connect(mapStateToProps)(HeroPanel);

export default HeroPanel;
