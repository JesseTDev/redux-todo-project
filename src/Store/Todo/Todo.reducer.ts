import { Action, InitialState } from "../Store";
import { TODO_ACTION_TYPES } from "./Todo.Types";

export const toDoInitialState: InitialState = {
    currentTodos: [],
    name: ''
}; 

export const toDoReducer = (initialState = toDoInitialState, action: Action) => {
    const { type, payload } = action; 
switch (type) {
    case TODO_ACTION_TYPES.SET_TODOS:
        return {...initialState, currentTodos: payload}

    default:
        return initialState
}
}; 

