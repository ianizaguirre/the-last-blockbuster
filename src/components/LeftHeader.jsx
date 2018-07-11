import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 150px;
  float: left;
  margin-right: 10px;
`;

// const Wrapper = styled.div`
//   background: red;
// `;

const LeftHeader = () => (
  <div>
    <Image alt="logo" src="https://cdn.freebiesupply.com/logos/large/2x/blockbuster-logo-png-transparent.png" />
  </div>
);

export default LeftHeader;
