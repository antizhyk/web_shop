import React from "react";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import LayoutComponent from "./routers/LayoutComponent";
import Main from "./pages/Main";

const App = () => (
    <BrowserRouter>
        <Route exact path="/" render={() => <Redirect to="/main" />}/>
        <LayoutComponent exact path="/main"  component={Main}/>
    </BrowserRouter>
)

export default App
