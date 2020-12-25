const {Router} = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Sequelize = require('sequelize')
const Op = Sequelize.Op;
const Users = require('../models/Users')
const Friends = require('../models/Friends')
const Messages = require('../models/Messages')
const router = Router()

router.post('/addMessage', (req,res)=>{

})

router.post('/getMessagesById', async (req, res)=>{
    console.log('getMessagesById' + new Date())
    const messages1 = await Messages.findAll({
        where: {
            id1: req.body.id1,
            id2: req.body.id2
        }
    })
    const messages2 = await Messages.findAll({
        where: {
            id1: req.body.id2,
            id2: req.body.id1
        }
    })
    let messageListNoNames = [];
    for (let i = 0; i < messages1.length; i++){
        messageListNoNames.push({
            key: messages1[i].id,
            id1: messages1[i].id1,
            id2: messages1[i].id2,
            message: messages1[i].message,
            date: messages1[i].date,
        })
    }
    for (let i = 0; i < messages2.length; i++){
        messageListNoNames.push({
            key: messages2[i].id,
            id1: messages2[i].id1,
            id2: messages2[i].id2,
            message: messages2[i].message,
            date: messages2[i].date,
        })
    }
    let user1, user2
    if (messages1.length !== 0)
        user1 = await Users.findOne({
            attributes: ['id','name','surname'],
            where:{
            id: messages1[0].id1
        }})
    if (messages2.length !== 0)
        user2 = await Users.findOne({
            attributes: ['id','name','surname'],
            where:{
                id: messages2[0].id1
        }})
    for (let i = 0; i < messageListNoNames.length; i++){
        if (user1.id == messageListNoNames[i].id1) {
            messageListNoNames[i].name = user1.name;
            messageListNoNames[i].surname = user1.surname;
        }
        else {
            messageListNoNames[i].name = user2.name;
            messageListNoNames[i].surname = user2.surname;
        }
    }
    console.log(messageListNoNames)
    messageListNoNames.sort((a,b)=>{
        if ( a.key < b.key ){
            return -1;
        }
        if ( a.key > b.key ){
            return 1;
        }
        return 0;
    })
    const messages = {
        messages: messageListNoNames,
        receiver: req.body.id2
    }
    console.log(messages)
    res.status(200).json(messages)
})

router.post('/sendMessage', (req,res)=>{
    Messages.create({
        id1: req.body.id1,
        id2: req.body.id2,
        message: req.body.message,
        date: getDate()
    })
    res.status(200).json({message:'Message has been sent'})
})

router.post('/addFriend',async (req,res)=>{
    console.log('addFriend ' + new Date())
    await Friends.create({
        id1 : req.body.id1,
        id2 : req.body.id2
    })
    res.status(200).json({message: "Added", status: 'Disabled'})
})

router.post('/getUserById', (req,res)=>{
    console.log('getUserById ' + new Date())
    Users.findOne({where: { id: req.body.id }}).then((user)=>{
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.status(200).json({
            name: user.name,
            surname: user.surname,
            email:user.email
        })
    })
})

router.post('/getFriends',async(req, res)=>{
    console.log('getFriends ' + new Date())
    const friendsJSON = await getFriendsById(req.body.id)
    res.status(200).json(friendsJSON)
})

router.post('/getStrangers',async (req,res)=>{
    // console.log('getStrangers ' + new Date())
    // let noBro1 = await Friends.findAll({
    //     attributes: [['id2','id']],
    //     where: {
    //         id1: {
    //             [Op.ne] : req.body.id
    //         },
    //         id2: {
    //             [Op.ne]: req.body.id
    //         }
    //     }
    // })
    // let noBro2 = await Friends.findAll({
    //     attributes: [['id1','id']],
    //     where: {
    //         id2: {
    //             [Op.ne] : req.body.id
    //         },
    //         id1: {
    //             [Op.ne] : req.body.id
    //         }
    //     }
    // })
    // let noBros = noBro1.concat(noBro2)
    // let noBrosId = [];
    // for (let i = 0; i < noBros.length; i++){
    //     noBrosId.push(noBros[i].id);
    // }
    // console.log(req.body.id)
    // console.log(noBro2)
    // console.log(noBro1)
    // let uniqueArray = noBrosId.filter(function(item, pos) {
    //     return noBrosId.indexOf(item) == pos;
    // })
    // console.log('get UniqueArray')
    // let bro1 = await Friends.findAll({
    //     attributes: [['id2','id']],
    //     where: {
    //         id1: req.body.id
    //     }
    // })
    // let bro2 = await Friends.findAll({
    //     attributes: [['id1','id']],
    //     where: {
    //         id2: req.body.id
    //     }
    // })
    // console.log('find Bros')
    // let bro = await bro1.concat(bro2);
    // let broId=[];
    // for (let i = 0; i < bro.length; i++){
    //     await broId.push(bro[i].id);
    // }
    // console.log('uniqueArray ' + uniqueArray )
    // console.log('broId ' + broId)
    // let strangersJson;
    // if (broId.length == 0){
    //     strangersJson = await Users.findAll({
    //     attributes: ['name', 'surname','id'],
    //     where: {
    //         id: {
    //             [Op.notIn]: uniqueArray
    //         }
    //     }
    // })} else {
    //     strangersJson = await Users.findAll({
    //         attributes: ['name', 'surname','id'],
    //         where: {
    //             id: {
    //                 [Op.notIn]: uniqueArray,
    //                 [Op.notIn]: broId
    //             }
    //         }
    //     })
    // }
    // console.log('dsd')
    // get friends (name, surname, id)
    const friends = await getFriendsById(req.body.id)
    // get id friends
    let friendsIds = [];
    for (let i = 0;i < friends.length; i++){
        friendsIds.push(friends[i].id)
    }
    console.log(friendsIds)
    //add my id
    friendsIds.push(req.body.id)
    console.log(friendsIds)
    // find strangers in Users by id
    const strangersJson = await Users.findAll({
        attributes: ['name', 'surname','id'],
        where: {
            id : {
                [Op.notIn]: friendsIds
            }
        }
    })
    return res.status(200).json(strangersJson)
})
async function getFriendsById(id){
    let bro1 = await Friends.findAll({
        attributes: [['id2','id']],
        where: {
            id1: id
        }
    })
    let bro2 = await Friends.findAll({
        attributes: [['id1','id']],
        where: {
            id2: id
        }
    })
    let bro = bro1.concat(bro2);
    let broId=[];
    for (let i = 0; i < bro.length; i++){
        broId.push(bro[i].id);
    }
    const friendsJSON = await Users.findAll({
        attributes: ['name', 'surname', 'id'],
        where: {
            id: {
                [Op.or]: broId
            }
        }
    })
    return friendsJSON
}

const getDate = () => {
    let date = new Date()
    return date.getFullYear() + " " +
        date.getMonth() + " " +
        date.getDate() + " " +
        date.getHours() + ":" +
        date.getMinutes() + ":" +
        date.getSeconds()
}
module.exports = router
