import React from "react";
import styled from "styled-components";


const TitleContainer = styled.div `
   display: flex;
   justify-content: center;
   color: white;
`

const Title: React.FC = () => {

 return (
   <TitleContainer>
<h1>Todo Redux App</h1>
</TitleContainer>
 );
}; 

export default Title; 