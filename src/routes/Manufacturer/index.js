const express = require('express')
const router =  express.Router()

const addManufacturer= require('./add')

router.post('/add', addManufacturer)

module.exports = router