import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../../../Store/Todo/Todo.action";
import CustomButton from "../../shared-components/button.component";
import StyledInput from "../../shared-components/input.component";
import Select from "../select.component";
import { addDefaultTodos } from "../../../Store/Todo/Todo.action";
import { DEFAULT_TODOS } from "../../../Store/Todo/Todo.Types";

export type Todo = {
  title: string;
  description: string;
  dateCreated?: Date;
  urgency: string; 
};

export const URGENCY_OPTIONS = [{name: 'Low'}, {name: 'Medium'}, {name: 'High'}]; 

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  hr {
    width: 50%;
    align-self: center;
    margin: 3rem;
  }
`;

const TodoDescription = styled.textarea`
  width: 500px;
  margin-top: 1rem;
  height: 100px;
  align-self: center;
  border: 2px solid #4ad1c4;
  ::placeholder {
    font-family: Helvetica Neue;
  }
`;

const ButtonContainer = styled.div `
  display: flex;
  justify-content: center;
  button{
    width: 170px;
    font-size: 16px;
  }
`;

const TextError = styled.p`
  text-align: center;
  color: red;
  padding: 5px;
`; 


const defaultTodoValue: Todo = {
  title: "",
  description: "",
  urgency: ""
};

const Input = () => {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState<Todo>(defaultTodoValue);
  const [isError, setIsError] = useState(false); 
  const [errorState, setErrorState] = useState<boolean>(false);
  const [inputTitleError, setInputTitleError] = useState<boolean>(false); 
  const [inputDescError, setInputDescError] = useState<boolean>(false);

  const currentState = useSelector((state: any) => state.todos.currentTodos);

  const addNewTodo = () => {
    let doesTitleExistCheck = currentState.includes((newTodo: Todo) => newTodo.title === todo.title)

    setIsError(!!doesTitleExistCheck); 


      if(isError) {
      setErrorState(true);
      setIsError(false); 
      setTimeout(() => {
        setErrorState(false);
      }, 3000);

      return
    }
    dispatch(addTodo(currentState, todo));
  };

  const addNewDefaultTodos = () => dispatch(addDefaultTodos(currentState, DEFAULT_TODOS)); 

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value, dateCreated: new Date() });
    if (name === 'description' && value.length >= 300) {
      setInputDescError(true); 
    } else {
      setInputDescError(false); 
    }
    if (name === 'title' && value.length >= 30) {
      setInputTitleError(true); 
    } else {
      setInputTitleError(false); 
    }
  };

  return (
    <InputContainer>
      <StyledInput
        onChange={handleChange}
        name="title"
        type="text"
        placeholder="Todo Title..."
      />
      {inputTitleError && <TextError>Maximum character limit (30) reached for Todo Title!</TextError>}
      {errorState && <TextError>Title Already Exists! Please try another.</TextError>}
      <TodoDescription
        onChange={handleChange}
        name="description"
        placeholder="Todo Description..."
      />
      {inputDescError && <TextError>Maximum character limit (300) reached for Todo description!</TextError>}
      <Select onChange={handleChange} name="urgency" options={URGENCY_OPTIONS} label="Urgency" />
      <ButtonContainer>
      <CustomButton onClick={addNewTodo} buttonText="Create" />
      <CustomButton onClick={addNewDefaultTodos} buttonText='Add Default Todos' /> 
      </ButtonContainer>
      <hr /> 
    </InputContainer>
  );
};

export default Input;
