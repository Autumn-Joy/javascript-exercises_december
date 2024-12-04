const leapYears = function(year) {
  let output;
  if (year%100 == 0 && year%400 !== 0) {
    output = false;
  } else if (year%400 == 0) {
    output = true;
  } else if (year%4 == 0) {
    output = true;
  } else {
    output = false;
  }
  return output;
};

// Do not edit below this line
module.exports = leapYears;
