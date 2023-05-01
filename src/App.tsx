import React from "react";

// Imported Components
import Title from "./Components/shared-components/title.component";
import Input from "./Components/Todos/components/createTodo.component";
import styled from "styled-components";
import TodoFilter from "./Components/Todos/components/todo-filter.component";
import User from "./Components/User/user.component";
import RenderedTodos from "./Components/Todos/components/rendered-todos.component";

const AppContainer = styled.div``;

// Make input component reuseable (done)

// Implement a max character amount (30 for title, 300 desc) + show error when they go above  (done)

// Create UI component which allows the user to select the urgency of a todo, three options (low, medium, high)
// Add urgency property to the ToDo type (will be type string)

// Rendered todos render the urgency via a chip component, change colour using styled components  
const App = () => {
  return (
    <AppContainer>
      <Title />
      <User />
      <Input />
      <TodoFilter />
      <RenderedTodos />
    </AppContainer>
  );
};

export default App;
