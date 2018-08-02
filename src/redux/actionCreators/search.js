import { SET_SEARCH_TERM, ADD_API_DATA, GET_MOVIES_IN_THEATERS } from './../actions';
import APIConnect from './../../services/api-connect';

export function setSearchTerm(searchTerm) {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}

export function addAPIData(apiData) {
  return { type: ADD_API_DATA, payload: apiData };
}

export function getMoviesInTheaters() {
  return dispatch => {
    APIConnect.getNowPlaying().then(response => {
      dispatch({
        type: GET_MOVIES_IN_THEATERS,
        payload: response.results
      });
    });
  };
}
