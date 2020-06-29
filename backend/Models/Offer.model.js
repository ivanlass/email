const mongoose = require('mongoose')

const Schema = mongoose.Schema

const offerSchema = new Schema({
    offer: {
        type: String,
        required: false,
        unique: false,
        trim: true,
    },
    
})

const Offer = mongoose.model('Offer', offerSchema)

module.exports = Offer