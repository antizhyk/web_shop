import React from 'react'
import Slider from "../Slider";
import {ContentWrapper} from "./styles";
import {Grid, useMediaQuery} from "@material-ui/core";
import {SidebarGrid, useStyles} from "./styles";
import Sidebar from "../Sidebar";
import Products from "../Products";

const Content = React.memo(() => {
    const classes = useStyles();
    const matches = useMediaQuery('(max-width:1170px)');

    return (
        <ContentWrapper>
        <Slider/>
            <ContentWrapper container >
                <SidebarGrid item xs={3}>
                   <Sidebar/>
                </SidebarGrid>
                <Grid item xs={9}>
                   <Products/>
                </Grid>
            </ContentWrapper>
        </ContentWrapper>
    )
})

export default Content
