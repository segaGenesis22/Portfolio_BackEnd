const mongoose = require('mongoose')

const recruitersSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    number: {
        type: String,
        require: true
    },
    employer: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Recruiter', recruitersSchema)