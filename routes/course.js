const express = require('express')
const router = express.Router()
const fs = require('fs/promises')
const db = require('../db')

router.get('/', async (req, res) => {
    let courses = await db.getCourseCollection().find().toArray()
    res.send(courses)
})

router.post('/:code', async (req, res) => {
    // TODO: Given a (case-insensitive) course code, return its data
})

router.get('/:code/terms', async (req, res) => {
    // TODO: Return a list of terms a course is offered in

})

router.get('/term/:term', async (req, res) => {
    // TODO: Given a term "T1", "T2", "T3", return a list of all course codes
    // which are offered in that term.
})

router.post('/add', async (req, res) => {
    // TODO: Add a course (in the same format as the existing courses) to the database
})

router.post('/delete', async (req, res) => {
    // TODO: Given a (case-insensitive) course code, remove it from the database if it exists
})

router.post('/update', async(req, res) => {
    // TODO: Update the given course details in the database.
})

router.post('/isunlocked', async(req, res) => {
    // TODO: Given a course code and a list of courses you have completed, 
    // determine if the given course has been unlocked.
    // "OR" means doing any one of the prerequisites will unlock it
    // "AND" means you must do all the prerequisites to unlock it
})


// TODO: Any other endpoints you might want to try writing! What would someone
// calling this pseudo handbook API want?


module.exports = router