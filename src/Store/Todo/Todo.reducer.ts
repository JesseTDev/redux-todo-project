import { Todo } from "../../Components/Input-Todos/input.component";
import { TODO_ACTION_TYPES } from "./Todo.Types";

export type InitialState = {
    currentTodos: Array<Todo>
}; 

export const toDoInitialState: InitialState = {
    currentTodos: []
}; 

export type Action = {
    type: string;
    payload?: any; 
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

