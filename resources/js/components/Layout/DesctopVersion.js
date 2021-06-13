import React from "react";
import Header from "../Header";
import {DisplayDesc} from "./styles";
import Footer from "../Footer";

const DesctopVersion = React.memo(({children}) => {

    return (
        <DisplayDesc>
            <Header/>
            {children}
            <Footer/>
        </DisplayDesc>
    )
})


export default DesctopVersion
