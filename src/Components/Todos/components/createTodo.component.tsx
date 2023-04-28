import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../../../Store/Todo/Todo.action";
import CustomButton from "../../shared-components/button.component";


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

const TodoInput = styled.input`
  width: 500px;
  border-radius: 5px;
  border: none;
  text-align: center;
  align-self: center;
  border: 2px solid #4ad1c4;
  height: 50px;
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

const TextError = styled.p `
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

  const [toDo, setTodo] = useState<Todo>(defaultTodoValue);
  const [errorState, setErrorState] = useState<boolean>(false);

  const currentState = useSelector((state: any) => state.todos.currentTodos);

  const addNewTodo = () => {

      const doesTitleExistCheck = currentState.filter((todo: Todo) => todo.title === toDo.title)


      if (doesTitleExistCheck.length > 0) {
        setErrorState(true); 
        setTimeout(() => {
          setErrorState(false)
        }, 3000); 

        return 
      }
    dispatch(addTodo(currentState, toDo));
}; 


  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setTodo({ ...toDo, [name]: value, dateCreated: new Date() });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(toDo);
  };

  console.log('state', currentState)
  return (
    <InputContainer>
      <TodoInput
        onChange={handleChange}
        name="title"
        type="text"
        placeholder="Todo Title..."
      />
      {errorState && <TextError>Title Already Exists! Please try another.</TextError>}
      <TodoDescription
        onChange={handleChange}

         name="description"
        placeholder="Todo Description..."
      />
      <CustomButton onClick={addNewTodo} buttonText="Create" />
    </InputContainer>
  );
};

export default Input;
