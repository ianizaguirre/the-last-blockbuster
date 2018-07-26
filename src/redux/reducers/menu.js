import { GET_CURRENT_MENU_TERM } from './../actions';

// const initialState = {
//   currentMenuTerm: ''
// };

// const currentMenuTerm = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_CURRENT_MENU_TERM:
//       return {
//         currentMenuTerm: action.payload
//       };
//     default:
//       return state;
//   }
// };

const currentMenuTerm = (state = '', action) => {
  if (action.type === GET_CURRENT_MENU_TERM) {
    return action.payload;
  }
  return state;
};

// case GET_CURRENT_MENU_TERM:
//   return Object.assign({}, state, {
//     currentMenuTerm: action.payload
//   });

// const currentMenuTerm = (state = '', action: Action) => {
//   if (action.type === GET_CURRENT_MENU_TERM) {
//     return action.payload;
//   }
//   return state;
// };

// const currentMenuTerm = (state = initialState, action) => {
//   switch (action.type) {

//     case GET_CURRENT_MENU_TERM:
//       return {
//         currentMenuTerm: action.payload
//       };

export default currentMenuTerm;
