const express = require('express')
const router =  express.Router()

const addExpense = require('./add')

router.post('/add', addExpense)

module.exports = router