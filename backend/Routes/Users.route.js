const router = require('express').Router()
const User = require('../Models/User.model')
var multer  = require('multer')

const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');


const upload= multer({dest: "../emailforsending"})

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error' + err))
})



router.post('/add', upload.single('file'), function (req, res, next) {
    const {username, password, role} = req.body
    let mailoviZaSlanje = []
    fs.createReadStream(req.file.path)
    .pipe(csv())
    .on('data', (row) => {
      mailoviZaSlanje.push(row)
    })
    .on('end', () => {
      console.log('CSV file successfully processed');
    });
    setTimeout(() => {
      const newUser = new User({ username, password, role, mailoviZaSlanje })
      newUser.save()
          .then(() => res.json('User added'))
          .catch(err => res.status(400).json('Error' + err))
    }, 555);

  })




router.route('/login').post((req, res) => {
    const username = req.body.username
    const password = req.body.password
    User.find({ username, password })

        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error' + err))

})

module.exports = router