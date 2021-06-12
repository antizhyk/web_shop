import styled from "styled-components";

export const DisplayMob = styled.div`
@media(min-width: 993px){
    display: none;
}
`

export const DisplayDesc = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;

    @media(max-width: 992px){
        display: none;
    }
    `
