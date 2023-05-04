import { legacy_createStore as createStore} from 'redux'
import { rootReducer } from './Root-Reducer'
import { Todo } from '../Components/Todos/components/createTodo.component';

export type InitialState = {
    currentTodos: Array<Todo>
    name: string
}; 

export type Action = {
    type: string;
    payload?: any; 
}; 


export const store = createStore(rootReducer); 