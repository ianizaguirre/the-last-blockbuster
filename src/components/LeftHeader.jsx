import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 137px;

  margin-right: 10px;
`;

const Wrapper = styled.div`
  background: inherit;
`;

const LeftHeader = () => (
  <Wrapper>
    <Image alt="logo" src="http://www.blockbuster.com.au/BlockbusterExpress/assets/images/blockbuster_logo.png" />
  </Wrapper>
);

export default LeftHeader;
