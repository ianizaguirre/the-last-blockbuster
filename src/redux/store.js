import { createStore, combineReducers } from 'redux';
// import thunk from 'redux-thunk';

import searchTerm from './reducers/search';

// ==================
const rootReducer = combineReducers({
  searchTerm
});
// ==================

/* eslint-disable no-underscore-dangle */
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */

export default store;
