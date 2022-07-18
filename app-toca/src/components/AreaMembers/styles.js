import styled from "styled-components";

export const Container = styled.div`
  height: 70px;
  width: fit-content;
  gap: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-y: unset;
  cursor: pointer;
`;

export const MemberContainer = styled.div`
  height: 100%;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow-y: unset;
`;

export const Circle = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 100%;
  border: 1px solid white;
  overflow: hidden;
`;

export const UserImg = styled.img`
  height: 50px;
  width: 50px;
`;

export const Name = styled.p`
  color: white;
  font-size: 12px;
  font-family: "Montserrat";
`;
