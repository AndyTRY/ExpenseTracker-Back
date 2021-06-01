const db = require('~/db')

async function add_Expense_Category({expense_id,category_id}){

    await db.query({
		text: `insert into junction_expense_category
			(expense_id, category_id)
		    values ($1, $2)
        `,
		values: [expense_id, category_id],
	});
	
}

module.exports = add_Expense_Category