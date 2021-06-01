const express = require('express');
const multer = require('multer');

const upload = multer({ dest: 'public/uploads/' });

const router = express.Router();




const uploadExpenses = require("./expense.js");





router.post('/expense',
	upload.fields([
		{ name: 'expenses', maxCount: 1 },
	]),
	uploadExpenses
);

router.post('/categories',	
	upload.fields([
		{ name: 'categories', maxCount: 1 },
	]),
	uploadExpenses
);

module.exports = router;