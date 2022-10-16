import { ADD_CLIENT, DELETE_CLIENT, EDIT_CLIENT } from "./clients.constans";

export const addClient = (obj) => {
  return {
    type: ADD_CLIENT,
    payload: obj,
  };
};

export const deleteClient = () => {
  return {
    type: DELETE_CLIENT,
  };
};

export const editClient = () => {
  return {
    type: EDIT_CLIENT,
  };
};
