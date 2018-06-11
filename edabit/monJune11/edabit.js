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

/////////////////
// Exercise 4 //
//Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa!
// Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th)
// and false otherwise. Keep in mind JavaScript's Date month is 0 based,
// meaning December is the 11th month while January is 0.

const timeForMilkAndCookies = (date) => {
  return date.getMonth() === 11 && date.getDate() === 24;
};

/////////////////
// Exercise 5 //
// Create a function that takes a number as an argument.
// Add up all the numbers from 1 to the number you passed to the function.
// For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

const addUp = (num) => {
  let base = 0;
  let sum = 0;
  while (base <= num){
    sum += base;
    base++
  }
  return sum;
};