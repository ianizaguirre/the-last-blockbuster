import React from 'react';
import styled from 'styled-components';

import Search from './../containers/Search';

const HeaderWrap = styled.div`
  background: #fff;
  min-height: ${props => props.theme.headerHeight};
  display: flex;
  align-items: center;
`;

// Searchbar width at 100% looks nicer flush
const SearchGutter = styled.div`
  width: 100%;
  margin: 0 auto;
`;

// const Wrapper = styled.div`
//   height: 48px;
//   margin: 0 auto;
//   max-width: 50%;
// `;

const RightHeader = () => (
  <HeaderWrap>
    <SearchGutter>
      <Search />
    </SearchGutter>
  </HeaderWrap>
);

export default RightHeader;
