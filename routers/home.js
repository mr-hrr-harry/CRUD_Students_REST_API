const express = require('express')
const router = express.Router()
const Student = require('../DBmodel/schema')

router.get('/', async(req, res) => {         // Get request
    try{
        const stud = await Student.find()       // await <=> async
        res.json(stud)
    }catch(err){
        console.log("Error: " + err)
    }
})

module.exports = router