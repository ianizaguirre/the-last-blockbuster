import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './Landing';
// import App from '../containers/App';
// import FourOhFour from './FourOhFour';

/* <Route exact path="/" component={Landing} />
  <Route path="/app/:sessionId" component={App} />

  <Route component={FourOhFour} /> */

const Router = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;
