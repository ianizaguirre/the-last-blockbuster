import React, { Fragment } from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
`;

const MyFooter = styled.footer`
  background: #f7f7f7;
  border-top: 1px solid #ececec;
  margin-top: 50px;

  width: 100%;
  padding: 2px;
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
