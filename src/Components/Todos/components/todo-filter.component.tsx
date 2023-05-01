import React from "react";
import styled from "styled-components";
import StyledInput from "../../shared-components/input.component";

const TodoFilterContainer = styled.div `
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
color: white;
`; 

const TodoFilter = () => {
    return (
        <TodoFilterContainer>
            <h3>Search Todo's:</h3>
            <StyledInput onChange={() => {}} type='text' placeholder="Search Todos Here..." name=""/> 

        </TodoFilterContainer>
    )
};

export default TodoFilter; 