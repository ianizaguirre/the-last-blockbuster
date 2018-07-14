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
  font-weight: bold;
  color: #f5f5f6;
  margin: 0;
`;

const RightInfoBar = () => (
  <Wrapper>
    <Heading> I Am RightInfoBar </Heading>
  </Wrapper>
);

export default RightInfoBar;
