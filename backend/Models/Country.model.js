const mongoose = require('mongoose')

const Schema = mongoose.Schema

const countrySchema = new Schema({
    country: {
        type: String,
        required: false,
        unique: false,
        trim: true,
    },
    
})

const Country = mongoose.model('Country', countrySchema)

module.exports = Country