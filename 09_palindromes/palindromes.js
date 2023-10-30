const palindromes = function (word) {
  word = word.split("");
  let regex = /^[a-zA-Z0-9]$/;
  word = word.filter((letter) => regex.test(letter));
  for (let i = 0; i <= word.length / 2; i++) {
    if (word[i].toLowerCase() === word[word.length - (i + 1)].toLowerCase()) {
      // do nothing if same
    } else {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
