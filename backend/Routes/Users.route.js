const router = require('express').Router()
const User = require('../Models/User.model')
const csvtojson = require("csvtojson");
var multer  = require('multer')
var upload = multer()
const csv = require('csv-parser');
const fs = require('fs');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error' + err))
})

router.post('/add', upload.single('file'), function (req, res, next) {
    const {username, password, role} = req.body
    const newUser = new User({ username, password, role })
    fs.createReadStream(req.file.buffer)
    .pipe(csv())
    .on('data', (row) => {
      console.log(row);
    })
    .on('end', () => {
      console.log('CSV file successfully processed');
    });
    // newUser.save()
    //     .then(() => res.json('User added'))
    //     .catch(err => res.status(400).json('Error' + err))
  })








router.route('/login').post((req, res) => {
    const username = req.body.username
    const password = req.body.password
    User.find({ username, password })

        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error' + err))

})

module.exports = router