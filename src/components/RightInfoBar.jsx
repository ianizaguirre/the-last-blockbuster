import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  height: 48px;
  margin: 0 auto;
  max-width: 50%;
`;

const Heading = styled.h3`
  font-weight: bold;
  color: #72727a;
  margin: 0;
`;

const RightInfoBar = () => (
  <Wrapper>
    <Heading> I Am RightInfoBar </Heading>
  </Wrapper>
);

export default RightInfoBar;
