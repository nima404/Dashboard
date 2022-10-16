import { combineReducers } from "redux";
import { clientReducer } from "./clients/clients.reducer";
import { newClientReducer } from "./newClient/newClient.reducer";

export const reducers = combineReducers({
  client: clientReducer,
  newClient: newClientReducer,
});
