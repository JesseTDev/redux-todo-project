import React, { ChangeEvent } from "react";
import styled from "styled-components";

type StyledInputProps = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void; 
    name?: string; 
    type: string; 
    placeholder: string; 
}; 


const Input = styled.input<StyledInputProps>`
  width: 500px;
  border-radius: 5px;
  border: none;
  text-align: center;
  align-self: center;
  border: 2px solid #4ad1c4;
  height: 50px;
`;

const  StyledInput = (props: StyledInputProps) => {
    const {onChange, name, type, placeholder} = props; 
    return (
<Input onChange={onChange} name={name} type={type}  placeholder={placeholder}/> 
    ); 
}; 

export default StyledInput; 