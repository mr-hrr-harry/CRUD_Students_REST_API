const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    regno:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    specilalisation: {
        type: String,
        required: true
    },
    cgpa: {
        type: String,
        required: true
    },
    eligiblity: {
        type: Boolean,
        required: true,
        default: true
    }
})

module.exports = mongoose.model('Student', studentSchema)