const ftoc = function(temp) {
  let convertedTemp = (temp - 32) * 5 / 9;
  return +convertedTemp.toFixed(1);
};

const ctof = function(temp) {
  let convertedTemp = temp * 9 / 5 + 32;
  return +convertedTemp.toFixed(1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
