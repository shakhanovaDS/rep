import React, {useState} from 'react'
export default () => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [registered, setRegistered] = useState(false)
    const changeNameHandler = (event) => {
        setName(event.target.value)
    }
    const changeSurnameHandler = (event)=>{
        setSurname(event.target.value)
    }
    const changeEmailHandler = (event)=>{
        setEmail(event.target.value)
    }
    const changePasswordHandler = (event)=>{
        setPassword(event.target.value)
    }

    const registerHandler = async () =>{
        try {
            const data = await fetch('http://localhost:8080/register',{
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type' : 'application/json;charset=utf-8',
                },
                body: JSON.stringify({name:name, surname:surname, email:email, password:password})
            })
            setRegistered(true)
        }
        catch (e){
            console.log(e)
        }
    }
    if (!registered)
    return (
        <div className='row'>
            <div className="col s4 offset-s4" >
                <h1 style={{"textAlign":"center"}}>Регистрация</h1>
                <div className="input-field">
                    <input
                        placeholder={'Your name'}
                        type="text"
                        value={name}
                        onChange={changeNameHandler}
                    />
                </div>
                <div className="input-field">
                    <input
                        placeholder={'Your surname'}
                        type="text"
                        value={surname}
                        onChange={changeSurnameHandler}
                    />
                </div>
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
                    onClick={registerHandler}
                >
                    Submit
                </button>
            </div>
        </div>
    )
    else return (
        <div>
            <p align={'center'}>
                Вы зарегистрировались! Теперь залогинтесь!
            </p>
        </div>
    )
}