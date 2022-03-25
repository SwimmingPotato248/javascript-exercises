const fibonacci = function(member) {
    let sequence = [1, 1];
    member = +member;
    if (member < 0) return "OOPS";
    for (let i = 2; i < member; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    };
    return sequence[member - 1];
};

// Do not edit below this line
module.exports = fibonacci;
