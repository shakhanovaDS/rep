const {Router} = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Users = require('../models/Users')
const router = Router()

router.post(
    '/register', async (req, res)=>{
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        Users.create({
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            password: hashedPassword,
        })
        res.status(201).json({ message: 'Пользователь создан' })
    })
router.post(
    '/login',
    async (req,res)=>{
        const user = await Users.findOne({where:{email: req.body.email}})
        const token = jwt.sign(
            {userId: user.id},
            'hello',
            {expiresIn: '1h'}
        )
        res.json({token, userId: user.id})
    }

)
module.exports = router;