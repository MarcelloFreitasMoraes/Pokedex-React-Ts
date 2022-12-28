import styled from "styled-components";

export const Content = styled.header`
    height: 5rem;
    
    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-bottom: 50px;
    }
`
export const Group = styled.div`

`

export const GroupLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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
    }
    `
