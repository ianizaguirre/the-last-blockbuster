// @flow
import { SET_SEARCH_TERM, GET_MOVIE_DETAILS } from './../actions';

export const searchTerm = (state = '', action: Action) => {
  if (action.type === SET_SEARCH_TERM) {
    return action.payload;
  }
  return state;
};

const initialState = {
  details: {}
};

export const movie = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_DETAILS:
      return {
        ...state,
        details: action.payload
      };
    default:
      return state;
  }
};
