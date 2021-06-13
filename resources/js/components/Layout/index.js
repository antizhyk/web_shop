import React from "react";
import {Container} from "@material-ui/core";
import DesctopVersion from "./DesctopVersion";
import MobileVersion from "./MobileVersion";

const Layout = React.memo(({children}) => {

    return(
        <Container>
            <MobileVersion children={children}/>
            <DesctopVersion children={children}/>
        </Container>
    )
})

export default Layout
