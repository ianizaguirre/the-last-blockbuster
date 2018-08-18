// @flow

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import type { Match } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/store';

import Showcase from './components/Showcase';
import SidePanel from './components/SidePanel';

import Example from './components/Example';
import MoviesInTheaters from './containers/MoviesInTheaters';

import MovieFull from './containers/MovieFull';

// <Route exact path="/" component={App} />;
// <Route exact path="/" component={props => <App routes={routes} {...props} />} />;
// <Route path="/moo" component={MoviesInTheaters} />;

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <h2>Home</h2>,
    sidebar: SidePanel
  },
  {
    path: '/in-theaters',
    main: MoviesInTheaters,
    sidebar: SidePanel
  },
  {
    path: '/example',
    main: () => (
      <div>
        <Example />
      </div>
    ),
    sidebar: SidePanel
  },

  {
    path: '/details/:id',
    main: (props: { match: Match }) => {
      const selectedShow = props.match.params.id;
      return <MovieFull selectedShow={selectedShow} {...props} />;
    },
    sidebar: SidePanel
  }
];

const FourOhFour = () => <h1>404</h1>;

const Router = () => (
  <Provider store={store}>
    <Switch>
      <Route
        exact
        path="/"
        component={props => {
          const handleMain = routes.map(route => (
            <Route key={route.path} path={route.path} exact={route.exact} component={route.main} />
          ));
          const handleSidebar = routes.map(route => (
            <Route key={route.path} path={route.path} exact={route.exact} component={route.sidebar} />
          ));
          return <Showcase mainContent={handleMain} sidePanel={handleSidebar} {...props} />;
        }}
      />;
      <Route component={FourOhFour} />
    </Switch>
  </Provider>
);

export default Router;
