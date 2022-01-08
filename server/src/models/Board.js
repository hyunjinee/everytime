const mongoose = require('mongoose')
const Schema = mongoose.Schema


const boardSchema = mongoose.Schema({

})

const Board = mongoose.model('Board', boardSchema)
module.exports = { Board }