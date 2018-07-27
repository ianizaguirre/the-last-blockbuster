import { createStore, combineReducers } from 'redux';
// import thunk from 'redux-thunk';

import { searchTerm, movieDetailsFullView } from './reducers/search';
import currentMenuTerm from './reducers/menu';

// ==================
const rootReducer = combineReducers({
  searchTerm,
  currentMenuTerm,
  movieDetailsFullView
});
// ==================

/* eslint-disable no-underscore-dangle */
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */

export default store;
