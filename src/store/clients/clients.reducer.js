import * as actionTypes from "./clients.constans";
import { initialState } from "./clients.initial";

export function clientReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_CLIENT: {
      const clientsLen = state.clients.length;
      const lastId = clientsLen > 0 ? state.clients[clientsLen].id + 1 : 1;
      const newclient = { ...action.payload, id: lastId };
      return { clients: [...state.clients, newclient] };
    }
    case actionTypes.DELETE_CLIENT:
      return {
        clients: state.clients.filter((item) => item.id !== action.payload.id),
      };

    case actionTypes.EDIT_CLIENT: {
      const clientIndex = state.clients.findIndex(
        (item) => item.id === action.payload.id
      );
      const clientsList = [...state.clients];
      clientsList[clientIndex] = action.payload;
      return { clients: clientsList };
    }
    default:
      return state;
  }
}
