import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import CustomButton from "../shared-components/button.component";
import StyledInput from "../shared-components/input.component";
import { addUsername } from "../../Store/User/User.action";

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
    const dispatch = useDispatch(); 

    const [username, setUsername] = useState(''); 

    const usernameUpdate = () => dispatch(addUsername(username));

    const updateUsername = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };
  
    return (
        <UserContainer>
            <h3>Retrieve User Todos:</h3>
            <StyledInput onChange={updateUsername} type='text' placeholder='Enter Username...' name='' />
            <CustomButton onClick={usernameUpdate} buttonText="Update Username" />
         </UserContainer>
    );
};

export default User;