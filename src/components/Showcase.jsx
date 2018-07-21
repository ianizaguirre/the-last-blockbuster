/* eslint-disable */
import React, { Component, Fragment } from 'react';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import styled from 'styled-components';

import Example from './Example';
import MoviesInTheaters from './../containers/MoviesInTheaters';

const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: '/moo',
    main: MoviesInTheaters
  },
  {
    path: '/example',
    main: () => (
      <div>
        <Example />
      </div>
    )
  }
];

const GridContainer = styled.div`
  display: grid;
  border: 10px solid black;
  grid-template-rows: auto;
  grid-gap: 36px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  justify-items: center;

  margin-top: 30px;
  margin-bottom: 30px;
`;

// ============
const Ul = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

// background: red;
const Li = styled.li`
  display: block;
  font-weight: ${props => props.theme.semiBold};
  font-family: ${props => props.theme.secondaryFontFamily};
  padding: 15px 0;
  cursor: pointer;

  &:hover {
    background: #f1b318;
    color: #f6f6f6;
  }
`;

const Wrap = styled(Link)`
  text-decoration: none;
  display: inherit;
  max-width: 50%;
  margin: 0 auto;
`;

const Menu = () => (
  <Ul>
    <Li>
      <Wrap to={`/moo`}>In Theaters</Wrap>
    </Li>
    <Li>
      <Wrap to={`/example`}>Example</Wrap>
    </Li>
    <Li>
      <Wrap to={`/example`}>Example2</Wrap>
    </Li>
    <Li>
      <Wrap to={`/`}>Popular</Wrap>
    </Li>
    <Li>
      <Wrap to={`/`}>New Releases</Wrap>
    </Li>
  </Ul>
);

const Showcase = () => (
  <div>
    <Router>
      <Switch>
        <GridContainer>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} exact={route.exact} component={route.main} />
          ))}

          <Menu />
        </GridContainer>
      </Switch>
    </Router>
  </div>
);

export default Showcase;
