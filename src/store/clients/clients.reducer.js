import { ADD_CLIENT, DELETE_CLIENT, EDIT_CLIENT } from "./clients.constans";
import { initialState } from "./clients.initial";

export function clientReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_CLIENT:

        case DELETE_CLIENT:

        case EDIT_CLIENT:

        default:
            break;
    }
    return state;
}