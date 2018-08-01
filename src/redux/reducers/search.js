// @flow
import { SET_SEARCH_TERM, GET_MOVIES_IN_THEATERS, GET_MOVIE_DETAILS } from './../actions';

export const searchTerm = (state = '', action: Action) => {
  if (action.type === SET_SEARCH_TERM) {
    return action.payload;
  }
  return state;
};

// ==== movies Object Root - nested values ===
const initialMoviesState = {
  initialLoad: []
};

export const movies = (state = initialMoviesState, action) => {
  switch (action.type) {
    case GET_MOVIES_IN_THEATERS:
      return {
        ...state,
        initialLoad: action.payload
      };
    default:
      return state;
  }
};

// ==== movieFullView Object Root - nested values ===
const initialState = {
  detailsPageIsOpen: false,
  details: {}
};

export const movieFullView = (state = initialState, action) => {
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
