/**
 * Reformats MM/DD/YYYY to YYYY-MM-DD 
 * 
 * Ex/
 * covertDate('4/5/2021') => 2021-5-4
 * 
 */



function convertDate(date){
    var dateSplit = date.split('/')
    dateSplit.unshift(dateSplit.pop())
    return dateSplit.join("-")
}

module.exports = convertDate