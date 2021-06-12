import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {useStyles} from "./styles";
import {useSelector} from "react-redux";
import MainList from "./MainList/MainList";
import Header from "./items/Header";
import Content from "./items/Content";

const CustomDrawer = React.memo(({children}) => {
    const classes = useStyles(),
        [open, setOpen] = React.useState(false),
        headerMenu = useSelector(({Header}) => Header.mobHeaderMenu)


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Header classes={classes} open={open} handleDrawerOpen={handleDrawerOpen} headerMenu={headerMenu}/>
           <MainList classes={classes} handleDrawerClose={handleDrawerClose} open={open}/>
           <Content classes={classes} open={open} children={children}/>
        </div>
    );
})

export default CustomDrawer
