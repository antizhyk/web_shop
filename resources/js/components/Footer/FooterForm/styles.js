import styled from "styled-components";

export const FooterFormRow = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 1200px) {
        flex-wrap: wrap;
    }
`

export const FooterLabel = styled.label`
    font-size: 22px;
    color: #727272;
    font-family: 'Montserrat', 'sans-serif';
    margin-right: 10px;

    @media (max-width: 1200px) {
        flex: 0 0 100%;
    }
`

export const FooterInput = styled.input`
    border: 1px solid #727272;
    height: 35px;
    font-size: 17px;
    width: 60%;

    @media (max-width: 1200px) {
        width: 80%;
    }
`

export const FooterSubmit = styled.button`
    border: 1px solid #727272;
    height: 35px;
    padding: 0 25px;
    border-left: 0;
    background-color: #fff;
    background-image: url(${({bg}) => bg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 500%;
`
