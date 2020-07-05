const router = require('express').Router()
const Recievers = require('../Models/Recievers.model')
var multer = require('multer')
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const upload = multer({ dest: "../recieversEmailsLists" })

router.route('/').get((req, res) => {
  Recievers.find({}, "_id, listName")
    .then(recievers => res.json(recievers))
    .catch(err => res.status(400).json('Error' + err))
})




router.post('/add', upload.single('file'), function (req, res, next) {
  const listName = req.body.listName
  let recieversEmailList = []
  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on('data', (row) => {
      recieversEmailList.push(row)
    })
    .on('end', () => {
      console.log('CSV file successfully processed');
    });
  setTimeout(() => {
    const newRecieversList = new Recievers({ listName, list: recieversEmailList })
    newRecieversList.save()
      .then((recievers) => {
        Recievers.find({}, "_id, listName")
          .then(recievers => res.json(recievers))
          .catch(err => res.status(400).json('Error' + err))
      })
      .catch(err => res.status(400).json('Error' + err))
  }, 555);

})




router.route('/delete').delete((req, res) => {
  Recievers.findByIdAndDelete(req.body.id)
  Recievers.find()
    .then(recievers => res.json(recievers))
    .catch(err => res.status(400).json('Error' + err))
})



module.exports = router