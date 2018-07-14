import React from 'react';
import styled from 'styled-components';

import Search from './../containers/Search';

const SearchGutter = styled.div`
  width: 95%;
  margin: 0 auto;
`;

// const Wrapper = styled.div`
//   height: 48px;
//   margin: 0 auto;
//   max-width: 50%;
// `;

const RightHeader = () => (
  <SearchGutter>
    <Search />
  </SearchGutter>
);

export default RightHeader;
