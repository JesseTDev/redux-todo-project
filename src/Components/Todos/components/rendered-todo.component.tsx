import React from "react";
import styled from "styled-components";
import CustomButton from "../../shared-components/button.component";
import { Todo } from "./createTodo.component";
import dayjs from "dayjs"; 
import { removeTodoFromList } from "../../../Store/Todo/Todo.action";
import { useDispatch, useSelector } from "react-redux";
import { Chip } from "@mui/material";


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
    display: flex;
    flex-direction: column;
    margin: 1.5rem;
    text-align: center;
    padding: 24px;
    h3 {
        text-decoration: underline;
    }
    button {
        background-color: #e23c3c;
        color: white;
        width: 150px;
        &:hover {
            background-color: #d66363;
        }
    }
`; 

const UrgencyContainer = styled.div `
    width: 30%;
    align-self: center;
    display: flex;
    align-items: center;
    margin: 24px;
    h4 {
        margin: 8px;
    }
`;


const RenderedTodo = (props: RenderedTodoProps) => {
    const {title, description, dateCreated, urgency} = props.todo; 

    const dispatch = useDispatch(); 
    const currentState = useSelector((state: any) => state.todos.currentTodos);
    const removeTodo = () => dispatch(removeTodoFromList(currentState, props.todo));

    return (
      <RenderedTodoContainer>
            <InnerContainer>
        <h3>{title}</h3>
        <p>{dayjs(dateCreated).format('DD/MM/YYYY')}</p>
        <p>{description}</p>
        <UrgencyContainer>
        <h4>Urgency: </h4>
        <Chip color={urgency === 'High' ? 'error' : urgency === 'Medium' ? 'warning' : 'info'} label={urgency} /> 
        </UrgencyContainer>
       <CustomButton onClick={removeTodo} buttonText="Delete Todo" />
            </InnerContainer>
      </RenderedTodoContainer>
    );
};

export default RenderedTodo; 