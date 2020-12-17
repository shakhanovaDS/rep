const base=require('./db')
const User = require('./models/user')
const Friends = require('./models/friends')
const UserDao = require('./dao/userDao')
const DialogueDao = require('./dao/dialogueDao')
const Dialogue = require('./models/dialogue')
const FriendsDao = require('./dao/friendsDao')
base.authenticate() // подключение к бд
.then(()=>console.log('ok'))
.catch((err)=>console.log('error'))
async function init(){ //мы создали функцию, чтобы создать таблицу
    await User.sync({force:true}) //обнавляем таблицу
        .then(()=>console.log('table is created'))
        .catch((err)=>console.log('error'))
    await Dialogue.sync({force:true}) //обнавляем таблицу
        .then(()=>console.log('table is created'))
        .catch((err)=>console.log('error'))
    await Friends.sync({force:true}) //обнавляем таблицу
        .then(()=>console.log('table is created'))
        .catch((err)=>console.log('error'))
    await UserDao.create('Nikita','myNikita',21)
    await UserDao.create('Dasha', 'it\'s mee', 20)
    await FriendsDao.create(1,2);
    let user = await UserDao.getById(1)
    console.log(user);
    await DialogueDao.create('Hello',1,2)
}
init();
