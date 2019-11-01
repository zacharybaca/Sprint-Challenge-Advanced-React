import React from "react";
import styled from 'styled-components';
import useEmail from '../hooks/useemail';


const CustomDiv = styled.div`
  border: 2px solid black;
  background-color: green;
  width: 500px;
`

const CustomParagraph = styled.p`
  border: 1px solid black;
`

const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
`

 const EmailInput = () => {
   const [isValid, onEmailChange] = useEmail();

   return (
     <ContainerDiv>
     <CustomDiv>
       <label htmlFor="email">Email: </label>
       <input onChange={onEmailChange} />
       {!isValid && <CustomParagraph>Please add your email</CustomParagraph>}
     </CustomDiv>
     </ContainerDiv>
   );
 };

 export default EmailInput;