import styled from "styled-components";

export const Question = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background-color: rgb(202 201 201 / 5%);
  width: 100%;
  height: 100%;
  padding-top: 70px;
  border-radius: 50px;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    margin-top: 100px;
  }
`;

export const Button = styled.button`
width: 150px;
height: 50px;
border-radius: 10px;
cursor: pointer;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    margin-top: 100px;
  }
`;

