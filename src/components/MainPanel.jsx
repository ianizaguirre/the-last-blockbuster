/* eslint-disable */
import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

import APIConnect from './../services/api-connect';

import RightHeader from './RightHeader';
import RightInfoBar from './RightInfoBar';

// const Wrapper = styled.div`
//   background: inherit;
// `;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 100%;
`;

class MainPanel extends Component {
  render() {
    let rightInfoBarComponent;
    if (this.props.onDetailsPage === false) {
      rightInfoBarComponent = <RightInfoBar />;
    } else {
      rightInfoBarComponent = <Image alt="logo" src={`${APIConnect.imageUrl}w500${this.props.heroImage}`} />;
    }

    return (
      <Fragment>
        <RightHeader />

        {rightInfoBarComponent}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  onDetailsPage: state.movieFullView.detailsPageIsOpen,
  heroImage: state.movieFullView.details.backdrop_path
});

export default connect(mapStateToProps)(MainPanel);
