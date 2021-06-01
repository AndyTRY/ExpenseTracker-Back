const db = require("~/db")


 async function addCategory({category}){
    
    console.log(category)
    const {
		rows: [{ id }],
	} = await db.query({
		text: `insert into categories
			(name)
		    values ($1)
		returning category_id;
        `,
		values: [category],
	});
	return id;
}

module.exports = addCategory