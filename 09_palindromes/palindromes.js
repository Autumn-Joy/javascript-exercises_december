const palindromes = function (string) {
  //make an array of the word:
  let wordArray = string.toLowerCase.split("")

  //form a reversed copy of the array:
  let reversedWordArray = wordArray.toReversed();

    //simple conditional checks for palindrome-ness:
  if (wordArray.join('') === reversedWordArray.join('')) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
