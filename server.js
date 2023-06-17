require("dotenv").config();

const express = require('express')
const app = express()

const cors = require('cors')
const bodyParser = require('body-parser')
const recruitersRouter = require('./routes/recruiters')

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
mongoose.set('strictQuery', false)

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to MongoDB Database'))

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.use('/recruiters', recruitersRouter)
app.listen(process.env.PORT || 3001, () => console.log('Server Started')) 