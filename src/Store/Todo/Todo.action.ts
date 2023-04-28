import { Todo } from "../../Components/Todos/components/createTodo.component";
import { TODO_ACTION_TYPES } from "./Todo.Types";
export const createAction = (type: string, payload: any) => ({ type, payload });

const addNewTodo = (todos: Array<Todo>, todoToAdd: Todo) => {
  return [...todos, todoToAdd];
};

const removeTodo = (todos: Array<Todo>, todoToRemove: Todo) => {
  const filteredTodos = todos.filter((todo: Todo) => todo.title !== todoToRemove.title)
  return filteredTodos
}; 



export const addTodo = (todos: Array<Todo>, todoToAdd: Todo) => {
  const newTodos = addNewTodo(todos, todoToAdd);
  return createAction(TODO_ACTION_TYPES.SET_TODOS, newTodos);
};


export const removeTodoFromList = (todos: Array<Todo>, todoToAdd: Todo) => {
  const newTodos = removeTodo(todos, todoToAdd);
  return createAction(TODO_ACTION_TYPES.SET_TODOS, newTodos);
};
