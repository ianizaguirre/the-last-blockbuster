/* eslint-disable */
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

// import { getMoviesInTheaters } from './../redux/actionCreators/search';
import { getCurrentPageNumber } from './../redux/actionCreators/search';

import { connect } from 'react-redux';

// const GridWrapper = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   grid-template-rows: 1fr 1fr;
//   grid-gap: 6px;
//   grid-auto-flow: row;
// `;
// const GridItem = styled.div`
//   font-weight: 400;
//   cursor: pointer;
//   color: white;
//   background-color: #fe9700; // TEMP COLOR
//   font-size: 18px;
//   justify-self: left;
//   padding: 0.5em 1em;
// `;

const TempButton = styled.div`
  font-weight: 400;
  cursor: pointer;
  color: white;
  background-color: #fe9700; // TEMP COLOR
  font-size: 18px;
  padding: 0.5em 1em;
  width: 150px;
`;
class Pagination extends Component {
  // componentDidMount() {
  //   this.props.getMoviesInTheaters();
  // }
  // componentDidMount() {
  //   this.props.handlePaginationChange();
  // }

  render() {
    return (
      <Fragment>
        <p>Pagination Bar Logic Goes Here</p>
        <TempButton onClick={this.props.updatePageNumber}>NEXT</TempButton>
        <p>{this.props.pageNumber}</p>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  pageNumber: state.movies.pageNumber
});

// const mapDispatchToProps = dispatch => ({
//   getAPIData() {
//     // handlePaginationChange() {
//     dispatch(getMoviesInTheaters());
//     // }
//   }
// });

// export default Pagination;
// export default connect(
//   // mapStateToProps,
//   null,
//   mapDispatchToProps
// )(Pagination);

const mapDispatchToProps = dispatch => ({
  // getAPIData() {

  // const thisResult = getCurrentPageNumber();
  updatePageNumber: pageNumber => dispatch(getCurrentPageNumber(pageNumber))
  // dispatch(getMoviesInTheaters(thisResult));

  // }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);
