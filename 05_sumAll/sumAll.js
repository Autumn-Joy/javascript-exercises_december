const sumAll = function(start, end) {
  let finalSum = 0;
  if (start < 0 || end < 0) {
    return "ERROR";
  } else if (typeof start != 'number' || typeof end != 'number') {
    return "ERROR";
  } else if (!Number.isInteger(start) || !Number.isInteger(end)) {
    return "ERROR";
  } else if (start < end) {
    let counter = start;
    for (counter; counter <= end; counter++) {
      finalSum += counter;
    }
    console.log(finalSum);
    return finalSum;
  } else if (start > end) {
    counter = end;
    for (counter; counter <= start; counter++) {
      finalSum += counter;
    }
    console.log(finalSum);
    return finalSum;
  }
};

sumAll(2, 10);

// Do not edit below this line
module.exports = sumAll;
