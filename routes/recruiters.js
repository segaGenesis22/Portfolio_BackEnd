const express = require('express')
const router = express.Router()
const Recruiter = require('../models/recruiter')

//Getting all 
router.get('/', async (req, res) => {
    try {
        const recruiters = await Recruiter.find()
        res.json(recruiters)
    } catch (err){
        res.status(500).json({message: err.message})
    } 
})

//Getting one
router.get('/:id', getRecruiter, (req, res) => {
    res.json(res.recruiter)
})

//Creating one 
router.post('/', async (req, res) => {
    const recruiter = new Recruiter({
        name: req.body.name, 
        email: req.body.email,
        number: req.body.number,
        employer: req.body.employer
    })
    try {
        const newRecruiter = await recruiter.save()
        res.status(201).json(newRecruiter)
    } catch(err) {
        res.status(400).json({message: err.message})
    }
})

//Updating one
router.patch('/:id', getRecruiter, async (req, res) => {
    if(req.body.name != null ) {
        res.recruiter.name = req.body.name
    }
    if(req.body.email != null ) {
        res.recruiter.email = req.body.email
    }
    if(req.body.number != null ) {
        res.recruiter.number = req.body.number
    }
    if(req.body.employer != null ) {
        res.recruiter.employer = req.body.employer
    }
    try {
        const updatedRecruiter = await res.recruiter.save()
        res.json(updatedRecruiter)
    } catch(err) {
        res.status(400).json({message: err.message})
    } 
})

//Deleting one
router.delete('/:id', getRecruiter, async (req, res) => {
    try{
        await res.recruiter.remove()
        res.json({message: 'Deleted recruiter'})
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})

async function getRecruiter(req, res, next) {
    let recruiter 
    try {
        recruiter = await Recruiter.findById(req.params.id)
        if(recruiter == null) {
            return res.status(404).json({message: 'Cannot find that recruiter'})
        }
    } catch(err) {
        res.status(500).json({message: err.message})
    }
    res.recruiter = recruiter
    next()
}

module.exports = router 