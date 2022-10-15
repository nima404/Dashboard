import * as actionTypes from "./clients.constans";
import { initialState } from "./clients.initial";

export function clientReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_CLIENT:
    case actionTypes.DELETE_CLIENT:
    case actionTypes.EDIT_CLIENT:

    default:
      break;
  }
  return state;
}
