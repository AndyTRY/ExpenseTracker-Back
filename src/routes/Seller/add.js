const addSellerD = require('~/db/Seller/add');

/**
 * Add seller 
 * @path {POST} /seller/add
 * @params {string} seller - name of seller
 */

async function addSeller(req, res) {
	    await addSellerD({
		seller : req.body.seller,
	});

	await res.sendStatus(200);
}
module.exports = addSeller;