const db = require('~/db')


async function getExpenseID(expense){
    const { rows } = await db.query({
		text: `
			select
                expense_id, name
			from expenses where name = $1
		`,
		values: [expense],
	});
    return rows
}

module.exports = getExpenseID
