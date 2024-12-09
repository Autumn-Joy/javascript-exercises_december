const add = function(...addedItems) {
  let total = 0;
  for (let item of addedItems) {
    total += item;
  }
  return total;
};

const subtract = function(...subtractedItems) {
  let total = subtractedItems[0];
  subtractedItems.shift();
  for (let item of subtractedItems) {
    total -= item;
  }
  return total;
};

const sum = function(...summedItems) {
  let total = 0;
  for (let array of summedItems) {
    for (let item of array) {
      total += item;
  }
  return total;
};
};

const multiply = function(...multipliedItems) {
  let total = 1;
  for (let array of multipliedItems) {
  for (let item of array) {
    total *= item;
  }
  return total;
  };
};

const power = function(...powerItems) {
  let total = Math.pow(powerItems[0], powerItems[1])
  return total;
};

const factorial = function(number) {
  let total = 1;
  if (number == 0) {
    total = 1;
  } else {
    total = 1;
    for (number; number > 0; number--) {
      total *= number;
    };
  };
  return total;
};

factorial(2);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
