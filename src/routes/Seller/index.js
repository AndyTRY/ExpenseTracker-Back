const express = require('express')
const router =  express.Router()

const addSeller = require('./add')

router.post('/add', addSeller)

module.exports = router