import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from "styled-components";

const Container = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;
`
const InnerContainer = styled.div `
    width: 500px;
    margin: 1.5rem;
    display: flex;
    justify-content: center;
`

const TodoUregency = () => {
    return (
        <Container>
            <InnerContainer>
            <FormControl sx={{ m: 1, minWidth: 505, backgroundColor: 'whitesmoke'}}>
        <InputLabel id="demo-simple-select-helper-label">Todo Urgency</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
        //   value={age}
          label="Urgency"
        //   onChange={handleChange}
        >
          <MenuItem value="">
            <em>Urgency:</em>
          </MenuItem>
          <MenuItem value={10}>High</MenuItem>
          <MenuItem value={20}>Medium</MenuItem>
          <MenuItem value={30}>Low</MenuItem>
        </Select>
      </FormControl>
      </InnerContainer>
      </Container>
    );
}; 

export default TodoUregency; 