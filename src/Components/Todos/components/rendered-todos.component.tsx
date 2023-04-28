import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Todo } from "./createTodo.component";
import RenderedTodo from "./rendered-todo.component";


const RenderedTodosContainer = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: column;
`

const RenderedTodos: React.FC = () => {

  const currentState = useSelector((state: any) => state.todos.currentTodos);
    
    return (
      <RenderedTodosContainer>
        {currentState.map((todo: Todo) => <RenderedTodo todo={todo}/>)}
      </RenderedTodosContainer>
    ); 
}; 

export default RenderedTodos; 