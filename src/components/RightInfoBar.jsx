import React from 'react';
import styled from 'styled-components';

import Breadcrumb from './../containers/Breadcrumb';

const InfoWrap = styled.div`
  background: ${props => props.theme.bgLight};
  padding: 0.5em 0.5em 0.5em 0;
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
  font-weight: 600;
  color: #ffffff;
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
