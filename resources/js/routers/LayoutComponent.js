import React from "react";
import {Route} from "react-router-dom"
import Layout from "../components/Layout";

const LayoutComponent = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        <Layout>
            <Component {...props}/>
        </Layout>
    )}/>
)

export default LayoutComponent
