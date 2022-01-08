const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const {User} = require('../models/User')

router.get('/',  async (req,res) => {
    try {
        const user = await User.findOne({_id: req.user._id}).exec()
        if (user) return res.status(200).json({
            id: req.user.id,
            email: req.user.email,
            nickname: req.user.nickname,
            entranceYear: req.user.entranceYear,
            school: req.user.school,
        })
        else return res.status(400).send()
    } catch (err) {
        console.log(err)
    }
})