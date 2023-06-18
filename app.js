// DB Connection

const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const url = process.env.url

const app = express()

mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
const con = mongoose.connection

con.on('open', function(){              // Callback as normal function
    console.log('Connected...')
})

app.use(express.json())

const homeRouter = require('./routers/home')
app.use('/home', homeRouter)

app.listen(process.env.port, () => {                // Callback as arrow function
    console.log('Server Started!')
})

