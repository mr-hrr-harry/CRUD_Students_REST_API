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

router.post('/', async(req, res) => {
    const stud = new Student({
        regno: req.body.regno,
        name: req.body.name,
        gender: req.body.gender,
        specialisation: req.body.specialisation,
        cgpa: req.body.cgpa,
        eligiblity: req.body.eligiblity
    })

    try{
        await stud.validate()
        const s1 = await stud.save()
        res.json(s1)
    }catch(err){
        console.log('Error: ' + err);
    }
})

module.exports = router