import styled from "styled-components";

export const Button = styled.button`
  border: 0;
  border-radius: 15px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  font-family: "Montserrat";
  background-color: #012b40;
  color: white;
`;

export const ButtonSecondary = styled.button`
  border: 2px solid #012b40;
  border-radius: 15px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  font-family: "Montserrat";
  font-weight: 500;
  background-color: transparent;
  color: #012b40;
`;
