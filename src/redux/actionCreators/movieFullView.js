import { GET_MOVIE_DETAILS, GET_MOVIE_CERTIFICATION } from './../actions';
import APIConnect from './../../services/api-connect';

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

// Change to  payload: response.US.certification ??
export function getMovieCertification(id) {
  return dispatch => {
    APIConnect.getMovieCertification(id).then(response => {
      dispatch({
        type: GET_MOVIE_CERTIFICATION,
        payload: response.results
      });
    });
  };
}
