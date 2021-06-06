import styled from "styled-components";
import {Link} from "react-router-dom";
import {IconButton, OutlinedInput} from "@material-ui/core";

export const HeaderRow = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #bbb;
    padding: 25px 25px 15px;
`

export const HeaderWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
`

export const HeaderGoToHome = styled(Link)`
    flex: 0 0 75px;
    margin-right: 10px;

    img {
        width: 100%;
    }
`

export const HeaderItem = styled.div`
    display: flex;
    justify-content: space-between;
    flex: 0 0 33.333%;
    margin: 15px 10px 15px 0;

    &:last-child{
        margin-right: 0;
    }
`

export const HeaderLink = styled(Link)`
    color: #8d8d8d;
    font-family: 'Montserrat', sans-serif;
    font-weight: 100;
    font-size: 24px;
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: color .3s;
    margin: 0 20px;
    &:hover {
        color: #000000;
    }

    img {
        height: 20px;
        margin-left: 5px;
    }
`
export const HeaderForm = styled.form`
    .Mui-focused {
        svg {
            fill: #000000;
        }

        .MuiOutlinedInput-notchedOutline, input {
            border: 1px solid #000000;
        }

        svg {
            fill: #000000;
        }

        &:focus {
            background-color: red;
        }
    }

    &:hover {
        .MuiOutlinedInput-notchedOutline, input {
            border: 1px solid #000000;
        }

        svg {
            fill: #000000;
        }
    }
`

export const HeaderSearch = styled(OutlinedInput)`
    height: 40px;
    border-color: #dee2e6;
    overflow: hidden;

    input {
        border-right: 1px solid #c2c2c2;
    }

    input::-ms-clear {
        display: none;
    }
`

export const HeaderLoup = styled(IconButton)`
    width: 40px;
    margin-left: -7px;

    svg {
        fill: #8d8d8d;

        &:hover {
            fill: #000000;
        }
    }
`
