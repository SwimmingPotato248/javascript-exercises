const findTheOldest = function(people) {
    const oldest = people.sort((a, b) => {
        let lastGuy;
        if (a.yearOfDeath === undefined) {
            lastGuy = (new Date().getFullYear()) - a.yearOfBirth;
        } else lastGuy = a.yearOfDeath - a.yearOfBirth;
        let nextGuy;
        if (b.yearOfDeath === undefined) {
            nextGuy = (new Date().getFullYear()) - b.yearOfBirth;
        } else nextGuy = b.yearOfDeath - b.yearOfBirth;
        return lastGuy > nextGuy ? -1 : 1;
    })
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
