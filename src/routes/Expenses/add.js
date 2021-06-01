const addExpenseD = require('~/db/Expenses/add');

/**
 * Add Expense 
 * @path {POST} /Expense/add
 * @params {string} name - name of Expense
 * @params {decimal} price - price of Expense
 * @params {string} date - date of Expense
 * 
 * 
 */

async function addExpense(req, res) {
	    await addExpenseD({
		name : req.body.name,
		price : req.body.price,
		date : req.body.date

	});

	await res.sendStatus(200);
}
module.exports = addExpense;