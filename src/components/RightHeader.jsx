import React from 'react';
import styled from 'styled-components';

import Search from './../containers/Search';

const FlexContainer = styled.div`
  display: flex;
`;

// const Wrapper = styled.div`
//   height: 48px;
//   margin: 0 auto;
//   max-width: 50%;
// `;

const RightHeader = () => (
  <FlexContainer>
    <Search />
  </FlexContainer>
);

export default RightHeader;
