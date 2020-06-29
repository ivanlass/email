const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: false,
        unique: false,
        trim: true,
        minlength: 3
    },
    password: {
        type: String,
        required: false,
        unique: true,
        trim: true,
        minlength: 3,
    },
    role: {
        type: String,
        required: false,
        trim: true,
        minlength: 3,
    },
    drzava: {
        type: String,
        required: false,
    },
    projekat: {
        type: String,
        required: false,
    },
    poslao: {
        type: Number,
        required: false,
    },
    mailoviZaSlanje: {
        type: Array,
        required: false,
    },
    affiID: {
        type: Array,
        required: false,
    },

})

const User = mongoose.model('User', userSchema)

module.exports = User