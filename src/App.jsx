import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './components/Landing';
// import App from '../containers/App';
// import FourOhFour from './FourOhFour';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
