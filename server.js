const express = require('express')
const bodyParser = require('body-parser')
const Users = require('./src/models/Users')
const auth = require('./src/routes/auth')
const app = express();


// database
const base = require('./src/db')
base.authenticate() // подключение к бд
    .then(async ()=> await Users.sync().then(()=>console.log("It's alright")))
    .catch((err)=>console.log('error'))
// end of database

// MIDDLEWARES
app.use(((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next();
}))
app.use(bodyParser.json())
app.use(auth)



app.listen(8080)