import * as actionTypes from "./clients.constans";
import { initialState } from "./clients.initial";

export function clientReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_CLIENT: {
      const clientsLen = state.clients.length;
      const lastId = clientsLen > 0 ? state.clients[clientsLen - 1].id + 1 : 1;
      const nowDate = new Date();
      const birthdate = new Date(action.payload.birthdate);
      const difference = nowDate - birthdate;
      let age = Math.floor(difference / (1000 * 60 * 60 * 24 * 365)) || "";
      const newclient = { ...action.payload, age, id: lastId };
      return { ...state, clients: [...state.clients, newclient] };
    }
    case actionTypes.DELETE_CLIENT:
      return {
        ...state,
        clients: state.clients.filter((item) => item.id !== action.payload.id),
      };

    case actionTypes.EDIT_CLIENT: {
      const clientIndex = state.clients.findIndex(
        (item) => item.id === action.payload.id
      );
      const clientsList = [...state.clients];
      clientsList[clientIndex] = action.payload;
      return { ...state, clients: clientsList };
    }
    default:
      return state;
  }
}
