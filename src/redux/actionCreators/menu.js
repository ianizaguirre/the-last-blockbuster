import { GET_CURRENT_MENU_TERM, ADD_API_DATA } from './../actions';

export function getCurrentMenuTerm(menuTerm) {
  return { type: GET_CURRENT_MENU_TERM, payload: menuTerm };
}
export function addAPIData(apiData) {
  return { type: ADD_API_DATA, payload: apiData };
}
