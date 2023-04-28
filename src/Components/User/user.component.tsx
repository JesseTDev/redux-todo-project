import React from "react";
import styled from "styled-components";
import CustomButton from "../shared-components/button.component";

const UserContainer = styled.div `
    color: white;
    display: flex;
    justify-content: center;
    margin: 1rem;
    align-items: center;
    input {
        border: none;
        border-radius: 5px;
        margin: 1rem;
        text-align: center;
        height: 30px;
    }
    button {
        font-size: 15px;
        align-self: center;
    }
`;

const User = () => {
    return (
        <UserContainer>
            <h3>Retrieve User Todos:</h3>
            <input type='text' placeholder='Enter Username...' />
            <CustomButton buttonText="Retrieve Todo" />
         </UserContainer>
    );
};

export default User;