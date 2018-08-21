import { SET_SEARCH_TERM, ADD_API_DATA, GET_MOVIES_IN_THEATERS, INCREMENT } from './../actions';
import APIConnect from './../../services/api-connect';

export function setSearchTerm(searchTerm) {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}

export function addAPIData(apiData) {
  return { type: ADD_API_DATA, payload: apiData };
}

export function getCurrentPageNumber(incPageNumber) {
  return { type: INCREMENT, payload: incPageNumber };
}

export function getMoviesInTheaters(currentPageNumber = 2) {
  console.log('------- currentPageNumber  🔥 🔥 🔥 🔥  ==>', currentPageNumber);
  return dispatch => {
    APIConnect.getNowPlaying(currentPageNumber).then(response => {
      console.log('----This is the pageNumber ==> ', response.page);
      console.log('======== getNowPlaying() RESPONSE in actionCreators =====>');
      console.log(response);
      dispatch({
        type: GET_MOVIES_IN_THEATERS,
        payload: response.results
      });
    });
  };
}
