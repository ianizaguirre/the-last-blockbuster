/* eslint-disable */
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import { incrementPageNumber, decrementPageNumber } from './../redux/actionCreators/search';

import { connect } from 'react-redux';

const IconType = styled(Icon)`
  cursor: pointer;
  font-size: 1.8em;
  line-height: 0.75em;

  color: ${props => props.theme.bgLight};
  display: ${props => (props.hideBackButton ? 'none' : 'inline-block')};
`;

/* ====
IF this.props.pageNumber is === 0
Hide --> <TempButton onClick={this.props.decreasePageNumber}>BACK</TempButton>
==== */

class Pagination extends Component {
  render() {
    return (
      <Fragment>
        <p>--- Pagination Component ---</p>
        <IconType icon="arrow-alt-circle-right" onClick={this.props.increasePageNumber} />
        <br />
        <IconType
          icon="arrow-alt-circle-left"
          hideBackButton={this.props.pageNumber === 1}
          onClick={this.props.decreasePageNumber}
        />
        <br />
        <p>Currently on page: {this.props.pageNumber}</p>
        <br />
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
