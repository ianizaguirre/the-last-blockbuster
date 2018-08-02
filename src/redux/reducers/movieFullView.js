import { GET_MOVIE_DETAILS } from './../actions';

// ==== movieFullView Object Root - nested values ===
const initialState = {
  detailsPageIsOpen: false,
  details: {}
};

const movieFullView = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_DETAILS:
      return {
        ...state,
        detailsPageIsOpen: !state.detailsPageIsOpen,
        details: action.payload
      };
    default:
      return state;
  }
};

export default movieFullView;
