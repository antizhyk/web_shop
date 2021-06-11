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
import {HeaderForm, HeaderItem, HeaderLink, HeaderLoup, HeaderSearch} from "../Header/styles";
import {InputAdornment} from "@material-ui/core";

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
                <HeaderForm>
                    <HeaderSearch id='header-search' type='search' placeholder='Search' endAdornment={
                        <InputAdornment position="end">
                            <HeaderLoup
                                aria-label="toggle password visibility"
                                edge="end"
                            >
                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                     x="0px" y="0px" viewBox="0 0 512.005 512.005"
                                     style={{enableBackground: '0 0 512.005 512.005'}}>
                                    <path d="M505.749,475.587l-145.6-145.6c28.203-34.837,45.184-79.104,45.184-127.317c0-111.744-90.923-202.667-202.667-202.667
			S0,90.925,0,202.669s90.923,202.667,202.667,202.667c48.213,0,92.48-16.981,127.317-45.184l145.6,145.6
			c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587z
			 M202.667,362.669c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,160S290.901,362.669,202.667,362.669z"/>

                                </svg>
                            </HeaderLoup>
                        </InputAdornment>
                    }/>
                </HeaderForm>
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
