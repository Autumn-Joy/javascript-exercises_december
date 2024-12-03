function repeatString(string, num) {
  let result;
  if (num < 0) {
    result = 'ERROR';
  }
  else if (num == 0) {
    result = '';
  }
  else {
    result = string;
    let i = 1;
    while (i < num) {
      result += string;
      i++;
      }
  }
  return result;
};

repeatString();

// Do not edit below this line
module.exports = repeatString;
