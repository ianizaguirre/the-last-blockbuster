// @flow
/* eslint-disable */

import React, { Component } from 'react';
import styled from 'styled-components';

import ShowCard from './../components/ShowCard';

const SearchBar = styled.input`
  min-width: 18rem;
  background-color: #f5f4f8;
  border-radius: 3px;
  border: 1px solid #c8ccd0;
  line-height: 1.4;
  padding: 8px 16px;
`;

class Search extends Component {
  state = {
    searchTerm: ''
  };
  props: {
    shows: Array<Show>
  };
  handleSearchTermChange = (event: SyntheticKeyboardEvent & { target: HTMLInputElement }) => {
    this.setState({ searchTerm: event.target.value });
  };
  render() {
    return (
      <SearchBar
        onChange={this.handleSearchTermChange}
        value={this.state.searchTerm}
        type="text"
        placeholder="Search"
      />
    );
  }
}

export default Search;
