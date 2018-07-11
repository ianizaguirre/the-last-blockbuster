// @flow

import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider, injectGlobal } from 'styled-components';
import theme from './theme';
import Router from './Router';

// Global style
// eslint-disable-next-line
injectGlobal`
  body {
    background-color: #fff;
    width: 100%;
    height: 100%;
    /* margin: 0 auto; */
    /* font-family: cursive; */
  }
`;

const renderApp = () => {
  render(
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>,
    document.getElementById('app')
  );
};

renderApp();

if (module.hot) {
  module.hot.accept('./Router', () => {
    renderApp();
  });
}
