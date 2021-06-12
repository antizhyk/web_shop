import styled from "styled-components";

export const FooterFormWrapper = styled.div`
@media(max-width: 992px){
    flex: 0 0 50%;
}
`

export const FooterFormRow = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 1200px) {
        flex-wrap: wrap;
    }

    @media (max-width: 756px) {
        flex-wrap: wrap;
        justify-content: flex-end;
        padding-right: 50px;
        margin-bottom: 15px;
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

    @media (max-width: 992px) {
        flex: 0 0 110px;
    }

    @media (max-width: 756px) {
        display: none;
    }
`

export const FooterInput = styled.input`
    border: 1px solid #727272;
    height: 35px;
    font-size: 17px;
    width: 100%;
    flex: 0 0 100%;
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

export const FooterItem = styled.div`
    display: flex;
    width: 54%;

    @media (max-width: 1200px) {
        width: 80%;
    }
    @media (max-width: 992px) {
        flex: 0 0 250px;
    }
    `
