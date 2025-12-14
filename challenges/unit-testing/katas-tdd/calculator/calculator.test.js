const add = require("./calculator.js");

test('Returns the sum of the parameters as numbers: add("4","5","1","6")', () => {
  const currentOutput = add("4","5","1","6");
  const targetOutput = 16;

  expect(currentOutput).toEqual(targetOutput);
});

test('An empty string returns 0: add("4","5","1","6")', () => {
  const currentOutput = add("","","10","");
  const targetOutput = 10;

  expect(currentOutput).toEqual(targetOutput);
});

test('Negative value will throw an error : add("-4","-5","1","6")', () => {
  expect(() => add("-4","-5","1","6")).toThrowError("Negatives are not allowed: -4,-5");
});

test('Ignore numbers >= 1000: add("300","500","200","1056")', () => {
  const currentOutput = add("300","500","200","56");
  const targetOutput = 1056;

  expect(currentOutput).toEqual(targetOutput);
});

test('A string with several numbers separated by comma will be converted to numbers: add("4","5","5,45","6")', () => {
  const currentOutput = add("4","5","5,45","6");
  const targetOutput = 65;

  expect(currentOutput).toEqual(targetOutput);
});
