function removeVowels(word) {
  const vowels = ["a", "o", "i", "e", "u"];
  let result = "";
  for (letter of word) {
    if (!vowels.includes(letter.toLowerCase())) {
      result += letter;
    }
  }
  return result;
}

module.exports = removeVowels;

/*
  Let's trace this piece of code - what is the value of result with this input

  let result = removeVowels('samuel');

  what is the value of result?
*/
