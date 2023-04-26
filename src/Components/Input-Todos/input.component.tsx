import React, {ChangeEvent, HtmlHTMLAttributes, useState} from "react";
import {useDispatch, useSelector} from 'react-redux'; 
import styled from "styled-components";
import { selectTodos, selectTodoReducer } from "../../Store/Todo/Todo.selector";
import { addTodo } from "../../Store/Todo/Todo.action";

export type Todo = {
    title: string;
    description: string;
    dateCreated?: Date; 
}; 

const InputContainer = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: column;
`

const TodoInput = styled.input `
    width: 500px;
    border-radius: 5px;
    border: none;
    text-align: center;
    align-self: center;
    border: 2px solid #4ad1c4; 
    height: 50px;
`

const TodoDescription = styled.textarea `
    width: 500px;
    margin-top: 1rem;
    height: 100px;
    align-self: center;
    border: 2px solid #4ad1c4; 
   ::placeholder {
    font-family: Helvetica Neue;
   }
`


const AddTodoButton = styled.button `
    cursor: pointer;
    border-radius: 10px;
    font-size: 20px;
    border: none;
    width: 100px;
    align-self: center;
    height: 50px;
    margin-left: 10px;
    transition: 0.3s ease;
    margin-top: 10px;
   background-color: #4ad1c4;;
    &:hover {
        background-color: #91efe6;
    }
`
const defaultTodoValue: Todo = {
    title: '',
    description: '', 
}; 

const Input = () => {
    const dispatch = useDispatch(); 

    const [toDo, setTodo] = useState<Todo>(defaultTodoValue); 

    const currentTodos = useSelector(selectTodoReducer); 
  
    const addNewTodo = () => dispatch(addTodo(currentTodos.currentTodos, toDo))

    const handleChange = (e: ChangeEvent <HTMLTextAreaElement | HTMLInputElement>) => {
        const { name, value } = e.target;
        setTodo({ ...toDo, [name]: value });
      };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault(); 
        console.log(toDo)
    }
console.log('currentTodos', currentTodos)
    return (
     <InputContainer>
<TodoInput onChange={handleChange} name='title' type='text' placeholder='Todo Title...' />
<TodoDescription onChange={handleChange} name="description" placeholder="Todo Description..." /> 
<AddTodoButton onClick={addNewTodo} type="submit">Create</AddTodoButton>

     </InputContainer>
    ); 
}; 

export default Input; 