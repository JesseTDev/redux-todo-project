import React, { ChangeEvent } from "react";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import styled from "styled-components";
import { TextField } from "@mui/material";

type SelectOption = {
  name: string; 
};

type SelectProps = {
  label: string; 
  options: Array <SelectOption>; 
  name?: string; 
  onChange: (e: ChangeEvent<HTMLInputElement>) => void; 
  value: string | null; 
}; 

const Container = styled.div `
    display: flex;
    justify-content: center;
`;
const InnerContainer = styled.div `
    margin: 1.5rem;
    display: flex;
    justify-content: center;
`; 

const Select = (props: SelectProps) => {
  const {label, options, name, onChange, value} = props; 
    return (
        <Container>
            <InnerContainer>
            <FormControl sx={{ m: 1, minWidth: 300, backgroundColor: 'whitesmoke'}}>
        <TextField
          select
          onChange={onChange}
          name={name}
          fullWidth
          id="demo-simple-select-helper"
          value={value}
          variant="outlined"
          label={label}
        >
          {options.map((option: SelectOption) =>  <MenuItem value={option.name} key={option.name}>{option.name}</MenuItem>)}
        </TextField>
      </FormControl>
      </InnerContainer>
      </Container>
    );
}; 

export default Select; 