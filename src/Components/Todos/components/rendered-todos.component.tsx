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
  const [urgencySelect, setUregencySelect] = useState<string | null>('');
  const [sortBy, setSortBy] = useState("");

  const currentTodos = useSelector((state: any) => state.todos.currentTodos);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchField(e.target.value.toLocaleLowerCase());
  };

  const handleUrgencySelectChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { value } = e.target;

    setUregencySelect(value)
  };

  const handleSortOldest = () => {
    setSortBy('oldest')
  }; 

  const handleSortNewest = () => {
    setSortBy('newest')
  }; 

  const handleClearFilters = () => {
    setUregencySelect(null); 
  }; 

  return (
    <RenderedTodosContainer>
      <Search onChange={onSearchChange} label='Search Todos' />
      <FilterWrapper>
        <Select value={urgencySelect} onChange={handleUrgencySelectChange} label="Filter by Urgency" options={URGENCY_OPTIONS}  />
        <ButtonContainer>
        <CustomButton onClick={handleSortNewest} buttonText="Sort by newest" />
        <CustomButton onClick={handleSortOldest} buttonText="Sort by oldest" />
        <CustomButton onClick={handleClearFilters} buttonText="Clear Filters" /> 
        </ButtonContainer>
      </FilterWrapper>
      {currentTodos.filter((todo: Todo) => {
        return todo.title.toLocaleLowerCase().includes(searchField || '')
      }).filter((todo: Todo) => {
        return urgencySelect ? todo.urgency === urgencySelect : todo.title.length > 1; 
      }).sort((toDoA: Todo, toDoB: Todo) =>
      sortBy === "newest"
        ? toDoB.dateCreated.getTime() - toDoA.dateCreated.getTime()
        : toDoA.dateCreated.getTime() - toDoB.dateCreated.getTime()
    ).map((todo: Todo) => <RenderedTodo key={todo.title} todo={todo} />)}
    </RenderedTodosContainer>
  );
};

export default RenderedTodos; 