import * as newClientActionType from "./newClient.constants";
import { newClientinitialState } from "./newClient.initial";

export function newClientReducer(state = newClientinitialState, action) {
  switch (action.type) {
    case newClientActionType.EDIT_NEW_CLIENT:
      return { ...state, ...action.payload };
    case newClientActionType.CLEAR_CLIENT:
      return newClientinitialState;
    default:
      return state;
  }
}
