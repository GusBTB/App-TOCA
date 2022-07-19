import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(
    179.85deg,
    #012b40 20.21%,
    rgba(1, 43, 64, 0) 99.87%
  );
`;

export const MiddleDiv = styled.div`
  height: 84%;
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const AreaTitle = styled.p`
  font-family: "CharcuterieBlockW05-Regular";
  font-size: 30px;
  color: white;
  font-weight: 500;
`;

export const MembersDiv = styled.div`
  height: 75px;
  width: 100%;
  overflow-x: auto;
`;

export const ButtonsDiv = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
