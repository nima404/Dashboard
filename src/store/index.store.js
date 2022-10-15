import { createStore } from "redux";
import { reducers } from "./reducers.clients";

export const store = createStore(reducers)