import styled from "styled-components";

export const FooterListsWrapper = styled.div`
    display: flex;
    font-size: 28px;
    font-family: 'Monsterat', sans-serif;
    color: #000000;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;

    @media (max-width: 1400px) {
        font-size: 0;
        display: block;
    }
`

export const FooterListsBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 0 0 45%;

    @media (max-width: 1400px) {
        margin-top: 15px;
        justify-content: flex-start;
    }

`

export const FooterListsItem = styled.div`

`

export const FooterListsLink = styled.a`
    display: inline-block;
    width: 25px;
    height: 25px;
    background: #fff url(${({bg}) => bg}) center / contain no-repeat;
    @media (max-width: 1400px) {
        margin-right: 15px;
    }
`
