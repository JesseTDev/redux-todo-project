import { combineReducers } from "redux";
import { toDoReducer } from "./Todo/Todo.reducer";

export const rootReducer = combineReducers({
  todos: toDoReducer,
});
