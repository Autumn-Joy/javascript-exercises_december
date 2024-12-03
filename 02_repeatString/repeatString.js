function repeatString(string, num) {
  let result = string
  let i = 1
  while (i < num) {
    result += string;
    i++;
  }
  return result;
};

repeatString();

// Do not edit below this line
module.exports = repeatString;
