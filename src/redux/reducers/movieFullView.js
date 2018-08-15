import { GET_MOVIE_DETAILS, GET_MOVIE_CERTIFICATION } from './../actions';

// ==== movieFullView Object Root - nested values ===
const initialState = {
  detailsPageIsOpen: false,
  details: {},
  certification: []
};

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
        certification: action.payload
      };
    default:
      return state;
  }
};

export default movieFullView;
