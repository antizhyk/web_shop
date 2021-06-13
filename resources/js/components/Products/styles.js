import styled from 'styled-components'
import {Grid} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

export const ProductsWrapper = styled(Grid)`
    padding: 0 5px;
`

export const ProductsCard = styled(Card)`
    border: 1px solid #bbb;
    border-radius: 0;

    button {
        height: 330px;
        display: flex;
        flex-direction: column;
    }

    .MuiCardMedia-root {
        padding-bottom: 76%;
        width: 100%;
    }

    .MuiTypography-gutterBottom {
        line-height: 1.2;
    }
`

export const ProductsImg = styled(CardMedia)`

`
