const db = require('~/db')


async function getSellerID(seller){
    const { rows } = await db.query({
		text: `
			select
                seller_id, name
			from seller where name = $1
		`,
		values: [seller],
	});
    return rows
}

module.exports = getSellerID