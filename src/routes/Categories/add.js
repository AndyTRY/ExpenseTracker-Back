const addCategoryD = require('~/db/Categories/add');

/**
 * Add Category 
 * @path {POST} /Category/add
 * @params {string} Category - name of Category
 */

async function addCategory(req, res) {
	    await addCategoryD({
		category : req.body.category,
	});

	await res.sendStatus(200);
}
module.exports = addCategory;