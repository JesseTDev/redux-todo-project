import React from "react";
import styled from "styled-components";

type TitleProps = {
  title: string; 
};


const TitleContainer = styled.div `
   display: flex;
   justify-content: center;
   color: white;
`; 

const Title = (props: TitleProps) => {
   const {title} = props; 

 return (
   <TitleContainer>
<h1>{title}</h1>
</TitleContainer>
 );
}; 

export default Title; 