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

const multiply = function() {

};

const power = function() {

};

const factorial = function() {

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
