/* eslint-disable */
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

// import { getMoviesInTheaters } from './../redux/actionCreators/search';
import { getCurrentPageNumber } from './../redux/actionCreators/search';

import { connect } from 'react-redux';

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
        <p>--- Pagination Component ---</p>
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

// const mapDispatchToProps = dispatch => ({
//   updatePageNumber: () => dispatch(getCurrentPageNumber())
// });

// const mapDispatchToProps = dispatch => ({
//   updatePageNumber: pageNumber => dispatch(getCurrentPageNumber(pageNumber))
// });

const mapDispatchToProps = dispatch => ({
  updatePageNumber: () => dispatch(getCurrentPageNumber())
  // getMoviesInTheaters: () => dispatch(getMoviesInTheaters(2))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);
