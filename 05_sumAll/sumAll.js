const sumAll = function(num1, num2) {
    if (typeof num1 != "number" || typeof num2 != "number") return "ERROR";
    if (num1 < 0 || num2 < 0) return "ERROR";
    let sum = num1 + num2;
    if (num1 > num2) {
        let tempNum = num1;
        num1 = num2;
        num2 = tempNum;
    }
    for (let i = num1 + 1; i < num2; i++){
        sum += i;
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
