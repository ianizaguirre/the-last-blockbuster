import React, { Fragment } from 'react';

import styled from 'styled-components';

const Wrapper = styled.footer`
  background: silver;
  width: 100%;
  padding: 15px;
`;

const Footer = () => (
  <Fragment>
    <Wrapper>
      <p> This is the Footer </p>
    </Wrapper>
  </Fragment>
);

export default Footer;
