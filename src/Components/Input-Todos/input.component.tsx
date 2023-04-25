import React from "react";
import styled from "styled-components";


const InputContainer = styled.form `
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


const Input: React.FC = () => {

    return (
     <InputContainer>
<TodoInput type='text' placeholder='Todo Title...' />
<TodoDescription placeholder="Todo Description..." /> 
<AddTodoButton type="submit">Create</AddTodoButton>

     </InputContainer>
    ); 
}; 

export default Input; 