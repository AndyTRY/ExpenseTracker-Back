const addManufacturerD = require('~/db/Manufacturer/add');

/**
 * Add Manufacturer 
 * @path {POST} /Manufacturer/add
 * @params {string} Manufacturer - name of Manufacturer
 */

async function addManufacturer(req, res) {
	    await addManufacturerD({
			manufacturer : req.body.manufacturer,
	});

	await res.sendStatus(200);
}
module.exports = addManufacturer;