import { createSelector } from "reselect";
import { InitialState } from "../Store";


export const selectTodoReducer = (state: InitialState) => state.currentTodos;

export const selectTodos = createSelector(
  [selectTodoReducer],
  (todos: any) => todos
);
