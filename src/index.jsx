// @flow

import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider, injectGlobal } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import theme from './theme';
import Router from './Router';

// Global style
// eslint-disable-next-line
injectGlobal`
/* @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700'); */
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700|Open+Sans:300,400,600,700');

  body {
    background-color: #fff;
    width: 100%;
    height: 100%;
    /* margin: 0 auto; */
    font-family: 'Open Sans', sans-serif;
    overflow-x: hidden;
  }

  h1, h2, h3, h4 {
    margin: 0;
  }



`;

const renderApp = () => {
  render(
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
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
