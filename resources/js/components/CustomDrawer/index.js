import React from 'react';
import clsx from 'clsx';
import {useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import {
    ShopMenuBtn,
    ShopMobHeader,
    ShopMobHeaderImg,
    ShopMobHeaderLink,
    ShopMobHeaderRow,
    ShopMobHeaderText,
    useStyles
} from "./styles";
import {useSelector} from "react-redux";
import {HeaderItem, HeaderLink} from "../Header/styles";

const CustomDrawer = React.memo(({children}) => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const asideMenu = useSelector(({Header}) => Header.mobAsideMenu)
    const headerMenu = useSelector(({Header}) => Header.mobHeaderMenu)

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <ShopMobHeader
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <ShopMobHeaderRow>
                    <ShopMenuBtn
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon/>
                    </ShopMenuBtn>
                    <HeaderItem>
                        {headerMenu.map((el, i) => (
                            (
                                <ShopMobHeaderLink key={i + 1}><span>{el.name}</span>  <img src={el.image}/> </ShopMobHeaderLink>
                            )
                        ))}
                    </HeaderItem>
                </ShopMobHeaderRow>
            </ShopMobHeader>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >

                <div className={classes.drawerHeader}>
                    <Typography variant="h6" noWrap>
                        DigitalShop
                    </Typography>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    {asideMenu.map((el, index) => (
                        <ListItem button key={el}>
                            <HeaderLink key={index + 1}><ShopMobHeaderImg src={el.image}/>
                                <ShopMobHeaderText>{el.name}</ShopMobHeaderText> </HeaderLink>
                        </ListItem>
                    ))}
                </List>
                <Divider/>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader}/>
                {children}
            </main>
        </div>
    );
})

export default CustomDrawer
