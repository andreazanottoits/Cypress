/// <reference types="cypress" />
/**
 * Create a describe for each function,
 * and an it for each case
 * NB: add .only after it for run only that test
 */

import {
  addTwoNumbers,
  sumNumbersInArray,
  getPrimeNumbers,
  reverseString,
  addTwoNumbersOrNumberString,
  circleValues,
  addAddress,
} from "../../unit_tests_functions"; // fix path

const array = [1, 2, 3, 4, 5];

describe("addTwoNumbers", () => {
  it("Number + Number", () => {
    expect(addTwoNumbers(2, 3)).to.equal(5); // this will pass
  });

  it("Number + String", () => {
    expect(addTwoNumbers(2, "3")).to.equal(5); // this will not pass
  });
});

describe("sumNumbersInArray", () => {
  it("sumNumbersInArray", () => {
    expect(sumNumbersInArray(array)).to.equal(15); // this will pass
  });
  it("sumNumbersInEmptyArray", () => {
    expect(sumNumbersInArray([])).to.equal(0); // this will not pass
  });
});

describe("getPrimeNumbers", () => {
  it("getPrimeNumbers", () => {
    expect(getPrimeNumbers(array)).to.eql([2, 3, 5]); // this will pass
  });
  it("getPrimeNumbers", () => {
    expect(getPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8])).to.eql([2, 3, 5]); // this will not pass
  });
});

describe("reverseString", () => {
  it("reverseString", () => {
    expect(reverseString("ciao")).to.equal("oaic"); // this will pass
  });
  it("getPrimeNumbers", () => {
    expect(reverseString("ciao")).to.equal("ciao"); // this will not pass
  });
});

describe("addTwoNumbersOrNumberString", () => {
  it("Number + Number", () => {
    expect(addTwoNumbersOrNumberString(2, 3)).to.equal(5); // this will pass
  });

  it("Number + String", () => {
    expect(addTwoNumbersOrNumberString(2, "3")).to.equal(5); // this will  pass
  });
});

describe("circleValues", () => {
  it("Area and Perimetro", () => {
    expect(circleValues(2)).to.eq({ area: "12.57", circonferenza: "12.57" }); // this will pass
  });
});

describe("addAddress", () => {
  it("Area and Perimetro", () => {
    var user = {
      id: 45,
      name: "Pippo",
      phone: "333333333",
      email: "email@pippo.com",
    };

    var userWithAddress = {
      id: 45,
      name: "Pippo",
      phone: "333333333",
      email: "email@pippo.com",
      address: {
        street: "Via Udine",
        street_number: "12",
      },
    };
    expect(addAddress(user)).to.deep.eql(userWithAddress); // this will pass
  });
});
