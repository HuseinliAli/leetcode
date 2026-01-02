/**
 * @param {number} x
 * @return {boolean}
 */

// For example: [1] [2] [3] [1]
// 1st step: text[0] == text[3] so, 1 == 1 => true
// 2nd step: text[1] == text[2] so, 2 == 3 => false

var isPalindrome = function(x) {
    let text = x.toString();
    
    for(let i = 0; i < text.length/2; i++){
        if(text[i] != text[text.length-i-1])
            return false;
    }
    return true;
};