import React from 'react';
import styled from 'styled-components';

// background: lightblue;
const Wrapper = styled.div`
  height: 48px;
  margin: 0 auto;
  max-width: 50%;
`;
// padding: 15px 30px;

const Heading = styled.h3`
  font-weight: bold;
  color: #72727a;
  margin: 0;
`;

const LeftInfoBar = () => (
  <Wrapper>
    <Heading> # Menu </Heading>
  </Wrapper>
);

export default LeftInfoBar;
