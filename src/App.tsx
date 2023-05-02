import React from "react";

// Imported Components
import Title from "./Components/shared-components/title.component";
import Input from "./Components/Todos/components/createTodo.component";
import styled from "styled-components";
import User from "./Components/User/user.component";
import RenderedTodos from "./Components/Todos/components/rendered-todos.component";


const AppContainer = styled.div`
h1 {
  text-decoration: underline;
}
`;

const App = () => {
  return (
    <AppContainer>
      <Title title="Redux Todo App" />
      <User />
      <Input />
      <RenderedTodos />
    </AppContainer>
  );
};

export default App;
