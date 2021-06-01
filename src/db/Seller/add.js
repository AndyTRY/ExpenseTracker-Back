const db = require("~/db")


async function addSeller({seller}){
    
    const {
		rows: [{ id }],
	} = await db.query({
		text: `insert into seller
			(name)
		    values ($1)
		returning seller_id;
        `,
		values: [seller],
	});
    console.log("SELLER ADDED", id)
	return id;
}

module.exports = addSeller