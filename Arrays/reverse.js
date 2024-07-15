const myArray = ["B", "U", "R", "A", "K"];

const reverse = (arr) => {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
};

console.log(reverse(myArray)); // [ 'K', 'A', 'R', 'U', 'B' ]

const reversedNameString = reverse(myArray).join("");
console.log(reversedNameString); // KARUB
