
///////////////////////////
// Exercise 1
// Create a function that takes two numbers as arguments and return their sum.

function addition(a, b) {
  let sum = a + b;
  return sum
}

//////////////////////////
// Exercise 2
// Create a function that takes a number as an argument and returns "even" for even numbers
// and "odd" for odd numbers.

function isEvenOrOdd(num) {
  if (num % 2 == 0) {
    return "even"
  } else {
    return "odd"
  }
}

//////////////////////////
// Exercise 3
// Create a function that takes a string and returns the word count.
// The string will be a sentence.

function countWords(str) {
  let wordsInString = str.split(" ").length;
  return wordsInString;
}

//////////////////////////
// Exercise 4
// Create a function that reverses a boolean value
// and returns the string "boolean expected" if another variable type is given.

function reverse(bool) {
  if (bool === true) {
    return false
  } else if (bool === false) {
    return true
  } else {
    return "boolean expected"
  }
}

//////////////////////////
// Exercise 5
// Create a function that takes an array of numbers and returns the smallest number in the set.

const findSmallestNum = (arr) => {
  return Math.min(...arr);
};

//////////////////////////
// Exercise 5
// Create a function that accepts a string (of a persons first and last name)
// and returns a string with the first and last name swapped.

const nameShuffle = (str) => {
  return str.split(" ").reverse().join(" ");
};

//////////////////////////
// Exercise 6
// Create a function that accepts an array and returns the last item in the array.

const getLastItem = (arr) => {
  return arr[arr.length -1];
};

//////////////////////////
// Exercise 7
// Create a function that takes two strings and returns true if the first argument ends with the second argument;
// otherewise return false .

const checkEnding = (str1, str2) => {
  return str1.endsWith(str2)
};