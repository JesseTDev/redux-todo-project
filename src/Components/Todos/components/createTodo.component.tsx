import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../../../Store/Todo/Todo.action";
import CustomButton from "../../shared-components/button.component";
import StyledInput from "../../shared-components/input.component";


export type Todo = {
  title: string;
  description: string;
  dateCreated?: Date;
};

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
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

const TextError = styled.p`
  text-align: center;
  color: red;
  padding: 5px;
`


const defaultTodoValue: Todo = {
  title: "",
  description: "",
};

const Input = () => {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState<Todo>(defaultTodoValue);
  const [errorState, setErrorState] = useState<boolean>(false);
  const [inputTitleError, setInputTitleError] = useState<boolean>(false); 
  const [inputDescError, setInputDescError] = useState<boolean>(false);

  const currentState = useSelector((state: any) => state.todos.currentTodos);

  const addNewTodo = () => {

    const doesTitleExistCheck = currentState.filter((todo: Todo) => todo.title === todo.title)


    if (doesTitleExistCheck.length > 0) {
      setErrorState(true);
      setTimeout(() => {
        setErrorState(false)
      }, 3000);

      return
    }
    dispatch(addTodo(currentState, todo));
  };


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
      <CustomButton onClick={addNewTodo} buttonText="Create" />
    </InputContainer>
  );
};

export default Input;
