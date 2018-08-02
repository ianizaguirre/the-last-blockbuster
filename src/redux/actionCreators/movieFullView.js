import { GET_MOVIE_DETAILS } from './../actions';
import APIConnect from './../../services/api-connect';

export default function getMovieDetails(id) {
  return dispatch => {
    APIConnect.getMovieDetails(id).then(response => {
      dispatch({
        type: GET_MOVIE_DETAILS,
        payload: response
      });
    });
  };
}
