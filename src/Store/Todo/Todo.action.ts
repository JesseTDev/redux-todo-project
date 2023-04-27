import { Todo } from "../../Components/Input-Todos/input.component";
import { TODO_ACTION_TYPES } from "./Todo.Types";
export const createAction = (type: string, payload: any) => ({ type, payload });

const addNewTodo = (todos: Array<Todo>, todoToAdd: Todo) => {
  return [...todos, todoToAdd];
};

export const addTodo = (todos: Array<Todo>, todoToAdd: Todo) => {
  const newTodos = addNewTodo(todos, todoToAdd);

  return createAction(TODO_ACTION_TYPES.SET_TODOS, newTodos);
};
