import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';

import movieFullView from './reducers/movieFullView';
import currentMenuTerm from './reducers/menu';
import { searchTerm, movies } from './reducers/search';
// ==================
const rootReducer = combineReducers({
  movieFullView,
  currentMenuTerm,
  searchTerm,
  movies
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
