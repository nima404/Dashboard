import * as actionTypes from "./clients.constans";
import { initialState } from "./clients.initial";

export function clientReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_CLIENTS:
      return {
        ...state,
        clients: action.payload,
        filteredClients: action.payload,
      };

    case actionTypes.ADD_CLIENT: {
      // const clientsLen = state.clients.length;
      // const lastId = clientsLen > 0 ? state.clients[clientsLen - 1].id + 1 : 1;
      // const age = calculateAge(action.payload.birthday);
      const newclient = { ...action.payload };
      return {
        clients: [...state.clients, newclient],
        filteredClients: [...state.clients, newclient],
      };
    }
    case actionTypes.DELETE_CLIENT:
      const newClientList = state.clients.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        clients: newClientList,
        filteredClients: newClientList,
      };

    case actionTypes.EDIT_CLIENT: {
      const clientIndex = state.clients.findIndex(
        (item) => item.id === action.payload.id
      );

      // const age = calculateAge(action.payload.birthday);

      const clientsList = [...state.clients];

      clientsList[clientIndex] = { ...action.payload };

      return { clients: clientsList, filteredClients: clientsList };
    }
    case actionTypes.SET_FILTERED: {
      return { ...state, filteredClients: action.payload };
    }
    default:
      return state;
  }
}
export function calculateAge(birthday) {
  const nowDate = new Date();
  const birthdateTime = new Date(birthday);
  const difference = nowDate - birthdateTime;
  const age = Math.floor(difference / (1000 * 60 * 60 * 24 * 365)) || "";
  return age;
}
