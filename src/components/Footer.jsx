import React, { Fragment } from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
`;

const MyFooter = styled.footer`
  background: silver;
  width: 100%;
  padding: 2px;
  margin-top: 30px;
  grid-row-start: 2;
  grid-row-end: 3;
`;

const Footer = () => (
  <Fragment>
    <Wrapper>
      <MyFooter>
        <br />
      </MyFooter>
    </Wrapper>
  </Fragment>
);

export default Footer;
