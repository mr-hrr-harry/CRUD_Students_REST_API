const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017/HarryDB'

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

app.listen(3737, () => {                // Callback as arrow function
    console.log('Server Started!')
})

