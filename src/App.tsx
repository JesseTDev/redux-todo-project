import React from "react";

// Imported Components
import Title from "./Components/shared-components/title.component";
import Input from "./Components/Todos/components/createTodo.component";
import styled from "styled-components";
import User from "./Components/User/user.component";
import RenderedTodos from "./Components/Todos/components/rendered-todos.component";


const AppContainer = styled.div``;

// Make Create and Add Default buttons on same line 
// Create Divider Line 
// Make the search Todos the same typography as main title 
// Rename main title Create Todo


const App = () => {
  return (
    <AppContainer>
      <Title />
      <User />
      <Input />
      <RenderedTodos />
    </AppContainer>
  );
};

export default App;
