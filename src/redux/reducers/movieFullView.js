import { GET_MOVIE_DETAILS, GET_MOVIE_CERTIFICATION } from './../actions';

// ==== movieFullView Object Root - nested values ===
const initialState = {
  detailsPageIsOpen: false,
  details: {},
  certification: {}
};

function filterOutCertification(getReleaseDates) {
  // Retrieve array holding ALL "U.S." Objects which then gets Release Dates Array of Objects
  const isoUS = getReleaseDates.filter(item => item.iso_3166_1 === 'US')[0].release_dates;

  const typeTheatrical = isoUS.filter(item => item.type === 3)[0];

  const movieCertification = typeTheatrical.certification;

  return movieCertification;
}

const movieFullView = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_DETAILS:
      return {
        ...state,
        detailsPageIsOpen: !state.detailsPageIsOpen,
        details: action.payload
      };
    case GET_MOVIE_CERTIFICATION:
      return {
        ...state,
        certification: filterOutCertification(action.payload)
      };
    default:
      return state;
  }
};

export default movieFullView;
