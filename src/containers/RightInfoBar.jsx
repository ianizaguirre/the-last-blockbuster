import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 48px;
  margin: 0 auto;
  max-width: 50%;
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
  <Wrapper>
    <Heading> right info bar </Heading>
  </Wrapper>
);

export default RightInfoBar;
