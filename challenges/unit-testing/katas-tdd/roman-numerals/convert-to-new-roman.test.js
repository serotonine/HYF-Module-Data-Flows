let convertToNewRoman = require("./convert-to-new-roman");

test("returns I if passed 1 as an argument", () => {
  expect(convertToNewRoman(1)).toEqual("I");
});

test("returns IV if passed 4 as an argument", () => {
  expect(convertToNewRoman(4)).toEqual("IV");
});

test("returns XLIV if passed 44 as an argument", () => {
  expect(convertToNewRoman(44)).toEqual("XLIV");
});

test("returns MDLXVII if passed 1567 as an argument", () => {
  expect(convertToNewRoman(1567)).toEqual("MDLXVII");
});

test("returns CMXCIX if passed 999 as an argument", () => {
  expect(convertToNewRoman(999)).toEqual("CMXCIX");
});
