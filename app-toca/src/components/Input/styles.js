import styled from "styled-components";

export const Input = styled.input`
  width: 270px;
  height: 60px;
  font-family: "Montserrat";
  border-radius: 15px;
  background-color: #5d7a88;
  border: 0;
  font-size: 25px;
  padding-left: 15px;
  :focus {
    outline: 0;
    box-shadow: 0 0 0 0;
    background-color: #5d7a88;
  }
  ::placeholder {
    color: black;
  }
`;
