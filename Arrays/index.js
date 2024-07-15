class MyArray {
  // we are initializing the length of the array to 0 and the data to an empty object
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // we are creating a method to get the item at a specific index
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  // we are creating a method to delete the last item of the array
  get(index) {
    return this.data[index];
  }

  // we are creating a method to delete the last item of the array and return it
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  // we are creating a method to delete the first item of the array and return it
  shift() {
    const firstItem = this.data[0];

    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;

    return firstItem;
  }

  delete(index) {
    const item = this.data[index];
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
    return item;
  }
}

const myArray = new MyArray();
console.log("1. ", myArray);
// MyArray { length: 0, data: {} }

// Push Examples
myArray.push("hi");
console.log("2. ", myArray);
// MyArray { length: 1, data: { '0': 'hi' } }

// Get Example
myArray.get(0);
console.log("3. ", myArray.get(0));
// hi

// Pop Example
myArray.push("you");
myArray.pop();
console.log("5. ", myArray);
// MyArray { length: 1, data: { '0': 'hi' } }

// Shift Example
console.log("6. ", myArray);
// MyArray { length: 1, data: { '0': 'hi' } }
myArray.push("One");
myArray.push("Two");
myArray.shift();
console.log("7. ", myArray);
// MyArray { length: 0, data: {} }

// Delete Example
myArray.push("Three");
myArray.push("Four");
console.log("8. ", myArray);
// MyArray { length: 2, data: { '0': 'One', '1': 'Two', '3' : 'Three', '4': 'Four'}}
myArray.delete(2);
console.log("9. ", myArray);
// MyArray { length: 1, data: { '0': 'One', '1': 'Two', '4': 'Four'}}
