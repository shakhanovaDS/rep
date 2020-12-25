import AuthService from './auth.service'
const API_URL = "http://localhost:8080/";

const getUser = () => {
    let user = AuthService.getCurrentUser();
    return fetch(API_URL + 'getUserById', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type' : 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ id: user.userId })
    })
}

const sendMessage = (id2, message) =>{
    const user = AuthService.getCurrentUser();
    return fetch(API_URL + 'sendMessage', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type' : 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ id1: user.userId, id2:id2, message:message })
    })
}

const getFriends = () => {
    let user = AuthService.getCurrentUser();
    return fetch(API_URL+'getFriends', {
        method:'POST',
        mode: 'cors',
        headers: {
            'Content-Type' : 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ id: user.userId })
    })
}

const getStrangers = () => {
    let user = AuthService.getCurrentUser();
    return fetch(API_URL+'getStrangers', {
        method:'POST',
        mode: 'cors',
        headers: {
            'Content-Type' : 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ id: user.userId })
     })
 }

 const addFriend = (id2) => {
    let user = AuthService.getCurrentUser();
     return fetch(API_URL+'addFriend', {
         method:'POST',
         mode: 'cors',
         headers: {
             'Content-Type' : 'application/json;charset=utf-8',
         },
         body: JSON.stringify({ id1: user.userId, id2: id2 })
     })
 }

 const getMessagesById = (id2) => {
     let user = AuthService.getCurrentUser();
     return fetch(API_URL+'getMessagesById', {
         method:'POST',
         mode: 'cors',
         headers: {
             'Content-Type' : 'application/json;charset=utf-8',
         },
         body: JSON.stringify({ id1: user.userId, id2: id2 })
     })
 }
 const addMessage = (id2) => {
     const user = AuthService.getCurrentUser()
     return fetch(API_URL+'addMessage', {
         method:'POST',
         mode: 'cors',
         headers: {
             'Content-Type' : 'application/json;charset=utf-8',
         },
         body: JSON.stringify({ id1: user.userId, id2: id2 })
     })
 }
export default {
    getUser,
    getFriends,
    getStrangers,
    addFriend,
    getMessagesById,
    sendMessage
}