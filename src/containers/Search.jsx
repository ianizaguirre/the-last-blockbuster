// @flow
/* eslint-disable */

import React, { Component } from 'react';
import ShowCard from './../components/ShowCard';

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
      <div className="search">
        <input onChange={this.handleSearchTermChange} value={this.state.searchTerm} type="text" placeholder="Search" />
      </div>
    );
  }
}

export default Search;
