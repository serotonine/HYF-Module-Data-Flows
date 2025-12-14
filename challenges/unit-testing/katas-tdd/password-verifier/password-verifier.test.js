const verify = require("./password-verifier.js");
/*
 * Return 'Password rejected':
 * If the password is null,
 * If the password is less than 8 characters,
 * If the password does not have at least 1 uppercase letter,
 * If the password does not have at least 1 number,
 */

test("If the password is null, return Password rejected", () => {
  expect(verify(null)).toEqual("Password rejected");
});
test("If the password is less than 8 characters, return Password rejected", () => {
  expect(verify("whoAmI")).toEqual("Password rejected");
});
test("If the password does not have at least 1 uppercase letter, return Password rejected", () => {
  expect(verify("whoam666")).toEqual("Password rejected");
});
test("If the password does not have at least 1 uppercase letter, return Password rejected", () => {
  expect(verify("whoam666")).toEqual("Password rejected");
});
test("If the password does not have at least 1 number, return Password rejected", () => {
  expect(verify("Abraham_Lincoln")).toEqual("Password rejected");
});
test("If the password has all requirements, return Password accepted", () => {
  expect(verify("Sidonie8")).toEqual("Password accepted");
});
test("If the password has all requirements, return Password accepted", () => {
  expect(verify("1234PosiDonieCleanOceans")).toEqual("Password accepted");
});
