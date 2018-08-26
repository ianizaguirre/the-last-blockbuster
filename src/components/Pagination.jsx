/* eslint-disable */
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import { incrementPageNumber, decrementPageNumber } from './../redux/actionCreators/search';

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
  render() {
    return (
      <Fragment>
        <p>--- Pagination Component ---</p>
        <TempButton onClick={this.props.increasePageNumber}>NEXT</TempButton>
        <br />
        <TempButton onClick={this.props.decreasePageNumber}>BACK</TempButton>
        <p>{this.props.pageNumber}</p>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  pageNumber: state.movies.pageNumber
});

const mapDispatchToProps = dispatch => ({
  increasePageNumber: () => dispatch(incrementPageNumber()),
  decreasePageNumber: () => dispatch(decrementPageNumber())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);
