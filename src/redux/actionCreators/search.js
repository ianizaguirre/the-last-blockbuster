import { SET_SEARCH_TERM, ADD_API_DATA } from './../actions';

export function setSearchTerm(searchTerm) {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}

export function addAPIData(apiData) {
  return { type: ADD_API_DATA, payload: apiData };
}
