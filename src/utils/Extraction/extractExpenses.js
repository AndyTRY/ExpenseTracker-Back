const fs = require('fs')

const addExpenseDB_updateNew = require('~/db/Expenses/add_upadateNew')
const addExpenseD = require('~/db/Expenses/add')
const add_Expense_Category = require('~/db/Junction/addEntry')
const getCategoryID = require('~/db/Categories/getId')
const getSellerID = require('~/db/Seller/getId')
const getManufacturerID = require('~/db/Manufacturer/getId')


const { checkDate } = require('~/utils/Checks/checkDate')
const convertDate = require('~/utils/Reformat/convertDate')
const reformatExpense = require('~/utils/Reformat/reformatExpense')


function extractExpenses(filePath){
    console.log("inside extractExpense function")
    //console.log(filePath)




    fs.readFile(filePath, 'utf8', (err,data) => {
        if (err) {
            console.error(err)
            return
        }
        insertExpense(data)
    })

    
}

async function insertExpense(data){
    console.log(data)
    dataLines = data.split('\r\n');

    for (var i = 0;i< dataLines.length;i++){
        console.log(i)
        expense = dataLines[i].split(',')
        if (checkDate(expense[2])){
            
            expense = reformatExpense(expense)

            // Add New (Sellers, Manufacturers, Categories) not seen before
            categories = await addExpenseDB_updateNew(expense)



            // Add expense
            sellerId = await getSellerID(expense[3])
            manufacturerId = await getManufacturerID(expense[4])
            
            
            /*
            console.log("SellerId", sellerId)
            console.log("SellerId", sellerId[0]["seller_id"])
            console.log("ManufacturerId", manufacturerId)
            */

            expense_id = await addExpenseD({
                name : expense[0],
                price : Number(expense[1].substring(1)),
                date : convertDate(expense[2]),
                manufacturer_id : manufacturerId[0]["manufacturer_id"],
                seller_id : sellerId[0]["seller_id"]

            });
            
            
            for (var j = 0;j< categories.length;j++){
                category_id = await getCategoryID(categories[j])
                await add_Expense_Category({expense_id : expense_id, category_id : category_id[0]["category_id"]})
            }
            
            
            
        } 
        
    }
    

}



module.exports = extractExpenses;