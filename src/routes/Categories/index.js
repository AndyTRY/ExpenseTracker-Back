const express = require('express')
const router =  express.Router()

const addCategory = require('./add')

router.post('/add', addCategory)

module.exports = router