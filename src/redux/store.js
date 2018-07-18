import { createStore, combineReducers } from 'redux';
// import thunk from 'redux-thunk';

import searchTerm from './reducers/search';

// ==================
const rootReducer = combineReducers({
  searchTerm
});
// ==================

const store = createStore(rootReducer);

export default store;
