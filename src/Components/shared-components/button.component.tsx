import React from "react";
import styled from "styled-components";

type ButtonProps = {
    buttonText: string; 
    onClick?: () => void; 
}

const StyledButton = styled.button`
  cursor: pointer;
  border-radius: 10px;
  font-size: 20px;
  border: none;
  width: 100px;
  align-self: center;
  height: 50px;
  color: #383737;
  margin-left: 10px;
  transition: 0.3s ease;
  margin-top: 10px;
  background-color: #4ad1c4;
  &:hover {
    background-color: #91efe6;
  }
  &:active {
    background-color: #199f92;
  }
`;

const CustomButton = (props: ButtonProps) => {
    const {buttonText, onClick} = props; 

    return (
        <StyledButton onClick={onClick}>{buttonText}</StyledButton>
    );
};

export default CustomButton; 