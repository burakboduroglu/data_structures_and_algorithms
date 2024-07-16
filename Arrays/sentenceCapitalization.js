const capitalize = (str) => {
  arr = str.split("");
  arr.map((char, index) => {
    if (index === 0) {
      arr[index] = char.toUpperCase();
    } else if (arr[index - 1] === " ") {
      arr[index] = char.toUpperCase();
    }
  });

  return arr.join("");
};

console.log(capitalize("hello")); // "Hello"
console.log(capitalize("hello world")); // "Hello World"
