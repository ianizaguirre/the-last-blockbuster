import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';

import currentMenuTerm from './reducers/menu';
import { searchTerm, movies, movieFullView } from './reducers/search';

// ==================
const rootReducer = combineReducers({
  currentMenuTerm,
  searchTerm,
  movies,
  movieFullView
});
// ==================
const enhancers = compose(
  applyMiddleware(thunk),
  /* eslint-disable no-underscore-dangle */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  /* eslint-enable */
);
// ==================
const store = createStore(rootReducer, enhancers);

export default store;
