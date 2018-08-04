/* eslint-disable */

import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import getMovieDetails from './../redux/actionCreators/movieFullView';

const Wrapper = styled.div`
  border: 10px solid #000000;
  width: 100%;
  margin: 0 auto;
`;

class Details extends Component {
  componentDidMount() {
    this.props.getAPIData();
  }

  componentWillUnmount() {
    // Toggles pageIsOpen State
    this.props.getAPIData();
  }

  render() {
    const { tagline, overview, release_date } = this.props.movieFullView;
    return (
      <Fragment>
        <Wrapper>
          <p>Overview</p>
          {overview}

          <p>Release Date</p>
          {release_date}
        </Wrapper>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  pageIsOpen: state.movieFullView.detailsPageIsOpen,
  movieFullView: state.movieFullView.details
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getAPIData() {
    dispatch(getMovieDetails(ownProps.selectedShow));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
