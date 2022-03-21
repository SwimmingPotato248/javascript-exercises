const removeFromArray = function(array = [], ...pos) {
    for (let i = 0; i < pos.length; i++) {
        const num = pos[i];
        const index = array.indexOf(num);
        if (index < 0) continue;
        array.splice(index, 1);
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
