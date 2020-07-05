const router = require('express').Router()
const Offer = require('../Models/Offer.model')


router.route('/').get((req, res) => {
    Offer.find()
        .then(offers => res.json(offers))
        .catch(err => res.status(400).json('Error' + err))
})





router.route('/add').post((req, res) => {
    const offer = req.body.offer
    const newOffer = new Offer({offer})
    newOffer.save()
    .then((offer) =>{
        Offer.find()
        .then(offers => res.json(offers))
        .catch(err => res.status(400).json('Error' + err))
    })
    .catch(err => res.status(400).json('Error' + err))
})





router.route('/delete').delete((req, res) => {
    console.log(req.body.id)
    Offer.findByIdAndDelete(req.body.id, function( err, docs) { 
        if (err){ 
            console.log(err) 
        } 
        else{ 
            Offer.find()
        .then(offers => res.json(offers))
        .catch(err => res.status(400).json('Error' + err))
        } 
    }); 
})




module.exports = router