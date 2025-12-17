// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  const nb = numbers.filter((item) => typeof item !== "string");
  return Math.round(nb.reduce((acc, current) => acc + current, 0) / nb.length);
}

module.exports = average;
