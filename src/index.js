require('module-alias/register')
require('dotenv').config()
const express = require('express');
const path = require('path');
const app = express();


const uploadRouter = require("~/routes/Uploads")
const sellerRouter = require("~/routes/Seller")
const manufacturerRouter = require("~/routes/Manufacturer")
const expenseRouter = require("~/routes/Expenses")
const categoryRouter = require("~/routes/Categories")

/*
const convertDate = require('~/utils/Reformat/convertDate')
date = "1/29/2017"
dateC = convertDate(date)
console.log(dateC)
*/



//MidlleWare
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//set static folder
app.use(express.static('public'));

app.use('/upload', uploadRouter);
app.use('/seller', sellerRouter);
app.use('/manufacturer', manufacturerRouter);
app.use('/expense', expenseRouter);
app.use('/category', categoryRouter);



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
