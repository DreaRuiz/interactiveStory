import styled from "styled-components";

export const Border = styled.p`
  height: 50px;
  border: 2px solid black;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ active }) => (active ? "beige" : "white")};
  margin-left: 200px;
  margin-right: 200px;
  font-family: Arial;
  padding: 10px;
  border-color:  #4fa095;
  color:  #4fa095;

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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: url(${(active) => active.image});
`;

export const WelcomeTitle = styled.h1`
  magin: 50px;
  color: #4fa095;
  margin-left: 25%;
  margin-right: 25%;
  padding: 15px 32px;
  display: flex;
  text-align: center;
  text-decoration: none;
  justify-content: center;
  display: inline-block;
  font-size: 50px;
  font-family: Arial;
  justify: center;
`;
export const WelcomeP = styled.p`
  color: #8ec3b5;
  margin-left: 25%;
  margin-right: 25%;
  display: flex;
  text-align: center;
  text-decoration: none;
  justify-content: center;
  display: inline-block;
  font-size: 20px;
  font-family: Arial;
  justify: center;
`;

export const WelcomeButton = styled.p`
  height: 20px;
  width: 40%;
  margin-left: 25%;
  margin-right: 25%;
  border-radius: 15px;
  background-color: #4fa095;
  color: #def5e5;
  padding: 15px 32px;
  display: flex;
  text-align: center;
  text-decoration: none;
  justify-content: center;
  display: inline-block;
  font-size: 16px;
  font-family: Arial;
`;
