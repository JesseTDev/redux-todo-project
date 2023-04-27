import React from "react";

// Imported Components
import Title from "./Components/Title/title.component";
import Input from "./Components/Input-Todos/input.component";
import styled from "styled-components";

const AppContainer = styled.div``;

const App: React.FC = () => {
  return (
    <AppContainer>
      <Title />
      <Input />
    </AppContainer>
  );
};

export default App;
