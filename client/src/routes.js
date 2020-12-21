import {Redirect, Switch, Route, BrowserRouter} from "react-router-dom";
import React from 'react'
import Login from "./pages/Login";
import Home from "./pages/Home";
import Reg from "./pages/Reg";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route exact path="/home" exact>
                    <Home/>
                </Route>
                <Route exact path="/login" exact>
                    <Login/>
                </Route>
                <Route exact path="/reg">
                    <Reg/>
                </Route>
                <Redirect to='/home'/>
            </Switch>
        )
    } else return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/login" exact>
                <Login/>
            </Route>
            <Route exact path="/reg">
                <Reg/>
            </Route>
            <Redirect to='/login'/>
        </Switch>
        </BrowserRouter>
    )
}