let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", () => {
  expect(convertToOldRoman(1)).toEqual("I");
});

test("returns IIII if passed 4 as an argument", () => {
  expect(convertToOldRoman(4)).toEqual("IIII");
});

test("returns XXXXIIII if passed 44 as an argument", () => {
  expect(convertToOldRoman(44)).toEqual("XXXXIIII");
});

test("returns MDLXVII if passed 1567 as an argument", () => {
  expect(convertToOldRoman(1567)).toEqual("MDLXVII");
});
