/////////////////
// Exercise 1 //
// Create a function that takes a number as its only argument
// and returns true if it's less than or equal to zero,
// otherwise return false.

const lessThanOrEqualToZero = (num) => {
  return (num <= 0)
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


/////////////////
// Exercise 3 //
//Create a function that takes an array of positive numbers and strings
// and returns a new array without the strings. In other words,
// remove all strings from an array of elements.

const filterArray = (arr) => {
  return arr.filter(number => typeof number === 'number')
};