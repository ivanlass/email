const router = require('express').Router()
const Country = require('../Models/Country.model')


router.route('/').get((req, res) => {
    Country.find()
        .then(country => res.json(country))
        .catch(err => res.status(400).json('Error' + err))
})


router.route('/add').post((req, res) => {
    const country = req.body.country
    const newCountry = new Country({country})
    newCountry.save()
    .then(country => {
        Country.find()
        .then(country => res.json(country))
        .catch(err => res.status(400).json('Error' + err))
    }
    ) 
})


router.route('/delete').delete((req, res) => {
    Country.findByIdAndDelete(req.body.id)
    Country.find()
    .then(country => res.json(country))
    .catch(err => res.status(400).json('Error' + err))
})



module.exports = router