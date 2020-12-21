import React, {useState} from "react";
import {BrowserRouter as Router,
    Switch,
    Route,
    Redirect} from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'
import Reg from './pages/Reg'
import Login from './pages/Login'
import Home from './pages/Home'
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";
import {Navbar} from './components/NavBar'
import {useRoutes} from './routes'

function App() {
    const {token, login, logout, userId, ready} = useAuth()
    const isAuthenticated = !!token
    const routes = useRoutes(isAuthenticated)

    return (
        <AuthContext.Provider value={{
            token, login, logout, userId, isAuthenticated
        }}>
        <Router>
            { isAuthenticated && <Navbar /> }
            <div className='container'>
                {routes}
            </div>
        </Router>
        </AuthContext.Provider>
    );
}

export default App;
