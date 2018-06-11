/////////////////
// Exercise 1 //
// Create a function that takes a number as its only argument
// and returns true if it's less than or equal to zero,
// otherwise return false.

const lessThanOrEqualToZero = (num) => {
  if (num <= 0) {
    return true
  } else {
    return false
  }
};

/////////////////
// Exercise 2 //
// Create a function that takes an array of strings.
// Return all words in the array that are exactly four letters.

const isFourLetters = (arr) => {
  return arr.filter( (word) => {
    return word.length === 4;
  })
};
