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

function filterOutCertification(getReleaseDates) {
  // Retrieve array holding ALL "U.S." Objects which then gets Release Dates Array of Objects
  const isoUS = getReleaseDates.filter(item => item.iso_3166_1 === 'US')[0].release_dates;

  const typeTheatrical = isoUS.filter(item => item.type === 3)[0];

  const movieCertification = typeTheatrical.certification;

  return movieCertification;
}

export function getMovieCertification(id) {
  return dispatch => {
    APIConnect.getMovieCertification(id).then(response => {
      dispatch({
        type: GET_MOVIE_CERTIFICATION,
        payload: filterOutCertification(response.results)
      });
    });
  };
}
