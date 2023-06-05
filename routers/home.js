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

router.get('/:regnum', async(req, res) => {
    try{
        const stud = await Student.findOne({ regno : req.params.regnum})
        if(stud == null){
            res.end("Data don't Exist!")
            return
        }
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
        console.log("Error: " + err);
    }
})

router.patch('/:regno', async(req, res) => {
    try{
        const stud = await Student.findOneAndUpdate({ regno : req.params.regno },  req.body, {new: true})

        if(stud==null){
            res.write("Student doesn't exist!")
            res.send()
            return
        }
        res.json(await Student.findOne({regno : req.params.regno}))
    }catch(err){
        console.log("Error: " + err)
    }
})

router.delete('/:regno', async(req, res) => {
    try{
        const ans = await Student.deleteOne({ regno : req.params.regno})
        if(ans==null){
            res.end("Student doesn't exist!")
        }
        else{
            res.end("Data deleted Successfully!")
        }

    }catch(err){
        console.log("Error: " + err)
    }
})

module.exports = router
