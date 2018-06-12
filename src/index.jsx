// @flow

import React from 'react';
import { render } from 'react-dom';
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
