/* eslint-disable */

import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { setSearchTerm } from './../redux/actionCreators/search.js';

const SearchBar = styled.input`
  min-width: 18rem;
  background-color: #f5f4f8;
  border-radius: 3px;
  border: 1px solid #c8ccd0;
  line-height: 1.4;
  padding: 8px 16px;
`;

const Search = props => {
  return (
    <Fragment>
      <SearchBar onChange={props.handleSearchTermChange} value={props.searchTerm} type="text" placeholder="Search" />
    </Fragment>
  );
};

const mapStateToProps = state => ({ searchTerm: state.searchTerm });

const mapDispatchToProps = dispatch => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
