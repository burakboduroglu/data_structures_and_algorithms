function binarySearch(array, target) {
  let start = 0;
  let end = array.length;

  if (start > end) return "Not found";

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (array[mid] === target) return `${target} found in INDEX ${mid}`;
    else if (array[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
}

const result = binarySearch([1, 2, 3, 4, 5, 6], 1);
console.log(result);
