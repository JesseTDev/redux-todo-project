import {createSelector} from 'reselect'
import { InitialState } from './Todo.reducer';

export const selectTodoReducer = (state: InitialState) => state;  

export const selectTodos = createSelector (
[selectTodoReducer], 
(todos: any) => todos
); 