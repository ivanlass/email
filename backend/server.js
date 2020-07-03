const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')


const app = express()
const port = process.env.PORT || 5000
app.use(cors())
app.use(express.json())


const uri = "mongodb+srv://ivan:ivan@mailreader-pw9x4.mongodb.net/<dbname>?retryWrites=true&w=majority"
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
const connection = mongoose.connection
connection.once('open', () => {
    console.log('mongo konekcija ok')
})

const offerRouter = require('./routes/Offer.route')
const usersRouter = require('./Routes/Users.route')
const recieversRouter = require('./Routes/Recievers.route')

app.use('/offer', offerRouter)
app.use('/users', usersRouter)
app.use('/recievers', recieversRouter)

app.listen(port, () => {
    console.log(`port je ${port}`)
})