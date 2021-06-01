
/**
 * Reformats Expense to remove empty items 
 * 
 * Ex/
 * expense = [Cloth, $10, 1/1/2021, Amazon, Amazon, Household, , , , ,]
 * expense = reformatExpense(expense)
 * expense = [Cloth, $10, 1/1/2021, Amazon, Amazon, Household]
 * 
 */


function reformatExpense(expense){
    index = expense.indexOf('')
    if (index > 0) {
        expense.splice(index, expense.length - index)
    }
    return expense
}

module.exports = reformatExpense