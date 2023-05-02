import React, { ChangeEvent } from "react";
import styled from "styled-components";
import StyledInput from "../../shared-components/input.component";

type SearchProps = {
    label: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void; 
}; 


const TodoFilterContainer = styled.div `
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
color: white;
`; 

const Search = (props: SearchProps) => {
    const {label, onChange} = props; 

    return (
        <TodoFilterContainer>
            <h3>{label}</h3>
            <StyledInput onChange={onChange} type='search' placeholder={label} /> 

        </TodoFilterContainer>
    )
};

export default Search; 