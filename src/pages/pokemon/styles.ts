import styled from "styled-components";

export const GroupLeft = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px 0;

    > div {
        max-width: 350px;
        width: 100%;     

        h1 {
            color: white;
            
            font-size: 48px;
            font-weight: 900;
            line-height: 3rem;

            text-transform: uppercase;

            margin-bottom: 1rem;
        }      
    }`

export const PokeLogo = styled.img`
      width: 15rem;
    margin-top: -8.5rem;
`
export const Pokeball = styled.img`
     height: 2rem;
    margin-right: 0.25rem;
    animation: bounce 0.3s linear infinite alternate;
`
export const Page = styled.div`
       display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 85%;
    margin: 0 auto;
`
export const Modal = styled.div`
    display: flex;
    justify-content: space-around;
`