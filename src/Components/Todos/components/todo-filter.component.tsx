import React from "react";
import styled from "styled-components";

const TodoFilterContainer = styled.div `
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
color: white;
    input {
        width: 500px;
  border-radius: 5px;
  border: none;
  text-align: center;
  align-self: center;
  border: 2px solid #4ad1c4;
  height: 50px;
    }
`; 

const TodoFilter = () => {
    return (
        <TodoFilterContainer>
            <h3>Search Todo's:</h3>
            <input type='text' placeholder="Search Todos Here..."/> 
        </TodoFilterContainer>
    )
};

export default TodoFilter; 