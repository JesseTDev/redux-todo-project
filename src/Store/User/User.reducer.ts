import { InitialState, Action } from "../Store";
import { USER_ACTION_TYPES } from "./User.types"; 

export const toDoInitialState: InitialState = {
    currentTodos: [],
    name: ''
}; 


export const UserReducer = (initialState = toDoInitialState, action: Action) => {
    const { type, payload } = action; 
switch (type) {
    case USER_ACTION_TYPES.SET_USERNAME:
        return {...initialState, name: payload}

    default:
        return initialState
}
}; 