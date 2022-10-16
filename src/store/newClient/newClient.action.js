import * as newClientActionType from "./newClient.constants";

export const editNewClient = (obj) => {
  return {
    type: newClientActionType.EDIT_NEW_CLIENT,
    payload: obj,
  };
};

export const clearCLient = () => {
  return {
    type: newClientActionType.CLEAR_CLIENT,
  };
};
