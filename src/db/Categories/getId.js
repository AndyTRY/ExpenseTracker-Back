const db = require('~/db')


async function getCategoryID(category){
    const { rows } = await db.query({
		text: `
			select
                category_id, name
			from categories where name = $1
		`,
		values: [category],
	});
    return rows
}

module.exports = getCategoryID
