const express = require('express')
const bodyParser = require('body-parser')
const Users = require('./src/models/Users')
const Friends = require('./src/models/Friends')
const auth = require('./src/routes/route.auth')
const getter = require('./src/routes/route.getter')
const Messages = require('./src/models/Messages')
const app = express();


// DATABASE
const base = require('./src/config/db')
base.authenticate() // подключение к бд
    .then(async ()=> await Users.sync({force:true}).then(async ()=>{
        console.log("It's alright")
        Users.create({
            name : 'd',
            surname : 'd',
            email: 'd',
            password: 'd'
        })
        Users.create({
            name : 't',
            surname : 't',
            email: 't',
            password: 't'
        })
        Users.create({
            name : 'k',
            surname : 'k',
            email: 'k',
            password: 'k'
        })
        Users.create({
            name : 'p',
            surname : 'p',
            email: 'p',
            password: 'p'
        })
        await Friends.sync({force:true}).then(()=>{
            Friends.create({
                id1:1,
                id2:2
            })
            Friends.create({
                id1:3,
                id2:1
            })
        })
        await Messages.sync({force:true}).then(()=>{
            Messages.create({
                id1: 1,
                id2: 2,
                message: 'Hello',
                date : getDate()
            })
            Messages.create({
                id1: 1,
                id2: 2,
                message: 'World',
                date: getDate()
            })
            Messages.create({
                id1: 2,
                id2: 1,
                message: 'Everything was beautiful',
                date: getDate()
            })
            Messages.create({
                id1: 2,
                id2: 1,
                message: 'and Nothing Hurt',
                date: getDate()
            })
        })

    }))
    .catch((err)=>console.log('error'))
// END OF DATABASE


// MIDDLEWARES
app.use(((req, res, next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    next();
}))
app.use(bodyParser.json())
app.use(auth)
app.use(getter)
// END OF MIDDLEWARES


app.listen(8080)

const getDate = () => {
    let date = new Date()
    return date.getFullYear() + " " +
        date.getMonth() + " " +
        date.getDate() + " " +
        date.getHours() + ":" +
        date.getMinutes() + ":" +
        date.getSeconds()
}