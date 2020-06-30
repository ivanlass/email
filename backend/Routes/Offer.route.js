const router = require('express').Router()
const Offer = require('../Models/Offer.model')


router.route('/').get((req, res) => {
    Offer.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error' + err))
})


router.route('/add').post((req, res) => {
    const offer = req.body.offer
    const newOffer = new Offer({offer})
    newOffer.save()
    .then(() => res.json('Offer added'))
    .catch(err => res.status(400).json('Error' + err))
})


router.route('/delete').delete((req, res) => {
    Offer.findByIdAndDelete(req.body.id)
    Offer.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error' + err))
})




module.exports = router