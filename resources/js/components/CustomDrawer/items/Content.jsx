import React from 'react'
import {ShopMobMain} from "../styles";
import clsx from "clsx";
import Footer from "../../Footer";

const Content = React.memo(({classes, open, children}) => (
    <ShopMobMain
        className={clsx(classes.content, {
            [classes.contentShift]: open,
        })}
    >
        {/*<div className={classes.drawerHeader}/>*/}
        <div>{children}</div>
        <Footer/>
    </ShopMobMain>
))

export default Content
