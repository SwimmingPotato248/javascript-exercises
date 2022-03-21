const reverseString = function(string) {
    let reversedString = "";
    let i = string.length; 
    for (;i >= 0; i--) {
        reversedString += string.charAt(i);
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
