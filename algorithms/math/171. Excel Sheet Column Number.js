/**
 * @param {string} columnTitle
 * @return {number}
 */

/* Excel corresponding number calculation explanation:
    ABC = 731
    A = columnNumber*26 + charCodeOfTheLetter => 0*26 + 1 = 1 (we keep this result for next one)
    AB = 1*26 + 2(charCodeOfB) = 28 (we keep this result for next one)
    ABC = 28*26 + 3(charCodeOfC) = 731
*/
var titleToNumber = function(columnTitle) {
    let lastColumnNumber = 0;
    let columnNumber = 0;
    for(let i = 0; i < columnTitle.length; i++){
        let charCodeToOrderedNumber = columnTitle.charCodeAt(i) - 64;
        lastColumnNumber = columnNumber*26 + charCodeToOrderedNumber
        columnNumber = lastColumnNumber;
    }

    return columnNumber;
};