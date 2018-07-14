import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: inherit;
  max-width: 50%;
  margin: 0 auto;
`;

const Image = styled.img`
  width: 137px;
  margin-left: -10px;
`;

const LeftHeader = () => (
  <Wrapper>
    <Image alt="logo" src="http://www.blockbuster.com.au/BlockbusterExpress/assets/images/blockbuster_logo.png" />
  </Wrapper>
);

export default LeftHeader;
