/*
 * We are going to begin writing a function `convertToOldRoman`.
 * When passed an integer between 1 and 3000, this function will
 * return a string containing the proper old Roman Numeral.
 * In other words, `convertToOldRoman(4)` should return the string `'IIII'`.
 */

function convertToOldRoman(n) {
  const map = {
    M: 1000,
    CM: 900,
    D: 500,
    C: 100,
    XC: 90,
    L: 50,
    X: 10,
    IX: 9,
    V: 5,
    I: 1,
  };
  let str = "";
  for (var i in map) {
    while (n >= map[i]) {
      str += i;
      n -= map[i];
    }
  }
  return str;
}

module.exports = convertToOldRoman;
