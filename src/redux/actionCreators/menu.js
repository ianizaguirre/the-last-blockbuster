import { GET_CURRENT_MENU_TERM } from './../actions';

export default function getCurrentMenuTerm(menuTerm) {
  return { type: GET_CURRENT_MENU_TERM, payload: menuTerm };
}
