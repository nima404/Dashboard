import { combineReducers } from "redux";
import { clientReducer } from "./clients/clients.reducer";


export const reducers = combineReducers({
    client: clientReducer,
});