const mongoose = require('mongoose')

const recruitersSchema = new mongoose.Schema({
    name: {
        type: String,
        default: 'Genesis'
    },
    email: {
        type: String,
        default: 'guerra@gmail.com'
    },
    number: {
        type: String,
        default: '9784296264'
    },
    employer: {
        type: String,
        default: 'LPS'
    }
})

module.exports = mongoose.model('Recruiter', recruitersSchema)