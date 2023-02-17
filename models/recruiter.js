const mongoose = require('mongoose')

const recruitersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    employer: {
        type: String, 
        required: true
    }
})

module.exports = mongoose.model('Recruiter', recruitersSchema)