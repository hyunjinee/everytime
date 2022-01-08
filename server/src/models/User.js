const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const saltRounds = 10


const userSchema = mongoose.Schema({
    id: {
        type: String,
        maxLength: 50,
        unique: 1
    },
    password: {
        type: String,
    },
    email: {
        type: String,
    },
    nickname: {
        type: String,
    },
    entranceYear: {
        type: String,
    },
    school: {
        type: String,
    },
    token: {
        type: String,
    },
    tokenExpiration: {
        type: Number,
    }
})


const User = mongoose.model('User', userSchema)

module.exports = {
    User
}