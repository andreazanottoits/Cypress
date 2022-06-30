import * as R from "ramda";

/**
 * Here are some functions that includes Ramda.
 * For each there will be an explanation of what it does.
 * NB: do USEFUL tests, not tests that fit the function. In case of errors in the functions,
 * it is right that the test fails! Don't fix a test just to say the function is correct, it is not the correct way to test!
 *
 * No problem if code is not clear, work on test.
 */

/**
 * EXERCISE 1
 *
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
 *  contacts: {
 *     phone: "333333333",
 *     email: "email@pippo.com",
 *  }
 *  address: {
 *    street: "Via Udine",
 *    street_number: "12"
 *  }
 * }
 */
export const marshalUserFrom = (user) =>
  R.pipe(
    R.assoc("contacts", {
      phone: R.prop("phone", user),
      email: R.prop("email", user),
    }),
    R.dissoc("phone"),
    R.dissoc("email"),
    R.assoc("address", {
      street: "Via Udine",
      street_number: "12",
    })
  )(user);

/**
 * EXERCISE 2
 *
 * input: [[1,2,3,4,5], [45,23,120], [22,33,99]]
 *
 * output: [1,2,3,4,5,22,23,33,99,120]
 */
export const plainSortedArray = (array) =>
  R.pipe(
    R.flatten,
    R.sort((a, b) => a - b)
  )(array);

/**
 * Here are some functions to write with Ramda, follow the documentation and ask me if you have problems.
 * USE TDD, DO TEST BEFORE
 *
 */

/**
 * EXERCISE 3
 *
 * input: "hello"
 *
 * output: "olleh"
 */

export const reverseString = () => {
  return R.pipe(R.split(""), R.reverse, R.join(""));
};

/**
 * EXERCISE 4
 *
 * input: {
 *    a: 6,
 *    b: 1,
 *    c: 10,
 *    d: 4
 * }
 *
 * output: 21 -> values sum
 */

export const sumObjValues = (obj) => {
  return R.pipe(R.values, R.sum)(obj);
};

/** EXERCISE 5
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
export const addKey = (object, value, path) => {
  // TODO
};
