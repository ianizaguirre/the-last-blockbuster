// @flow
import { SET_SEARCH_TERM, GET_MOVIES_IN_THEATERS, INCREMENT, DECREMENT } from './../actions';

export const searchTerm = (state = '', action: Action) => {
  if (action.type === SET_SEARCH_TERM) {
    return action.payload;
  }
  return state;
};

// ==== movies Object Root - nested values ===
const initialState = {
  initialLoad: [],
  pageNumber: 1
};

export const movies = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_IN_THEATERS:
      return {
        ...state,
        initialLoad: action.payload
      };
    case INCREMENT:
      return {
        ...state,
        pageNumber: state.pageNumber + 1
      };
    case DECREMENT:
      return {
        ...state,
        pageNumber: state.pageNumber - 1
      };
    default:
      return state;
  }
};
