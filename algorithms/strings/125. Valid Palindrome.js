/**
 * @param {string} s
 * @return {boolean}
 */
 
function clearTextFromOtherSymbols(text) {
    text = text.toString().toLowerCase();
    let cleanedText = "";
    for(let i = 0; i< text.length; i++){
        if((text.charCodeAt(i) >= 97 && text.charCodeAt(i)<= 122)
         || (text.charCodeAt(i) >=48 && text.charCodeAt(i) <=57))
            cleanedText += text[i];
    }
    return cleanedText;
}
var isPalindrome = function(s) {
    let text = clearTextFromOtherSymbols(s);
    
    for(let i = 0; i < text.length/2; i++){
        if(text[i] != text[text.length-i-1])
            return false;
    }
    return true;
};
