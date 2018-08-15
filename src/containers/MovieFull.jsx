/* eslint-disable */

import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
// import { P } from './../styles';
import Details from './../components/Details';
// import { connect } from 'react-redux';

import HeroImage from './../components/HeroImage';
import HeroCover from './../components/HeroCover';

import Example from './../components/Example';

const HeroWrapper = styled.div`
  position: relative;
  // // min-height: 42em;
  min-height: 600px;
  overflow: hidden;

  margin-bottom: 50px;

  // // overflow: hidden;
`;

const ImgContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  overflow: hidden;

  &::after {
    position: absolute;
    content: '';
    background: radial-gradient(ellipse at center, transparent 50%, #000 100%),
      linear-gradient(45deg, #000 0%, transparent 50%);
    display: block;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }
`;

const UtilContainerChild = styled.div`
  position: relative;
  z-index: 11;

  // margin: 0 auto;

  // // width: 90%;
  // // margin: 0 auto;
  // // height: 100%;
`;

// =======================================
const Gutter = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const LayoutWrapper = styled.div`
  // max-width: 90em;
  // margin: 0 auto;
  // width: 100%;
  position: relative;
`;

// =========
const ExampleTemp = styled.div`
  padding-top: 100px;
`;

// // ===================== GRID Temp - Move To Template ======

// const GridWrapper = styled.div`
//   display: grid;
//   grid-template-areas: 'intro-metadata-col intro-text-col';
//   grid-template-columns: 1fr 2fr;

//   // // grid-template-rows: auto;
//   //  // grid-template-areas: 'sidePanel content-main-1 content-main-2';
// `;

// // =========== GRID Temp - 3 mini details - Move To Template ======

// const GridWrapperMini = styled.div`
//   display: grid;
//   grid-template-areas: 'runtime-block certification-block main-genre-block';
//   grid-template-columns: 1fr 1fr;
//   grid-template-rows: 1fr 1fr;
// `;
// const RunTime = styled.div`
//   grid-area: runtime-block;
//   grid-column: span 1;
//   grid-row: span 1;
// `;
// const Certification = styled.div`
//   grid-area: certification-block;
//   grid-column: span 1;
//   grid-row: span 1;
// `;
// const MainGenre = styled.div`
//   grid-area: main-genre-block;
//   grid-column: span 2;
//   grid-row: span 1;
// `;

class MovieFull extends Component {
  render() {
    return (
      <Fragment>
        <HeroWrapper>
          <ImgContainer>
            <HeroImage>
              <UtilContainerChild>
                <HeroCover />
              </UtilContainerChild>
            </HeroImage>
          </ImgContainer>
        </HeroWrapper>
        <Gutter>
          <LayoutWrapper>
            <Details selectedShow={this.props.selectedShow} />

            <ExampleTemp>
              <Example />
            </ExampleTemp>
          </LayoutWrapper>
        </Gutter>
      </Fragment>
    );
  }
}

export default MovieFull;

// <GridWrapper>
//   <GridWrapperMini>

//     <RunTime>{runtime}</RunTime> <Certification>R??</Certification> <MainGenre>Comedy??</MainGenre>
//   </GridWrapperMini>
//   <P> {overview} </P>
// </GridWrapper>;

// const mapStateToProps = state => ({
//   movieFullView: state.movieFullView.details
// });

// export default connect(mapStateToProps)(MovieFull);
