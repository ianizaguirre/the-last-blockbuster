/* eslint-disable */
import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

import APIConnect from './../services/api-connect';

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 100%;
`;

class MovieImage extends Component {
  render() {
    let rightInfoBarComponent;
    if (this.props.onDetailsPage === true) {
      rightInfoBarComponent = <Image alt="logo" src={`${APIConnect.imageUrl}original${this.props.heroImage}`} />;
    } else {
      rightInfoBarComponent = '';
    }

    return <Fragment>{rightInfoBarComponent}</Fragment>;
  }
}

const mapStateToProps = state => ({
  onDetailsPage: state.movieFullView.detailsPageIsOpen,
  heroImage: state.movieFullView.details.backdrop_path
});

export default connect(mapStateToProps)(MovieImage);
