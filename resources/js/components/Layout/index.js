import React from "react";
import {Container} from "@material-ui/core";
import DesctopVersion from "./DesctopVersion";
import MobileVersion from "./MobileVersion";

const Layout = React.memo(() => {

    return(
        <Container>
            <MobileVersion/>
            <DesctopVersion/>
        </Container>
    )
})

export default Layout
