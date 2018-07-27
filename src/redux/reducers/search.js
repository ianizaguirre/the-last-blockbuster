// @flow
import { SET_SEARCH_TERM, GET_MOVIE_DETAILS } from './../actions';

// const initialState = {
//   movieDetails: {}
// };

export const searchTerm = (state = '', action: Action) => {
  if (action.type === SET_SEARCH_TERM) {
    return action.payload;
  }
  return state;
};

export const movieDetailsFullView = (state = {}, action) => {
  switch (action.type) {
    case GET_MOVIE_DETAILS:
      return {
        ...state,
        movieDetails: action.payload
      };
    default:
      return state;
  }
};
