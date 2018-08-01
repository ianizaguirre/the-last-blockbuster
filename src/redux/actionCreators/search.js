import { SET_SEARCH_TERM, ADD_API_DATA, GET_MOVIE_DETAILS } from './../actions';
import APIConnect from './../../services/api-connect';

export function setSearchTerm(searchTerm) {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}

export function addAPIData(apiData) {
  return { type: ADD_API_DATA, payload: apiData };
}

export function getMovieDetails(id) {
  return dispatch => {
    APIConnect.getMovieDetails(id).then(response => {
      dispatch({
        type: GET_MOVIE_DETAILS,
        payload: response
      });
    });
  };
}
