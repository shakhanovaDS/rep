import axios from "axios";

const API_URL = "http://localhost:8080/";

const register = async (name, surname, email, password) => {
    try {
        const response = await fetch(API_URL+'reg',{
            method: "POST",
            mode: 'cors',
            headers: {
                'Content-Type' : 'application/json;charset=utf-8',
            },
            body: JSON.stringify({ name: name, surname: surname, email : email, password : password })
        })
        return response.json()
    }
    catch (e) {
        alert(e)
    }
};

const login = async (email, password ) => {
    return await fetch(API_URL + 'login', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type' : 'application/json;charset=utf-8',
        },
        body: JSON.stringify({email:email, password: password})
    }).then(async (response) => {
        const data = await response.json();
        if (data.token)  {
            localStorage.setItem("user", JSON.stringify(data));
        }
        return data
    })
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

export default {
    register,
    login,
    logout,
    getCurrentUser,
};
