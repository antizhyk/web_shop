import React from 'react'
import {ShopMenuBtn, ShopMobHeader, ShopMobHeaderLink, ShopMobHeaderRow} from "../styles";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import {HeaderItem} from "../../Header/styles";

const Header = React.memo(({classes, open, handleDrawerOpen, headerMenu}) => (
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
                        <ShopMobHeaderLink key={i + 1} to='/'><span>{el.name}</span> <img src={el.image}/>
                        </ShopMobHeaderLink>
                    )
                ))}
            </HeaderItem>
        </ShopMobHeaderRow>
    </ShopMobHeader>
))

export default Header
