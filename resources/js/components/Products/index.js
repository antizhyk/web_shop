import React from 'react'
import {Grid} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core/styles";
import {useSelector} from "react-redux";
import {ProductsBlock, ProductsCard, ProductsImg, ProductsWrapper} from "./styles";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const Products = React.memo(() => {
    const classes = useStyles();
    const product = useSelector(({Products}) => Products.mainList)

    return (
        <ProductsWrapper container spacing={1}>
            {
                product.map((el) => (
                    <Grid item xs={4}>
                        <ProductsCard className={classes.root}>
                            <CardActionArea>
                                <ProductsImg
                                    className={classes.media}
                                    image={el.img}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="h4">
                                        {el.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {el.price} {el.currency}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </ProductsCard>
                    </Grid>
                ))}
        </ProductsWrapper>
    )
})

export default Products
