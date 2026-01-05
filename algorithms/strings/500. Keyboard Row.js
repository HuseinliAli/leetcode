/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let keyboardLetters = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
    let foundWords = [];
    for(let i = 0; i < words.length; i++){
        let rowIndex = -1;
        for (let r = 0; r < keyboardLetters.length; r++) {
            for (let c = 0; c < keyboardLetters[r].length; c++) {
                if (keyboardLetters[r][c] === words[i][0].toLowerCase()) {
                    rowIndex = r;
                    break;
                }
            }
            if (rowIndex !== -1) break;
        }

        let isValid = true;
        if (rowIndex === -1) continue;
        for (let j = 1; j < words[i].length; j++) {
            let found = false;

            for (let k = 0; k < keyboardLetters[rowIndex].length; k++) {
                if (keyboardLetters[rowIndex][k] === words[i][j].toLowerCase()) {
                    found = true;
                    break;
                }
            }

            if (!found) {
                isValid = false;
                break;
            }
        }

        if(isValid){
            foundWords.push(words[i])
        }
    };
    return foundWords;
}