const removeFromArray = function(array, ...elements) {
  const filteredArray = array.filter(items => !elements.includes(items));
  return filteredArray;
};
// Do not edit below this line
module.exports = removeFromArray;
