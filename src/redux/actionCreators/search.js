import { SET_SEARCH_TERM, GET_MOVIES_IN_THEATERS, INCREMENT, DECREMENT } from './../actions';
import APIConnect from './../../services/api-connect';

export function setSearchTerm(searchTerm) {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}

export function getMoviesInTheaters(currentPageNumber = 1) {
  return dispatch => {
    APIConnect.getNowPlaying(currentPageNumber).then(response => {
      console.log(response);

      dispatch({
        type: GET_MOVIES_IN_THEATERS,
        payload: response.results
      });
    });
  };
}

export function incrementPageNumber(pageNumber) {
  // console.log('What is this ', pageNumber);
  return { type: INCREMENT, pageNumber };
}
export function decrementPageNumber(pageNumber) {
  return { type: DECREMENT, pageNumber };
}
