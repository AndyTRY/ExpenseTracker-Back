const isEmpty = require('~/utils/Checks/isEmpty')

const getSellerID = require('~/db/Seller/getId')
const getManufacturerID = require('~/db/Manufacturer/getId')
const getCategoryID = require('~/db/Categories/getId')

const addSeller = require('~/db/Seller/add')
const addManufacturer = require('~/db/Manufacturer/add')
const addCategory = require('~/db/Categories/add')



async function addExpenseDB_checkNew(expense){
    const seller = expense[3];
    const manufacturer = expense[4];
    const categories = expense.splice(5,expense.length - 5)

    /*
    console.log("Manufacturer",await getManufacturerID(manufacturer))
    console.log("Manufacturer",isEmpty(await getManufacturerID(manufacturer)))
    */

    if (isEmpty(await getSellerID(seller))) await addSeller({seller : seller})
    if (isEmpty(await getManufacturerID(manufacturer))) await addManufacturer({manufacturer: manufacturer})

    for (var i = 0;i< categories.length;i++){
        if (isEmpty(await getCategoryID(categories[i])))   await addCategory({category: categories[i]})      
    }
    
    return categories

}

module.exports = addExpenseDB_checkNew