/* eslint-disable */

import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getMovieDetails, getMovieCertification } from './../redux/actionCreators/movieFullView';

const Wrapper = styled.div`
  display: none;

  background: rgba(255, 255, 255, 1);
  // // box-shadow: 0px 4px 15px -4px rgba(0, 0, 0, 0.5);
  padding: 2em;
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
          {overview}
          <p>
            This component is important becuase it is connected to HeroCover.jsx which makes it receive the connection
            to the "SelectedShow" prop it needs... this then trigers the "On Page Switch" in redux etc....... BUT this
            component is not showing in the front end which makes me thing I need to refactor .... this should be the
            component that hold the overview information instead of that overview information living inside of
            MovieFull.jsx
          </p>
          <p>Release Date</p>
          {release_date}
        </Wrapper>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  pageIsOpen: state.movieFullView.detailsPageIsOpen,
  movieFullView: state.movieFullView.details,
  certification: state.movieFullView.certification
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getAPIData() {
    dispatch(getMovieDetails(ownProps.selectedShow));
    dispatch(getMovieCertification(ownProps.selectedShow));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
