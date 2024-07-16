// Solution 1
const reverseInteger1 = (num) => {
  return (reversed = num.toString().split("").reverse().join(""));
};

console.log(reverseInteger1(123)); // "321"

// Solution 2
const reverseInteger2 = (num) => {
  let reversed = 0;
  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return reversed;
};

console.log(reverseInteger2(123)); // 321
