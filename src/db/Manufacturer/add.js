const db = require("~/db")


async function addManufacturer({manufacturer}){
    const {
		rows: [{ id }],
	} = await db.query({
		text: `insert into manufacturer
			(name)
		    values ($1)
		returning manufacturer_id;
        `,
		values: [manufacturer],
	});
	return id;
}

module.exports = addManufacturer