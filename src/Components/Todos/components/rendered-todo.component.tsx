import React from "react";
import styled from "styled-components";
import CustomButton from "../../shared-components/button.component";
import { Todo } from "./createTodo.component";
import dayjs from "dayjs"; 
import { removeTodoFromList } from "../../../Store/Todo/Todo.action";
import { useDispatch, useSelector } from "react-redux";

type RenderedTodoProps = {
    todo: Todo; 
}

const RenderedTodoContainer = styled.div `
    color: white;
    display: flex;
    justify-content: center;
`

const InnerContainer = styled.div `
    border: 1px solid #4ad1c4;
    border-radius: 10px; 
    width: 500px;
    height: 60%;
    margin: 1.5rem;
    text-align: center;
    padding: 24px;
    h3 {
        text-decoration: underline;
    }
`


const RenderedTodo = (props: RenderedTodoProps) => {
    const {title, description, dateCreated} = props.todo; 

    const dispatch = useDispatch(); 
    const currentState = useSelector((state: any) => state.todos.currentTodos);
    const removeTodo = () => dispatch(removeTodoFromList(currentState, props.todo));

    return (
      <RenderedTodoContainer>
            <InnerContainer>
        <h3>{title}</h3>
        <p>{dayjs(dateCreated).format('DD/MM/YYYY')}</p>
        <p>{description}</p>
       <CustomButton onClick={removeTodo} buttonText="Delete Todo" />
            </InnerContainer>
      </RenderedTodoContainer>
    );
};

export default RenderedTodo; 