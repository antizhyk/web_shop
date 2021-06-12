import styled from "styled-components";
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Paper} from "@material-ui/core";
import {Link} from "react-router-dom";

export const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export const FooterWrapper = styled(Grid)`
    border: 1px solid #bbb;
    border-bottom: 0;
`

export const FooterPaper = styled(Paper)`
    border-radius: 0;
    box-shadow: none;
    height: 100%;
    text-align: left;
`

export const FooterLastPaper = styled(FooterPaper)`
    border-left: 1px solid #bbb;
    height: 100%;
`


export const FooterTitle = styled.div`
    font-size: 20px;
    color: #727272 ;
    font-family: Montserrat, 'sans-serif';
    margin-bottom: 10px;
`

export const FooterLink = styled(Link)`
    text-decoration: none;
    color: #727272;
    font-size: 18px;

    &:hover{
        text-decoration: underline;
    }
`
