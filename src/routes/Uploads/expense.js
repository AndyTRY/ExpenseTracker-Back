const { expect } = require('chai');
const fs = require('fs');
const extractExpenses = require('~/utils/Extraction/extractExpenses') //FIX : '~/utils/Extraction/extractExpenses'


async function uploadExpenses(req, res) {
    console.log("called");
	expect(req.files.expenses, 'file needed').to.exist;
    const expensesFile = req.files.expenses[0];

    //console.log(expensesFile);
    console.log(expensesFile.path);

    await extractExpenses(expensesFile.path)
    //fs.unlinkSync(expensesFile.path);
    await res.json(200);
}
module.exports = uploadExpenses;
