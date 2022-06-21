/**
 * EXAMPLE: simple sum
 */
export const addTwoNumbers = (x, y) => x + y;

/** EXERCISE 1
 * Write a function to sum numbers in an array
 * input: [1,2,3,4,5]
 * output: 15
 */
export const sumNumbersInArray = (numbers) => {
  return numbers.reduce((a, b) => a + b, 0);
};

/** EXERCISE 2
 * Write a function that returns only the prime numbers of a given array
 */
export const getPrimeNumbers = (numbers) => {
  return numbers.filter(isPrime);
};

const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};

/** EXERCISE 3
 * Return the reversed input string
 */
export const reverseString = (inputString) => {
  let tempString = "";
  for (let i = inputString.length; i > 0; i--) {
    tempString += inputString[i - 1];
  }
  return tempString;
};

/** EXERCISE 4
 * Refactor addTwoNumbers functions for work with number and string
 */

export const addTwoNumbersOrNumberString = (x, y) => {
  if (typeof x === "string") {
    x = parseInt(x);
  }
  if (typeof y === "string") {
    y = parseInt(y);
  }
  return addTwoNumbers(x, y);
};

/** EXERCISE 5
 * Write a function to find the area and perimeter of a Circle
 */
export const circleValues = (radius) => {
  const circleArea = Math.PI * radius * radius;
  const circleConference = 2 * Math.PI * radius;
  return {
    area: circleArea.toFixed(2),
    circonferenza: circleConference.toFixed(2),
  };
};

/** EXERCISE 6
 * Write a function to add specific key in a specific path of an object
 * input: { a: 2, b: 3, c: 4 } 10 "d.e.f"
 *
 * output: {
 *  a: 2,
 *  b: 3,
 *  c: 4,
 *  d: {
 *    e: {
 *      f: 10
 *    }
 *  }
 * }
 *
 */

export const addKey = (obj, key, value) => {
  const keys = key.split(".");
  let tempObj = obj;
  for (let i = 0; i < keys.length; i++) {
    if (i === keys.length - 1) {
      tempObj[keys[i]] = value;
    } else {
      tempObj[keys[i]] = tempObj[keys[i]] || {};
      tempObj = tempObj[keys[i]];
    }
  }
  return obj;
};

/** EXERCISE 7
 * Write a function to add address key to user object
 * input: {
 *  id: 45
 *  name: "Pippo",
 *  phone: "333333333",
 *  email: "email@pippo.com"
 * }
 *
 * output: {
 *  id: 45
 *  name: "Pippo",
 *  phone: "333333333",
 *  email: "email@pippo.com"
 *  address: {
 *    street: "Via Udine",
 *    street_number: "12"
 *  }
 * }
 */
export const addAddressToUser = (user) => {
  // TODO
};

/** EXERCISE 8
 * Write a function that zip 2 array in one object
 * input: ['a', 'b', 'c'], [1, 2, 3]
 *
 * output: {a: 1, b: 2, c: 3}
 */
export const zipObjects = (keys, values) => {
  // TODO
};

/**
 * EXERCISE 9
 * Write a function that zip 2 array in one object, after add a key in that object with specific value and
 * finally add a key with the sum of the values stored in the object.
 * Tip: reuse code you have already written!
 *
 * input: ['a', 'b', 'c'], [1, 2, 3], 30
 *
 * output: {
 *  a: 1,
 *  b: 2,
 *  c: 3,
 *  newValue: 30,
 *  sum: 36
 * }
 */
export const dummyFunctionsComposition = (keys, values, valueToAdd) => {
  // TODO
};
