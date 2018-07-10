/* eslint-disable */
import React, { Fragment } from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 150px;
  float: left;
  margin-right: 10px;
`;

// <Image alt="logo" src={`/public/img/posters/${props.poster}`} />;

const Header = () => (
  <Fragment>
    <Image alt="logo" src="https://cdn.freebiesupply.com/logos/large/2x/blockbuster-logo-png-transparent.png" />
    <p>Hi</p>
  </Fragment>
);

export default Header;
