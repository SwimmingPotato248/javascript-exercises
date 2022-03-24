const palindromes = function (word) {
    word = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    word = word.replace(/\s+/g,"");
    const wordSplit = Array.from(word);
    const reversed = [];
    for (i = wordSplit.length - 1; i >= 0; i--) {
        reversed.push(wordSplit[i]);
    }
    const wordSplitString = wordSplit.toString();
    const reversedString = reversed.toString();
    if (wordSplitString.toLowerCase() === reversedString.toLowerCase()) {
        return true;
    };
    return false;
    
};

// Do not edit below this line
module.exports = palindromes;
