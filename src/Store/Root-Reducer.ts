import { combineReducers } from "redux";
import { toDoReducer } from "./Todo/Todo.reducer";
import { UserReducer } from "./User/User.reducer";

export const rootReducer = combineReducers({
  todos: toDoReducer,
  user: UserReducer
});
