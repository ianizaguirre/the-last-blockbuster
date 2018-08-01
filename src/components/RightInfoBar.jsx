import React from 'react';
import styled from 'styled-components';

import Breadcrumb from './../containers/Breadcrumb';

const InfoWrap = styled.div`
  background: #24252a;
  padding: 0.5em;
`;

const Wrapper = styled.div`
  height: 48px;
  margin: 0 auto;
  // max-width: 50%;
  width: 95%
  display: flex;
  align-items: center;
`;

const Heading = styled.h3`
  font-size: 17px;
  font-weight: bold;
  color: #f5f5f6d6;
  margin: 0;
`;

const RightInfoBar = () => (
  <InfoWrap>
    <Wrapper>
      <Heading>
        <Breadcrumb />
      </Heading>
    </Wrapper>
  </InfoWrap>
);

export default RightInfoBar;
