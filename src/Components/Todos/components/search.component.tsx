import React, { ChangeEvent } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import StyledInput from "../../shared-components/input.component";
import Title from "../../shared-components/title.component";


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
h2 {
    font-size: 35px;
}
`; 

const Search = (props: SearchProps) => {
    const {label, onChange} = props; 


const currentUsername = useSelector((state: any) => state.user.name);

    return (
        <TodoFilterContainer>
            <Title title={currentUsername ? `Search ${currentUsername} Todo's` : "Search Todo's" } />
            <StyledInput onChange={onChange} type='search' placeholder={label} /> 
        </TodoFilterContainer>
    ); 
};

export default Search; 