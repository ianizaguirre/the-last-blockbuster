import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import currentMenuTerm from './reducers/menu';
import { searchTerm, movieFullView } from './reducers/search';

// ==================
const rootReducer = combineReducers({
  searchTerm,
  currentMenuTerm,
  movieFullView
});
// ==================

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);
/* eslint-enable */

export default store;
