import { SET_SEARCH_TERM, GET_MOVIES_IN_THEATERS, INCREMENT } from './../actions';
import APIConnect from './../../services/api-connect';

export function setSearchTerm(searchTerm) {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}

export function getMoviesInTheaters(currentPageNumber = 1) {
  return dispatch => {
    APIConnect.getNowPlaying(currentPageNumber).then(response => {
      dispatch({
        type: GET_MOVIES_IN_THEATERS,
        payload: response.results
      });
    });
  };
}

export function getCurrentPageNumber(pageNumber) {
  // console.log('What is this ', pageNumber);
  return { type: INCREMENT, pageNumber };
}
