import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 165px;
  border-radius: 15px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Centralized = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const PostText = styled.p`
  font-size: 12px;
  font-family: "Montserrat";
  text-align: justify;
`;

export const PostAreaTitle = styled.p`
  font-family: "CharcuterieBlockW05-Regular";
  font-size: 20px;
  color: black;
  font-weight: 500;
`;
