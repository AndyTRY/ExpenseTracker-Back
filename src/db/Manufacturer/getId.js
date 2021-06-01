const db = require('~/db')


async function getManufacturerID(manufacturer){
    const { rows } = await db.query({
		text: `
			select
                manufacturer_id, name
			from manufacturer where name = $1
		`,
		values: [manufacturer],
	});
    return rows
}

module.exports = getManufacturerID