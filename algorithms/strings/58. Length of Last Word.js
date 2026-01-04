/**
 * @param {string} s
 * @return {number}
 */

//We need to iterate from end of the string to find last word;
//Space character ' ' must be ignore at the end;
//When index of string find letter letterCount start to count;
//If s[i] is again ' ' and letterCount > 0 (this means that we found first word from the end), so that we can break the loop;
var lengthOfLastWord = function(s) {
    let letterCount = 0;
    let lastWordEndsAt = 0;
    for(let i = s.length-1; i >= 0; i--){
        if(s[i] == ' ' && letterCount > 0)
            break;

        if(s[i] == ' ')
            i--;

        if(/^[A-Za-z]+$/.test(s[i])){
            if(letterCount == 0)
                lastWordEndsAt = i;
            letterCount++;
        }
         
    }

    return letterCount;
};