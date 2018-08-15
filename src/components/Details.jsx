/* eslint-disable */

import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { P } from './../styles';
import { connect } from 'react-redux';
import { getMovieDetails, getMovieCertification } from './../redux/actionCreators/movieFullView';

import GenreList from './GenreList';

// ===================== GRID Temp - Move To Template ======

const GridWrapper = styled.div`
  display: grid;
  grid-template-areas: 'intro-metadata-col intro-text-col';
  grid-template-columns: 1fr 2fr;

  // // grid-template-rows: auto;
  //  // grid-template-areas: 'sidePanel content-main-1 content-main-2';
`;

// =========== GRID Temp - 3 mini details - Move To Template ======

const GridWrapperMini = styled.div`
  display: grid;
  grid-template-areas: 'runtime-block certification-block main-genre-block';
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;
const RunTime = styled.div`
  grid-area: runtime-block;
  grid-column: span 1;
  grid-row: span 1;
`;
const Certification = styled.div`
  grid-area: certification-block;
  grid-column: span 1;
  grid-row: span 1;
`;
const MainGenre = styled.div`
  grid-area: main-genre-block;
  grid-column: span 2;
  grid-row: span 1;
`;

// ==========================================================
// function formatRunTime() {

// }
// ==========================================================

class Details extends Component {
  componentDidMount() {
    this.props.getAPIData();
  }

  componentWillUnmount() {
    // Toggles pageIsOpen State
    this.props.getAPIData();
  }

  runtimeConvert = data => {
    const hours = Math.floor(data / 60);
    const minutes = Math.floor(data % 60);

    const result = `${hours} HR ${minutes} MIN`;
    return result;
  };

  render() {
    const { tagline, overview, runtime, release_date, genres } = this.props.movieFullView;

    const movieRuntime = this.runtimeConvert(runtime);

    return (
      <Fragment>
        <GridWrapper>
          <GridWrapperMini>
            <RunTime>{movieRuntime}</RunTime>
            <Certification>{this.props.certification}</Certification>
            <MainGenre>
              <GenreList />
            </MainGenre>
          </GridWrapperMini>
          <P> {overview} </P>
        </GridWrapper>
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
