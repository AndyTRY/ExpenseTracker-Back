const db = require("~/db")


async function addExpense({name, price, date, manufacturer_id, seller_id}){
    
    const {
		rows: [{ expense_id }],
	} = await db.query({
		text: `insert into expenses
			(name, price, date, manufacturer_id, seller_id)
		    values ($1, $2, $3, $4, $5)
		returning expense_id;
        `,
		values: [name, price, date, manufacturer_id, seller_id],
	});
	return expense_id;
}

module.exports = addExpense