import React, {useContext, useEffect, useState} from 'react'
import {AuthContext} from "../context/AuthContext";

export default () => {
    const auth = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const changeEmailHandler = (event)=>{
        setEmail(event.target.value)
    }
    const changePasswordHandler = (event)=>{
        setPassword(event.target.value)
    }

    const loginHandler = async () =>{
        try {
            const data = await fetch('http://localhost:8080/login',{
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type' : 'application/json;charset=utf-8',
                },
                body: JSON.stringify({ email:email, password:password})
            })
            auth.isAuthenticated = true;
            auth.login()
        }
        catch (e){
            console.log(e)
        }
    }
    if (!auth.isAuthenticated)
    return (
            <div className='row'>
                <div className="col s4 offset-s4" >
                    <h1 style={{"textAlign":"center"}}>Логин</h1>
                    <div className="input-field">
                        <input
                            placeholder={'Your email'}
                            type="text"
                            value={email}
                            onChange={changeEmailHandler}
                        />
                    </div>
                    <div className="input-field">
                        <input
                            placeholder={'Your password'}
                            type="password"
                            value={password}
                            onChange={changePasswordHandler}
                        />
                    </div>
                    <button
                        className="btn grey lighten-1 black-text"
                        onClick={loginHandler}
                    >
                        Submit
                    </button>
                </div>
            </div>
    )
    else return (
        <p>Hello</p>
    )
}