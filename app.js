const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1/HarryDB'

const app = express()

mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
const con = mongoose.connection

con.on('open', function(){
    console.log("Connected...")
})

