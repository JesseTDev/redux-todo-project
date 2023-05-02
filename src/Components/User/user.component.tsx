import React from "react";
import styled from "styled-components";
import CustomButton from "../shared-components/button.component";
import StyledInput from "../shared-components/input.component";

const UserContainer = styled.div `
    color: white;
    display: flex;
    justify-content: center;
    margin: 1rem;
    align-items: center;
    input {
        border: none;
        border-radius: 5px;
        align-self: center;
        margin: 1rem;
        text-align: center;
        height: 40px;
        width: 180px;
    }
    button {
        font-size: 15px;
        height: 43px;
        width: 150px;
        margin: 5px;
        align-self: center;
    }
`;

const User = () => {
    return (
        <UserContainer>
            <h3>Retrieve User Todos:</h3>
            <StyledInput onChange={() => {}} type='text' placeholder='Enter Username...' name='' />
            <CustomButton buttonText="Retrieve Todo" />
         </UserContainer>
    );
};

export default User;