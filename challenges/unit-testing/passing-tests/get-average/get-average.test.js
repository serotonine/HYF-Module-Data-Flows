let average = require("./get-average");

test("Average", function () {
  const tests = [
    [4, "-", 8, 11, "hello", "57", 0, 2],
    [5678, "ccc", -24, 5, "678", "Sidonie & Aglaé"],
    [-567, -8, -11, "57", "", 2],
  ];
  const expected = [5, 1886, -146];
  for (let i = 0; i < tests.length; i++) {
    expect(average(tests[i])).toEqual(expected[i]);
  }
});
