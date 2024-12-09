const fibonacci = function(InputNumber) {
  if (InputNumber < 0) {
    return "OOPS"
  } else {
    let NumberArray = [1, 1];

    for (let i = 0; i <= InputNumber; i++) {
      NumberArray.push((NumberArray[NumberArray.length - 1]
      + NumberArray[NumberArray.length - 2]));
    };
    NumberArray.unshift(0);
    return NumberArray[InputNumber];
  };
};

// Do not edit below this line
module.exports = fibonacci;
