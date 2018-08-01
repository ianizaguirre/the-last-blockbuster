/* eslint-disable */

import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { getMovieDetails } from './../redux/actionCreators/search';

class Details extends Component {
  componentDidMount() {
    this.props.getAPIData();
  }

  componentWillUnmount() {
    // Toggles pageIsOpen State
    this.props.getAPIData();
  }

  render() {
    const { title, tagline, overview, release_date } = this.props.movieFullView;
    return (
      <Fragment>
        <p>Title</p>
        {title}

        <p>Tagline</p>
        {tagline}

        <p>Overview</p>
        {overview}

        <p>Release Date</p>
        {release_date}
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
