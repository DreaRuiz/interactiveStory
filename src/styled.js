import styled from "styled-components";

export const Border = styled.p`
  height: 50px;
  border: 2px solid #8ec3b0;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-family: Arial;
  background-color: ${({ active }) => (active ? "pink" : "white")};
`;

export const Button = styled.p`
  height: 20px;
  width: 40%;
  border-radius: 15px;
  background-color: #def5e5;
  color: #8ec3b0;
  margin: 5px;
  padding: 15px 32px;
  display: flex;
  text-align: center;
  text-decoration: none;
  justify-content: center;
  display: inline-block;
  font-size: 16px;
  font-family: Arial;
`;
