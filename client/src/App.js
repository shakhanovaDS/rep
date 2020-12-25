import 'materialize-css/dist/css/materialize.min.css'
import './App.css';
import Register from "./components/Register";
import {Redirect, Switch, Route} from 'react-router-dom'
import React, {useEffect, useState} from "react";
import AuthService from './services/auth.service'
import Login from "./components/Login";
import Profile from "./components/Profile";
import Friends from "./components/Friends";
import Messenger from "./components/Messenger";


function App() {
    const [logged, setLogged] = useState(false)
    useEffect(() => {
        const user = AuthService.getCurrentUser();
        setLogged(user)
    }, [])
    let nav;
    if (logged){
        nav = (<div>
                <li><a className='blue-text text-darken-4' href="/profile">Profile</a></li>
                <li><a className='blue-text text-darken-4' href="/messenger">Messenger</a></li>
                <li><a className='blue-text text-darken-4' href="/friends">Friends</a></li>
                <li><a onClick={AuthService.logout} className='blue-text text-darken-4' href="/logout">Logout</a></li>
            </div>)
    } else nav = (<div>
            <li><a className='blue-text text-darken-4' href="/log">Login</a></li>
            <li><a className='blue-text text-darken-4' href="/reg">Register</a></li>
        </div>)
    let routes
    if (logged) {
        routes = (
            <Switch>
                <Route exact path='/profile'><Profile/></Route>
                <Route exact path='/messenger'><div><p><Messenger/></p></div></Route>
                <Route exact path='/friends'><div><p><Friends/></p></div></Route>
                <Route exact path='/logout'><Login/></Route>
            </Switch>
        )
    } else routes = (
        <Switch>
            <Route exact path='/reg'><Register/></Route>
            <Route exact path='/logout'><Login/></Route>
            <Route exact path='/log'><Login/></Route>
        </Switch>
    )
  return (

    <div className="App">
        <nav>
            <div className="nav-wrapper grey lighten-5">
                <a href="#!" className="left brand-logo blue-text text-darken-4">G_Kontakte</a>
                <ul className="right">
                    {nav}
                </ul>
            </div>
        </nav>
        {routes}
    </div>
  );
}

export default App;
