const mongoose = require('mongoose')

const Schema = mongoose.Schema

const recieversSchema = new Schema({
    listName: {
        type: String,
        required: true,
        unique: false,
        trim: true,
    },
    country: {
        type: String,
        required: true,
        unique: false,
        trim: true,
    },
    list: {
        type: Array,
        required: true,
        unique: false,
        trim: true,
    },
    
})

const Recievers = mongoose.model('Recievers', recieversSchema)

module.exports = Recievers