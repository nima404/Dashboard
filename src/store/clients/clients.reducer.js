import * as actionTypes from "./clients.constans";
import { initialState } from "./clients.initial";

export function clientReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_CLIENT: {
      const clientsLen = state.clients.length;
      const lastId = clientsLen > 0 ? state.clients[clientsLen - 1].id + 1 : 1;
      const age = calculateAge(action.payload.birthdate);
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

      const age = calculateAge(action.payload.birthdate);

      const clientsList = [...state.clients];

      clientsList[clientIndex] = { ...action.payload, age };

      return { ...state, clients: clientsList };

    }

    default:
      
    return state;

  }

}
function calculateAge(birthdate) {
  const nowDate = new Date();
  const birthdateTime = new Date(birthdate);
  const difference = nowDate - birthdateTime;
  const age = Math.floor(difference / (1000 * 60 * 60 * 24 * 365)) || "";
  return age;
}
