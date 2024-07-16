const isPalindrome = (word) => {
  const reversedWord = word.split("").reverse().join("");
  if (word === reversedWord) {
    return true;
  }
  return false;
};

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
