const fibonacci = function(InputNumber) {
  let FibonacciArray = [];

  let OriginalNumber = InputNumber;
  let firstNumber = (OriginalNumber -1);
  let secondNumber = (OriginalNumber -2);
  let iteration = InputNumber;
  for (iteration; iteration <= 100; iteration++) {
    // if (firstNumber <= 0) {
    //   firstNumber = 0;
    // };
    // if (secondNumber <= 0) {
    //   secondNumber = 0;
    // ;}
    if (inputNumber == 1) {
      firstNumber = 0;
      secondNumber = 1;
    }
    let FibonacciNumber = firstNumber + secondNumber;
    FibonacciArray.push(FibonacciNumber)
    console.log(FibonacciNumber);
  };
  console.log(FibonacciArray)
  return FibonacciArray
};

fibonacci(1);

// Do not edit below this line
// module.exports = fibonacci;
