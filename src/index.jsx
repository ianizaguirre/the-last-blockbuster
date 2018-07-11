// @flow

import React from 'react';
import { render } from 'react-dom';
import { injectGlobal } from 'styled-components';
import Router from './Router';

const renderApp = () => {
  render(<Router />, document.getElementById('app'));
};

renderApp();

if (module.hot) {
  module.hot.accept('./Router', () => {
    renderApp();
  });
}

// Global style
// eslint-disable-next-line
injectGlobal`
  body {
    background-color: #fff;
    width: 100%;
    margin: 0 auto;
    /* font-family: cursive; */
  }
`;
