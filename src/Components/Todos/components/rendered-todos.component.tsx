import React, { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Select from "../select.component";
import { Todo } from "./createTodo.component";
import RenderedTodo from "./rendered-todo.component";
import Search from "./search.component";
import { URGENCY_OPTIONS } from "../../Todos/components/createTodo.component";
import CustomButton from "../../shared-components/button.component";


const RenderedTodosContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const FilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 300px;
  align-items: center;
  text-align: center;
  margin: auto;
`;

const ButtonContainer = styled.div `
  width: 100%;
  display: flex;
  align-items: center;
  button {
    font-size: 15px;
    width: 150px;
    height: 60px;
    margin: 5px;
  }
`; 

const RenderedTodos = () => {

  const [searchField, setSearchField] = useState<string | null>('');
  const [urgencySelect, setUregencySelect] = useState('');

  const currentState = useSelector((state: any) => state.todos.currentTodos);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchField(e.target.value.toLocaleLowerCase());
  };

  const handleUrgencySelectChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { value } = e.target;

    setUregencySelect(value)
  };


  return (
    <RenderedTodosContainer>
      <Search onChange={onSearchChange} label='Search Todos' />
      <FilterWrapper>
        <Select onChange={handleUrgencySelectChange} label="Filter by Uregency" options={URGENCY_OPTIONS}  />
        <ButtonContainer>
        <CustomButton buttonText="Sort by newest" />
        <CustomButton buttonText="Sort by oldest" />
        </ButtonContainer>
      </FilterWrapper>
      {currentState.filter((todo: Todo) => {
        return todo.title.toLocaleLowerCase().includes(searchField || '')
      }).map((todo: Todo) => <RenderedTodo key={todo.title} todo={todo} />)}
    </RenderedTodosContainer>
  );
};

export default RenderedTodos; 