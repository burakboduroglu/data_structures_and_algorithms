// Description: Selection Sort Algorithm
let array = [5, 2, 21, 8, 9, 3, 2, 1, 78, 5, 12, 11, 5, 169, 14, 17, 18, 23];

for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] > array[j]) {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}
// Print the sorted array
console.log(array);
