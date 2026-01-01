/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

//s.length/2: we iterate only half of the array because each swap affects two element
//temp holds s[i]'s value to avoid losing it;
//s[i] is now available to assign new value;
//s[i]'s value(temp) assigns to s[s.length-i-1] element of array;

//before method:
//['h']['e']['l']['l']['o']
//after method:
//1st step: ['o']['e']['l']['l']['h']  => 'o' & 'h' swapped
//2nd step: ['o']['l']['l']['e']['h'] => 'e' & 'l' swapped
var reverseString = function(s) {
    for(let i = 0; i < s.length/2; i++){
        let temp = s[i];
        s[i] = s[s.length - i - 1];
        s[s.length - i - 1] = temp;
    }
};