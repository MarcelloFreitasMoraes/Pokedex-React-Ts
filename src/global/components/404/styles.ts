import styled from "styled-components";

export const Question = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  //background-color: rgb(202 201 201 / 5%);
  width: 100%;
  height: 100%;
  padding-top: 70px;
  border-radius: 50px;

  img{
    width: auto;
   height: 200px;
   margin: 0 0 10px 40px;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
  img {
    @media (max-width: 600px) {
   width: auto;
   height: 150px;
   margin: 0 0 10px 40px;
  }
  }
  h1 {
    @media (max-width: 600px) {
      font-size: var(--font-size-large); 
      margin-top: 10px;
  }
  }
`;

export const Button = styled.button`
width: 150px;
height: 50px;
border-radius: 10px;
cursor: pointer;

  @media (max-width: 768px) {
  width: 70px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  }

  @media (max-width: 600px) {
  width: 70px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  }

  @media (max-width: 360px) {
  width: 70px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  }
`;

