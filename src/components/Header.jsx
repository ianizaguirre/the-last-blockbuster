/* eslint-disable */
import React from 'react';

import Search from './../containers/Search';

import styled from 'styled-components';

const Image = styled.img`
  width: 150px;
  float: left;
  margin-right: 10px;
`;

const Wrapper = styled.header`
  background-color: red;
`;

const Gutter = styled.div`
  width: 95%;
  margin: 0 auto;
`;

// <Image alt="logo" src={`/public/img/posters/${props.poster}`} />;

const Header = () => (
  <Wrapper>
    <Gutter>
      <Image alt="logo" src="https://cdn.freebiesupply.com/logos/large/2x/blockbuster-logo-png-transparent.png" />
      <Search />
    </Gutter>
  </Wrapper>
);

export default Header;
