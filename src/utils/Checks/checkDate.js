/**
 * Checks for regex #/#/#
 * 
 */


function checkDate(date) {
    return /[0-9]+\/[0-9]+\/[0-9]+/.test(date)
}

module.exports = { checkDate }