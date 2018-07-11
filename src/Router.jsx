// @flow

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import type { Match } from 'react-router-dom';
import App from './components/App';
import Search from './containers/Search';
import MoviesNowPlaying from './containers/MoviesNowPlaying';
import Details from './components/Details';
import preload from './../data.json';

const FourOhFour = () => <h1>404</h1>;

const Router = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/now" component={MoviesNowPlaying} />
        <Route path="/search" component={props => <Search shows={preload.shows} {...props} />} />
        <Route
          path="/details/:id"
          component={(props: { match: Match }) => {
            const selectedShow = preload.shows.find(show => props.match.params.id === show.imdbID);
            return <Details show={selectedShow} {...props} />;
          }}
        />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;
