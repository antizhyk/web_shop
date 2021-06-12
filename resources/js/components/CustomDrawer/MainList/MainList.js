import React from 'react'
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Search from "../items/Search";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {HeaderLink} from "../../Header/styles";
import {ShopMobHeaderImg, ShopMobHeaderText} from "../styles";
import Divider from "@material-ui/core/Divider";
import {useTheme} from "@material-ui/core/styles";
import {useSelector} from "react-redux";
import SimpleAccordion from "./SimpleAccordion";

const MainList = React.memo(({classes, handleDrawerClose, open}) => {
    const theme = useTheme(),
        asideMenu = useSelector(({Header}) => Header.mobAsideMenu)


    return (
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
            <Search/>
            <List>
                {asideMenu.map((el, index) => (
                    <ListItem button key={el}>
                        <HeaderLink to='/'><ShopMobHeaderImg src={el.image}/>
                            <ShopMobHeaderText>{el.name}</ShopMobHeaderText> </HeaderLink>
                    </ListItem>
                ))}
            </List>
            <Divider/>
            <SimpleAccordion/>
        </Drawer>
    )
})

export default MainList
