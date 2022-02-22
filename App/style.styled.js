import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`;

export const Calculator = styled.div`
  align-self: center;
  background: black;
  border-radius: 50px;
  color: white;
  height: 900px;
  padding: 20px;
  position: relative;
  width: 555px;
`;

export const Header = styled.div`
  height: 150px;
  justify-content: space-between;
  padding: 0 20px;
`;

export const Display = styled.div`
  font-size: 130px;
  font-weight: 300;
  margin-bottom: 20px;
  text-align: right;
`;
