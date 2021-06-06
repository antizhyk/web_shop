import React from "react";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import LayoutComponent from "./routers/LayoutComponent";

const App = () => (
    <BrowserRouter>
        <Route exact path="/" render={() => <Redirect to="/main" />}/>
        <LayoutComponent exact path="/main" component={<h1>Hi</h1>}/>
    </BrowserRouter>
)

export default App
