import {
  ADD_CLIENT,
  DELETE_CLIENT,
  EDIT_CLIENT,
  SET_FILTERED,
} from "./clients.constans";

export const addClient = (obj) => {
  return {
    type: ADD_CLIENT,
    payload: obj,
  };
};

export const deleteClient = (id) => {
  return {
    type: DELETE_CLIENT,
    payload: { id },
  };
};

export const editClient = (obj) => {
  return {
    type: EDIT_CLIENT,
    payload: obj,
  };
};
export const setFiltered = (array) => {
  return {
    type: SET_FILTERED,
    payload: array,
  };
};
