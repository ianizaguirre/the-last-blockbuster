/* eslint-disable */
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

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

const mapDispatchToProps = dispatch => ({
  updatePageNumber: () => dispatch(getCurrentPageNumber())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);
